(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/InitFrame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0ae032ED8tJx4iwzz5B0RTq', 'InitFrame', __filename);
// Script/Core/InitFrame.js

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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=InitFrame.js.map
        