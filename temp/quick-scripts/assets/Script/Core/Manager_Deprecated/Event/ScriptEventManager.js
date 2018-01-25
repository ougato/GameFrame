(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Manager_Deprecated/Event/ScriptEventManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b5bbdI2x+tAf78jRRmg7oYo', 'ScriptEventManager', __filename);
// Script_/Core/Manager/Event/ScriptEventManager.js

"use strict";

/**
 * 脚本事件 管理器
 * @type {Function}
 */

var ScriptNode = require("ScriptNode");

// 实例化对象
var instance = null;

var ScriptEventManager = cc.Class({

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
                instance = new ScriptEventManager();
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
     * 获取最后一个脚本节点
     * @param msgId
     * @returns {*}
     */
    getLastScriptNode: function getLastScriptNode(msgId) {
        var scriptNode = null;
        if (this.m_dictMsgList.hasOwnProperty(msgId)) {
            var scriptList = this.m_dictMsgList[msgId];
            if (Utils.isArray(scriptList) && scriptList.length > 0) {
                scriptNode = scriptList[scriptList.length - 1];
            }
        }
        return scriptNode;
    },


    /**
     * 获取第一个脚本节点
     * @param msgId
     * @returns {*}
     */
    getFirstScriptNode: function getFirstScriptNode(msgId) {
        var scriptNode = null;
        if (this.m_dictMsgList.hasOwnProperty(msgId)) {
            var scriptList = this.m_dictMsgList[msgId];
            if (Utils.isArray(scriptList) && scriptList.length > 0) {
                scriptNode = scriptList[0];
            }
        }
        return scriptNode;
    },


    /**
     * 获取脚本节点 在 数组里的下标
     * @param msgId
     * @param script
     * @returns {number}
     */
    getScriptNodeIndex: function getScriptNodeIndex(msgId, script) {
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
     * @param scriptNode
     * @private
     */
    _register1: function _register1(msgId, scriptNode) {
        if (this.m_dictMsgList.hasOwnProperty(msgId) && Utils.isArray(this.m_dictMsgList[msgId])) {
            var lastNode = getLastScriptNode(msgId);
            if (!Utils.isNull(lastNode)) {
                scriptNode.m_objPrevScript = lastNode;
                scriptNode.m_objNextScript = null;
                lastNode.m_objNextScript = scriptNode;
            }
        } else {
            // msgId 在字典中不存在
            this.m_dictMsgList[msgId] = [];
        }
        this.m_dictMsgList[msgId].push(scriptNode);
    },


    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2: function _register2(script, msgIdList) {
        for (var i = 0; i < msgIdList.length; ++i) {
            var scriptNode = new ScriptNode(script);
            this._register1(msgIdList[i], scriptNode);
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
            var firstNode = this.getFirstScriptNode(msgId);
            var nextNode = firstNode;
            while (!Utils.isNull(nextNode)) {
                if (nextNode.getScript() === script) {
                    var index = this.getScriptNodeIndex(script);
                    if (index >= 0) {
                        var prevNode = script.m_objPrevScript;
                        prevNode.m_objNextScript = script.m_objNextScript;
                        var _nextNode = script.m_objNextScript;
                        _nextNode.m_objPrevScript = script.m_objPrevScript;
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

module.exports = ScriptEventManager;

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
        //# sourceMappingURL=ScriptEventManager.js.map
        