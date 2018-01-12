"use strict";
cc._RF.push(module, 'cc23eu/OT9JKqjT135mgSpX', 'EventBase');
// Script/Core/Manager/Event/EventBase.js

"use strict";

/**
 * 事件父类
 * @type {Function}
 */

var EventBase = cc.Class({
    ctor: function ctor() {
        // 构造参数
        // [ 0.消息ID ]
        var msgId = arguments[0];

        // 消息ID
        this.m_nMsgId = msgId;
    },
    getManagerId: function getManagerId() {
        return Math.floor(this.m_nMsgId / DefMsg.MSG_ID_SPAN) * DefMsg.MSG_ID_SPAN;
    }
});

module.exports = EventBase;

cc._RF.pop();