"use strict";
cc._RF.push(module, '94cd8C+2f9OGYUo4QGMjFCF', 'EventNode');
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