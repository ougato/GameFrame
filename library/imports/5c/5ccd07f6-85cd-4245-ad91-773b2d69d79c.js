"use strict";
cc._RF.push(module, '5ccd0f2hc1CRa2Rdzstadec', 'EventManager');
// Script/Core/Manager/Event/EventManager.js

"use strict";

/**
 * 事件管理器
 * @type {Function}
 */

// 实例化对象
var instance = null;

var EventManager = cc.Class({

    /**
     * 静态类
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance: function getInstance() {
            if (instance === null) {
                instance = new EventManager();
            }
            return instance;
        }
    },

    /**
     * 构造
     */
    ctor: function ctor() {
        // 事件列表
        this.m_dictEventList = {};
    },


    /**
     * 内部函数 注册事件1
     * @param msgId
     * @param eventNode
     * @private
     */
    _register1: function _register1(msgId, eventNode) {
        if (this.m_dictEventList.hasOwnProperty(msgId)) {} else {}
    },


    /**
     * 内部函数 注册事件2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2: function _register2(script, msgIdList) {},


    /**
     * 注册 消息事件
     * （注：通过参数类型来重载注册函数）
     * 一、通过消息ID，注册事件
     * 参数1 number 消息ID
     * 参数2 object 事件节点
     *
     * 二、在脚本对象内，注册多个消息ID
     * 参数1 object 脚本对象
     * 参数2 array 消息ID数组
     */
    register: function register() {
        // 参数
        // [ 0.+++ 1.+++ ]
        var param1 = arguments[0];
        var param2 = arguments[1];

        if (Utils.isNumber(param1) && Utils.isObject(param2)) {
            this._register1(param1, param2);
        } else if (Utils.isObject(param1) && Utils.isArray(param2)) {
            this._register2(param2, param2);
        }
    },
    unRegister: function unRegister() {}
});

module.exports = EventManager;

cc._RF.pop();