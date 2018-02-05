(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Global/Global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '91ce47xgJdLrqlWYlBdNUZm', 'Global', __filename);
// Script/Core/Global/Global.js

"use strict";

/**
 * 脚本自动生成
 * @type {anysdk.AgentManager|*|DefMsg|dragonBones.ObjectDataParser}
 */

var DefMsg = require("DefMsg");
var Utils = require("Utils");
var EventManager = require("EventManager");
// let ViewManager = require( "ViewManager" );

// TODO: 使用python脚本自动生成 需要导入的全局类
// 工具类
window.Utils = Utils.getInstance();
// 消息定义
window.DefMsg = DefMsg.getInstance();
// 事件管理器
window.EventManager = EventManager.getInstance();
// 视图管理器
// window.ViewManager = ViewManager.getInstance();

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
        //# sourceMappingURL=Global.js.map
        