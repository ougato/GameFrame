/**
 * 消息定义
 * @type {Function}
 */

// 实例化对象
let instance = null;

let DefMsg = cc.Class({

    /**
     * 静态类
     */
    statics: {
        /**
         * 获取实例
         * @returns {DefMsg}
         */
        getInstance() {
            if( instance === null ) {
                instance = new DefMsg();
            }
            return instance;
        }
    },

    /**
     * 构造
     */
    ctor() {
        // 消息总数量
        this.m_nMsgCount = 0;

        // 消息ID 间隔数
        this.MSG_ID_SPAN = 3000;

        // 声音管理器 消息
        this.AUDIO_MANAGER = this.addMsgEvent();
        // 视图管理器 消息
        this.VIEW_MANAGER = this.addMsgEvent();
        // 网络管理器 消息
        this.NET_MANAGER = this.addMsgEvent();
    },

    /**
     * 添加消息事件
     */
    addMsgEvent() {
        let msgId = this.MSG_ID_SPAN * this.m_nMsgCount;
        ++this.m_nMsgCount;
        return msgId;
    },

    /**
     * 获取消息总数量
     * @returns {number}
     */
    getMsgCount() {
        return this.m_nMsgCount;
    },

});

module.exports = DefMsg;