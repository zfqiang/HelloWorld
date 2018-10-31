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
        heroRoot : cc.Node,
        bulletPrefab : cc.Prefab,
        enemyPrefab : cc.Prefab,
        explosionPrefab : cc.Prefab,
        enemyRootPrefab : cc.Prefab,
        bgTime : 3,
        x : 0,
        y : 512,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //设置背景图的位置
        this.setBgPostion();

        //发射子弹
        this.launchBullet();

        //敌机来袭
        this.ememyAttack();

    },

    setBgPostion(){

        //设置背景图移动坐标和重置坐标
        this.movePos = cc.v2(0, - this.y);
        this.resetPos = cc.v2(0, this.y * 2 - 10);

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


    //发射子弹
    launchBullet(){
        //每秒发射一个子弹
        this.schedule(function(){
            let bullet = cc.instantiate(this.bulletPrefab);

            let bulletScript = require('heroBullet');

            let bulletJs = bullet.getComponent(bulletScript);

            //设置位置
            let targetPos = cc.v2(this.hero.x, 1024);

            bulletJs.launch(this.heroRoot.convertToNodeSpace(targetPos));
            bullet.setPosition(this.hero.x, this.hero.y + 70);
            //添加子弹
            this.heroRoot.addChild(bullet);

        }.bind(this), 0.5);

    },

    ememyAttack(){
        //每秒发射一个子弹
        this.schedule(function(){
            let enemy = cc.instantiate(this.enemyRootPrefab);

            //添加敌机
            this.heroRoot.addChild(enemy);

        }.bind(this), 1);
    },

    explosion(pos){
        this.explosion = cc.instantiate(this.explosionPrefab);
        this.explosion.setPosition(pos);
        let explosionClip = this.explosion.getComponent(cc.Animation);
        explosionClip.play();

        this.heroRoot.addChild(this.explosion);

        this.scheduleOnce(function () {
            this.explosion.destroy();
        }.bind(this), 0.5);
    },

    start () {

    },

    update (dt) {

    },
});
