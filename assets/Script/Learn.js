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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.WebSocketTest();
    },

    start () {

    },
    XMLHttpRequestTest(){

        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)){
                var response = xhr.responseText;
                cc.log(response);
            }
        }

        xhr.open('GET', 'http://zfq.com/', true);
        xhr.send();
    },

    WebSocketTest(){
        var ws = new WebSocket("ws://127.0.0.1:2346");

        ws.onopen = function(evt) { 
          console.log("Connection open ..."); 
          ws.send("Hello WebSockets!");
        };
        
        ws.onmessage = function(evt) {
          console.log( "Received Message: " + evt.data);
          ws.close();
        };
        
        ws.onclose = function(evt) {
          console.log("Connection closed.");
        };  
    },

    // update (dt) {},
});
