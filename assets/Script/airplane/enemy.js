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
        height : 542
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let winSize = cc.winSize;

        this.winWidth = winSize.width;
        this.winHeight = winSize.height;

        this.nodeWidth = this.node.width;
        this.nodeHeight = this.node.height;

        //顶部随机生成位置
        let posX = this.randomNumBoth(- this.winWidth / 2 + this.nodeWidth / 2,  this.winWidth / 2 - this.nodeWidth / 2)
        let pos = cc.v2(posX, this.height);

        this.node.setPosition(pos);

        //设置移动
        let move = cc.moveTo(this.speed, cc.v2(posX, - this.height));
        let moveEnd = cc.callFunc(function () {
            this.node.destroy();
        }.bind(this));

        let seq = cc.sequence(move, moveEnd);
        this.node.runAction(seq);

    },

    randomNumBoth(Min, Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    },

    start () {

    },

    // update (dt) {},
});
