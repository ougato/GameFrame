(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Manager/Event/EventNode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '94cd8C+2f9OGYUo4QGMjFCF', 'EventNode', __filename);
// Script/Core/Manager/Event/EventNode.js

"use strict";

/**
 * 脚本对象 链表结构体 节点
 * @type {Function}
 */

var EventNode = cc.Class({

    /**
     * 构造
     */
    ctor: function ctor() {
        // 构造参数
        // [ 0.监听脚本对象 ]
        var scriptObject = arguments[0];

        // 脚本对象
        this.m_objScript = scriptObject;
        // 上一个视图对象
        this.m_objPrevScript = null;
        // 下一个视图对象
        this.m_objNextScript = null;
    },


    /**
     * 销毁
     */
    destroy: function destroy() {
        this.m_objScript = null;
        this.m_objPrevScript = null;
        this.m_objNextScript = null;
    }
});

module.exports = EventNode;

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
        //# sourceMappingURL=EventNode.js.map
        