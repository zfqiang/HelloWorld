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
        monsterPrefab : {
            default : null,
            type : cc.Prefab    
        },
        prefabCount : 20,
        prefabInterval : 0.1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.monsterCount = 0;
        
        this.schedule(this.addMonster, this.prefabInterval);
    },

    addMonster(){
        if(this.monsterCount >= this.prefabCount){
            this.unschedule(this.addMonster);
            return ;
        }

        //添加monster
        let monster = cc.instantiate(this.monsterPrefab);
        this.node.addChild(monster);
        monster.setPosition(this.randomPosition());

        this.monsterCount++;
    },

    randomPosition(){
        return cc.v2(-480 + Math.random() * 960, -320 + Math.random() * 640);
    }

    // update (dt) {},
});
