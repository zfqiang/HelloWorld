// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.manager = cc.director.getCollisionManager();
        this.manager.enabled = true;
        this.manager.enabledDebugDraw = true;

        let winSize = cc.winSize;

        this.winWidth = winSize.width;
        this.winHeight = winSize.height;

        this.nodeWidth = this.node.width;
        this.nodeHeight = this.node.height;

        //设置飞机移动事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.toucheStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.toucheMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.toucheEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.toucheCancel, this);

        //this.launchBullet();
    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        console.log('on hero enter');
        //this.node.destroy();
    },

    toucheStart(event){

    },
    toucheMove(event){

        let touch = event.touch;

        let delta = touch.getDelta();

        //判断是否到达左右边界
        if(this.node.x < - this.winWidth / 2 + this.nodeWidth / 2){
            this.node.x = - this.winWidth / 2 + this.nodeWidth / 2;
        }else if(this.node.x > this.winWidth / 2 - this.nodeWidth / 2){
            this.node.x = this.winWidth / 2 - this.nodeWidth / 2;
        }else{
            this.node.x += delta.x;
        }

        //判断是否到达上下边界
        if(this.node.y < - this.winHeight / 2 + this.nodeHeight / 2){
            this.node.y = - this.winHeight / 2 + this.nodeHeight / 2;
        }else if(this.node.y > this.winHeight / 2 - this.nodeHeight / 2){
            this.node.y = this.winHeight / 2 - this.nodeHeight / 2;
        }else{
            this.node.y += delta.y;
        }
    },
    toucheEnd(event){

    },
    toucheCancel(event){

    },

    start () {

    },

    // update (dt) {},
});
