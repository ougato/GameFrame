(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Manager/Event/ScriptNode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '94cd8C+2f9OGYUo4QGMjFCF', 'ScriptNode', __filename);
// Script/Core/Manager/Event/ScriptNode.js

"use strict";

/**
 * 脚本对象 链表结构体 节点
 * @type {Function}
 */

var ScriptNode = cc.Class({

  /**
   * 构造
   */
  ctor: function ctor() {
    // 构造参数
    // [ 0.监听脚本对象 ]
    var scriptObject = arguments[0];

    // 脚本对象
    this.m_objScript = scriptObject;
    // 上一个事件节点
    this.m_objPrevScript = null;
    // 下一个事件节点
    this.m_objNextScript = null;
  },


  /**
   * 销毁
   */
  destroy: function destroy() {
    this.m_objScript = null;
    this.m_objPrevScript = null;
    this.m_objNextScript = null;
  },


  /**
   * 获取脚本对象
   * @returns {null|*}
   */
  getScript: function getScript() {
    return this.m_objScript;
  },


  /**
   * 获取下一个事件节点对象
   * @returns {null}
   */
  getNext: function getNext() {
    return this.m_objNextScript;
  },


  /**
   * 获取上一个事件节点对象
   * @returns {null}
   */
  getPrev: function getPrev() {
    return this.m_objPrevScript;
  }
});

module.exports = ScriptNode;

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
        //# sourceMappingURL=ScriptNode.js.map
        