let ViewBase = require( "ViewBase" );

cc.Class({
    extends: ViewBase,

    properties: {

    },

    start () {
        this.register();
        this.initData();
        this.initView();
        this.initFrame();
    },

    /**
     * 注册事件
     */
    register() {

    },

    /**
     * 初始化数据
     */
    initData() {

    },

    /**
     * 初始化视图
     */
    initView() {

    },

    /**
     * 初始化框架
     */
    initFrame() {
        require( "Global" );
        require( "Test" );
    },
});
