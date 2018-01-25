"use strict";
cc._RF.push(module, '0ae032ED8tJx4iwzz5B0RTq', 'InitFrame');
// Script_/Core/InitFrame.js

"use strict";

var ViewBase = require("ViewBase");

cc.Class({
  extends: ViewBase,

  properties: {},

  start: function start() {
    this.register();
    this.initData();
    this.initView();
    this.initFrame();
  },


  /**
   * 注册事件
   */
  register: function register() {},


  /**
   * 初始化数据
   */
  initData: function initData() {},


  /**
   * 初始化视图
   */
  initView: function initView() {},


  /**
   * 初始化框架
   */
  initFrame: function initFrame() {
    require("Global");
    require("Test");
  }
});

cc._RF.pop();