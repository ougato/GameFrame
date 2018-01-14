"use strict";
cc._RF.push(module, '09d94pALxtCwJbBogRWtsu3', 'ScriptEvent');
// Script/Core/Manager/Event/ScriptEvent.js

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