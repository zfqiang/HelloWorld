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

    start () {

    },

    // update (dt) {},
});
