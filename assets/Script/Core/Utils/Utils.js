/**
 * 工具类
 * @type {Function}
 */

// 实例化对象
let instance = null;

let Utils = cc.Class({

    /**
     * 静态类
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance() {
            if( instance === null ) {
                instance = new Utils();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {

    },

    /**
     * 判断是否为空
     * @param value
     * @returns {boolean}
     */
    isNull( value ) {
        let flag = false;
        if( value === null || value === undefined ) {
            flag = true
        }
        return flag;
    },

    /**
     * 判断是否类型为对象
     * @param value
     * @returns {boolean}
     */
    isObject( value ) {
        let flag = false;
        if( typeof( value ) === "object" ) {
            if( !(value instanceof Array) ) {
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
    isArray( value ) {
        let flag = false;
        if( typeof( value ) === "object" ) {
            if( value instanceof Array ) {
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
    isNumber( value ) {
        let flag = false;
        if( typeof( value ) === "number" ) {
            flag = true;
        }
        return flag;
    },

    /**
     * 判断是否类型为字符串
     * @param value
     * @returns {boolean}
     */
    isString( value ) {
        let flag = false;
        if( typeof( value ) === "string" ) {
            flag = true;
        }
        return flag;
    },

    /**
     * 判断是否类型为布尔
     * @param value
     * @returns {boolean}
     */
    isBooleam( value ) {
        let flag = false;
        if( typeof( value ) === "boolean" ) {
            flag = true;
        }
        return flag;
    },

});

module.exports = Utils;