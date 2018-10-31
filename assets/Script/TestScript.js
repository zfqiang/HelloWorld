
cc.Class({
    extends: cc.Component,

    properties: {
        icon_gold : {
            default : null,
            type : cc.Prefab
        },
        btn_message : {
            default: null,
            type: cc.Node
        },
        scrollView : {
            default : null,
            type : cc.ScrollView
        },
        audio : {
            default : null,
            type : cc.AudioSource
        },
        sprite : {
            default : null,
            type : cc.Sprite
        },
        starPrefab : {
            default : [],
            type : [cc.Prefab]
        },
    },

    // LIFE-CYCLE CALLBACKS:
    callback(){
        cc.log('callback');
    },

    onLoad () {

        //this.schedule(this.callback, 2);
        // let self = this;


        // let url = 'http://newapi.com/Public/Xyly/img/btn.jpg';
        // cc.loader.load({url : url, type : 'jpg', isCrossOrigin : true }, function (err, asset) {
        //         if(err){
        //             console.log(err);
        //             return ;
        //         }
        //         console.log(asset);
        // });


        // cc.loader.loadRes('disk', cc.SpriteFrame, function (err, asset) {
        //
        //     if(err){
        //         console.log(err);
        //         return ;
        //     }
        //
        //     self.sprite.spriteFrame = asset;
        //
        // });
        
        
        // cc.loader.loadRes('bg', function (err, assets) {
        //     if (err) {
        //         cc.error(err);
        //         return;
        //     }
        //
        //     //self.audio.clip = assets;
        //     //self.audio.play();
        //     console.log(assets);
        // });



        // cc.loader.loadResDir('/', function (err, assets) {
        //     if (err) {
        //         cc.error(err);
        //         return;
        //     }
        //     console.log(assets);
        // });




        // var gold = cc.instantiate(this.icon_gold);
        //
        // this.node.addChild(gold);
        //
        // for (var i = 0; i < 10; i++){
        //     var gold = cc.instantiate(this.icon_gold);
        //     this.scrollView.content.addChild(gold);
        // }
        // var message = cc.instantiate(this.btn_message);
        // message.active = true;
        // this.node.addChild(message);
    },

    start () {

    },

    // update (dt) {},
});
