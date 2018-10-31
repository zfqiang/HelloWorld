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
        speed : 3,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.manager = cc.director.getCollisionManager();
        this.manager.enabled = true;
        this.manager.enabledDebugDraw = true;
    },

    launch(targetPos){
        //发射子弹
        let launch = cc.moveTo(this.speed, targetPos);
        let moveEnd = cc.callFunc(function () {
            this.node.destroy();
        }.bind(this));

        let seq = cc.sequence(launch, moveEnd);
        this.node.runAction(seq);
    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        //cc.log(other.world);


        //this.node.destroy();
    },
    start () {

    },

    // update (dt) {},
});
