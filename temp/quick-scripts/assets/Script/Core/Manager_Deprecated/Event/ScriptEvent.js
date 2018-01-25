(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Manager_Deprecated/Event/ScriptEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '09d94pALxtCwJbBogRWtsu3', 'ScriptEvent', __filename);
// Script_/Core/Manager/Event/ScriptEvent.js

"use strict";

/**
 * 脚本事件
 * @type {Function}
 */

var EventBase = require("EventBase");

cc.Class({
  extends: EventBase,

  /**
   * 构造
   */
  ctor: function ctor() {},


  /**
   * 获得
   * @returns {number}
   */
  getMsgId: function getMsgId() {
    return Math.floor(this.m_nMsgId / DefMsg.MSG_ID_SPAN) * DefMsg.MSG_ID_SPAN;
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
        //# sourceMappingURL=ScriptEvent.js.map
        