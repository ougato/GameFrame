(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Manager_Deprecated/Event/EventManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ccd0f2hc1CRa2Rdzstadec', 'EventManager', __filename);
// Script_/Core/Manager/Event/EventManager.js

"use strict";

/**
 * 事件管理器
 * @type {Function}
 */

var ScriptNode = require("ScriptNode");

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
        this.m_dictMsgList = {};
    },


    /**
     * 获取最后一个事件节点
     * @param msgId
     * @returns {*}
     */
    getLastEventNode: function getLastEventNode(msgId) {
        var eventNode = null;
        if (this.m_dictMsgList.hasOwnProperty(msgId)) {
            var eventList = this.m_dictMsgList[msgId];
            if (Utils.isArray(eventList) && eventList.length > 0) {
                eventNode = eventList[eventList.length - 1];
            }
        }
        return eventNode;
    },


    /**
     * 获取第一个事件节点
     * @param msgId
     * @returns {*}
     */
    getFirstEventNode: function getFirstEventNode(msgId) {
        var eventNode = null;
        if (this.m_dictMsgList.hasOwnProperty(msgId)) {
            var eventList = this.m_dictMsgList[msgId];
            if (Utils.isArray(eventList) && eventList.length > 0) {
                eventNode = eventList[0];
            }
        }
        return eventNode;
    },


    /**
     * 获取事件节点 在 数组里的下标
     * @param msgId
     * @param script
     * @returns {number}
     */
    getEventNodeIndex: function getEventNodeIndex(msgId, script) {
        var index = -1;
        if (this.m_dictMsgList.hasOwnProperty(msgId) && Utils.isArray(this.m_dictMsgList[msgId])) {
            for (var i = 0; i < this.m_dictMsgList[msgId].length; ++i) {
                var findNode = this.m_dictMsgList[msgId][i];
                if (!Utils.isNull(findNode) && findNode.getScript() === script) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    },


    /**
     * 内部函数 注册事件_1
     * @param msgId
     * @param eventNode
     * @private
     */
    _register1: function _register1(msgId, eventNode) {
        if (this.m_dictMsgList.hasOwnProperty(msgId) && Utils.isArray(this.m_dictMsgList[msgId])) {
            var lastNode = getLastEventNode(msgId);
            if (!Utils.isNull(lastNode)) {
                eventNode.m_objPrevEventNode = lastNode;
                eventNode.m_objNextEventNode = null;
                lastNode.m_objNextEventNode = eventNode;
            }
        } else {
            // msgId 在字典中不存在
            this.m_dictMsgList[msgId] = [];
        }
        this.m_dictMsgList[msgId].push(eventNode);
    },


    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2: function _register2(script, msgIdList) {
        for (var i = 0; i < msgIdList.length; ++i) {
            var eventNode = new EventNode(script);
            this._register1(msgIdList[i], eventNode);
        }
    },


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
        // [ 0.可变参数 1.可变参数 ]
        var param1 = arguments[0];
        var param2 = arguments[1];

        if (Utils.isNumber(param1) && Utils.isObject(param2)) {
            this._register1(param1, param2);
        } else if (Utils.isObject(param1) && Utils.isArray(param2)) {
            this._register2(param2, param2);
        }
    },


    /**
     * 内部函数 删除注册事件_1
     * @param msgId
     * @param script
     * @private
     */
    _unRegister1: function _unRegister1(msgId, script) {
        if (this.m_dictMsgList.hasOwnProperty(msgId) && Utils.isArray(this.m_dictMsgList[msgId])) {
            var firstNode = this.getFirstEventNode(msgId);
            var nextNode = firstNode;
            while (!Utils.isNull(nextNode)) {
                if (nextNode.getScript() === script) {
                    var index = this.getEventNodeIndex(script);
                    if (index >= 0) {
                        var prevNode = script.m_objPrevEventNode;
                        prevNode.m_objNextEventNode = script.m_objNextEventNode;
                        var _nextNode = script.m_objNextEventNode;
                        _nextNode.m_objPrevEventNode = script.m_objPrevEventNode;
                        var spliceNode = this.m_dictMsgList[msgId].splice(index, 1);
                        spliceNode.destroy();
                    }
                    break;
                }
                nextNode = nextNode.getNext();
            }
        }
    },


    /**
     * 内部函数 删除注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _unRegister2: function _unRegister2(script, msgIdList) {
        for (var i = 0; i < msgIdList.length; ++i) {
            this._unRegister1(msgIdList[i], script);
        }
    },


    /**
     * 卸载注册 消息事件
     * （注：通过参数类型来重载注册函数）
     * 一、通过消息ID，注册事件
     * 参数1 number 消息ID
     * 参数2 object 事件节点
     *
     * 二、在脚本对象内，注册多个消息ID
     * 参数1 object 脚本对象
     * 参数2 array 消息ID数组
     */
    unRegister: function unRegister() {
        // 参数
        // [ 0.可变参数 1.可变参数 ]
        var param1 = arguments[0];
        var param2 = arguments[1];

        if (Utils.isNumber(param1) && Utils.isObject(param2)) {
            this._unRegister1(param1, param2);
        } else if (Utils.isObject(param1) && Utils.isArray(param2)) {
            this._unRegister2(param2, param2);
        }
    },


    /**
     * 接收 消息 监听函数
     * @param msgId
     * @param data
     */
    onMessageEvent: function onMessageEvent(msgId, data) {
        if (this.m_dictMsgList.hasOwnProperty(msgId)) {} else {
            cc.warn("未找到消息 [" + msgId + "]");
        }
    }
});

module.exports = EventManager;

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
        //# sourceMappingURL=EventManager.js.map
        