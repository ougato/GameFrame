/**
 * 脚本对象 链表结构体 节点
 * @type {Function}
 */

let ScriptNode = cc.Class({

    /**
     * 构造
     */
    ctor() {
        // 构造参数
        // [ 0.监听脚本对象 ]
        let scriptObject = arguments[0];

        // 脚本对象
        this.m_objScript = scriptObject;
        // 上一个事件节点
        this.m_objPrevScript = null;
        // 下一个事件节点
        this.m_objNextScript = null;
    },

    /**
     * 销毁
     */
    destroy() {
        this.m_objScript = null;
        this.m_objPrevScript = null;
        this.m_objNextScript = null;
    },

    /**
     * 获取脚本对象
     * @returns {null|*}
     */
    getScript() {
        return this.m_objScript;
    },

    /**
     * 获取下一个事件节点对象
     * @returns {null}
     */
    getNext() {
        return this.m_objNextScript;
    },

    /**
     * 获取上一个事件节点对象
     * @returns {null}
     */
    getPrev() {
        return this.m_objPrevScript;
    },

});

module.exports = ScriptNode;