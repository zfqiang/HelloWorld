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
        bgList : {
            default: [],
            type: [ cc.Node ]
        },
        hero : {
            default: null,
            type: cc.Node
        },
        bulletPrefab : cc.Prefab,
        bgTime : 3,
        x : 0,
        y : 512,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //设置背景图的位置
        this.setBgPostion();

    },

    setBgPostion(){

        //设置背景图移动坐标和重置坐标
        this.movePos = cc.v2(0, - this.y);
        this.resetPos = cc.v2(0, this.y * 2 - 8);

        for (let i = 0; i < this.bgList.length; i++){
            this.bgList[i].setPosition(this.x, this.y * i);

            //背景循环滚动
            let backMove = cc.moveTo(this.bgTime * (i + 1), this.movePos);
            let seq = cc.sequence(backMove, cc.callFunc(this.backMoveEnd, this));

            this.bgList[i].runAction(seq);
        }
    },

    backMoveEnd(target){

        target.setPosition(this.resetPos);

        let backMove = cc.moveTo(this.bgTime * this.bgList.length, this.movePos);
        let seq = cc.sequence(backMove, cc.callFunc(this.backMoveEnd, this));

        target.runAction(seq);
    },

    start () {

    },

    update (dt) {

    },
});
