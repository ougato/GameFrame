"use strict";
cc._RF.push(module, '0ee57zXaDxIJ6QzjZT6fgiZ', 'Utils');
// Script/Core/Utils/Utils.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 工具类
 * @type {Function}
 */

// 实例化对象
var instance = null;

var Utils = cc.Class({

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
                instance = new Utils();
            }
            return instance;
        }
    },

    /**
     * 构造
     */
    ctor: function ctor() {},


    /**
     * 判断是否为空
     * @param value
     * @returns {boolean}
     */
    isNull: function isNull(value) {
        var flag = false;
        if (value === null || value === undefined) {
            flag = true;
        }
        return flag;
    },


    /**
     * 判断是否类型为对象
     * @param value
     * @returns {boolean}
     */
    isObject: function isObject(value) {
        var flag = false;
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
            if (!(value instanceof Array)) {
                flag = true;
            }
        }
        return flag;
    },


    /**
     * 判断是否类型为数组
     * @param value
     * @returns {boolean}
     */
    isArray: function isArray(value) {
        var flag = false;
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
            if (value instanceof Array) {
                flag = true;
            }
        }
        return flag;
    },


    /**
     * 判断是否类型为数字
     * @param value
     * @returns {boolean}
     */
    isNumber: function isNumber(value) {
        var flag = false;
        if (typeof value === "number") {
            flag = true;
        }
        return flag;
    },


    /**
     * 判断是否类型为字符串
     * @param value
     * @returns {boolean}
     */
    isString: function isString(value) {
        var flag = false;
        if (typeof value === "string") {
            flag = true;
        }
        return flag;
    },


    /**
     * 判断是否类型为布尔
     * @param value
     * @returns {boolean}
     */
    isBooleam: function isBooleam(value) {
        var flag = false;
        if (typeof value === "boolean") {
            flag = true;
        }
        return flag;
    }
});

module.exports = Utils;

cc._RF.pop();