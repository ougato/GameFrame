/**
 * 脚本事件
 * @type {Function}
 */

let EventBase = require( "EventBase" );

cc.Class({
    extends: EventBase,

    /**
     * 构造
     */
    ctor(){

    },

    /**
     * 获得
     * @returns {number}
     */
    getMsgId() {
        return Math.floor( this.m_nMsgId / DefMsg.MSG_ID_SPAN ) * DefMsg.MSG_ID_SPAN;
    },

});
