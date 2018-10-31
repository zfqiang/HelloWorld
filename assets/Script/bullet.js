
cc.Class({
    extends: cc.Component,

    properties: {
       speed : 200
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        this.node.destroy();
    },

    update (dt) {
        this.node.y += this.speed * dt;
    },
});
