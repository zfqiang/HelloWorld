// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var testScripts = require('TestScript');
cc.Class({
    extends: cc.Component,

    properties: {
        testScript : {
            default : null,
            type : testScripts
        },
        nameType : '',
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.removeAllChildren();
        this.sprite = this.node.getComponent(cc.Sprite);
        if(this.nameType == 'left'){
            this.node.addChild(this.getStar(0));
            this.index = 0;
        }else{
            this.node.addChild(this.getStar(1));
            this.index = 1;
        }

        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },

    touchEnd(){
        this.node.removeAllChildren();
        if(this.index == 0){
            this.node.addChild(this.getStar(1));
            this.index = 1;
        }else{
            this.node.addChild(this.getStar(0));
            this.index = 0;
        }
    },

    getStar(index){
        let starPrefab = this.testScript.starPrefab;
        let star = cc.instantiate(starPrefab[index]);
        return star;
    }
    // update (dt) {},
});
