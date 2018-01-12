/**
 * 事件管理器
 * @type {Function}
 */

// 实例化对象
let instance = null;

let EventManager = cc.Class({

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
                instance = new EventManager();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 事件列表
        this.m_dictEventList = {};
    },

    register( msgId, script ) {

    },

    unRegister() {

    }

});

module.exports = EventManager;