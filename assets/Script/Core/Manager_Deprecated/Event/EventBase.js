/**
 * 事件节点 父类
 * @type {Function}
 */

let EventBase = cc.Class({

    ctor() {
        // 构造参数
        // [ 0.消息ID 1.消息数据 ]
        let id = arguments[0];
        let data = arguments[1];

        // 消息ID
        this.m_nMsgId = id;
        // 消息数据
        this.m_objData = data;
    },

    /**
     * 获取消息ID
     */
    getId() {
        return this.m_nMsgId;
    },

    /**
     * 获取消息数据
     */
    getData() {
        return this.m_objData;
    },

});

module.exports = EventBase;