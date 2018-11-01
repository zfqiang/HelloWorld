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
        height : 542,
        // explosionPrefab : cc.Prefab,
        // canvas : cc.Node,
        // enemy : cc.Node,
        // explosion : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.manager = cc.director.getCollisionManager();
        this.manager.enabled = true;
        //this.manager.enabledDebugDraw = true;


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
        let Range = Max - Min;
        let Rand = Math.random();
        let num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    },

    onCollisionEnter: function (other, self) {

        if(self.node.y <= 1024){

            let sprite = self.node.getComponent(cc.Sprite);
            if(sprite.spriteFrame){

                sprite.spriteFrame = null;

                let explosionClip = self.node.getComponent(cc.Animation);
                explosionClip.play();

                this.scheduleOnce(function () {
                    self.node.destroy();
                }.bind(self), 0.5);


                let heroroot = self.node.parent;
                let score = heroroot.getChildByName('score');
                let sco = score.getComponent(cc.Label);

                sco.string = parseInt(sco.string) + 1;
            }
        }

    },


    start () {

    },

    // update (dt) {},

});
