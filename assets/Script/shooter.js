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
        bullet : {
            default : null,
            type : cc.Node
        },
        bar : {
            default : null,
            type : cc.Node
        },
        speed : 100
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.manager = cc.director.getCollisionManager();
        this.manager.enabled = true;
        this.manager.enabledDebugDraw = true;

        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);

        //来回运动
        let left = cc.moveTo(1, cc.v2(-320, 154));
        let right = cc.moveTo(1, cc.v2(320, 154));

        var seq = cc.sequence(right, left).repeatForever();
        this.bar.runAction(seq);

    },

    onTouchBegan(event){
        var scene = cc.director.getScene();

        var touchLoc = event.touch.getLocation();

        var bullet = cc.instantiate(this.bullet);
        bullet.setPosition(touchLoc);
        bullet.active = true;
        scene.addChild(bullet);
    },

    start () {

    },

    // update (dt) {},
});
