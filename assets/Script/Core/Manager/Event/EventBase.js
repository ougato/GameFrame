/**
 * 事件父类
 * @type {Function}
 */

let EventBase = cc.Class({

    ctor() {
        // 构造参数
        // [ 0.消息ID ]
        let msgId = arguments[0];

        // 消息ID
        this.m_nMsgId = msgId;
    },

    getManagerId() {
        return Math.floor( this.m_nMsgId / DefMsg.MSG_ID_SPAN ) * DefMsg.MSG_ID_SPAN;
    },

});

module.exports = EventBase;