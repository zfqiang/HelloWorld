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
        progressBar : {
            default : null,
            type : cc.ProgressBar
        },
        label : {
            default : null,
            type : cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.progressBar.progress = 0;

        this.urls = [
            cc.url.raw('resources/56cy.sql.zip'),
            cc.url.raw('resources/bg.mp3'),
            cc.url.raw('resources/disk.png'),
        ];


        this.resouce = null;
        this.node.on(cc.Node.EventType.TOUCH_START, function(){
            if(this.resouce) {
                return ;
            }
            cc.loader.load(this.urls, this.progressCallBack.bind(this), this.completeCallBack.bind(this));
        }, this);
        
    },

    progressCallBack(completedCount, totalCount, item){
        this.resouce = item;
        let progress = completedCount / totalCount;
        this.label.string = (progress * 100).toFixed(2) + '%' + ' downloading.....';
        this.progressBar.progress = completedCount / totalCount;
        cc.log(completedCount / totalCount);
    },
    completeCallBack(){
        cc.log('completeCallBack');
    },
    start () {

    },

    update (dt) {
        //this.progressBar.progress += dt;
    },
});
