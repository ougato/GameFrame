"use strict";
cc._RF.push(module, 'cc23eu/OT9JKqjT135mgSpX', 'EventBase');
// Script/Core/Manager_Deprecated/Event/EventBase.js

"use strict";

/**
 * 事件节点 父类
 * @type {Function}
 */

var EventBase = cc.Class({
    ctor: function ctor() {
        // 构造参数
        // [ 0.消息ID 1.消息数据 ]
        var id = arguments[0];
        var data = arguments[1];

        // 消息ID
        this.m_nMsgId = id;
        // 消息数据
        this.m_objData = data;
    },


    /**
     * 获取消息ID
     */
    getId: function getId() {
        return this.m_nMsgId;
    },


    /**
     * 获取消息数据
     */
    getData: function getData() {
        return this.m_objData;
    }
});

module.exports = EventBase;

cc._RF.pop();