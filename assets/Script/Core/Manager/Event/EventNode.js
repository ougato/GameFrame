/**
 * 脚本对象 链表结构体 节点
 * @type {Function}
 */

let EventNode = cc.Class({

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
        this.m_objPrevEventNode = null;
        // 下一个事件节点
        this.m_objNextEventNode = null;
    },

    /**
     * 销毁
     */
    destroy() {
        this.m_objScript = null;
        this.m_objPrevEventNode = null;
        this.m_objNextEventNode = null;
    },

    /**
     * 获取下一个事件节点对象
     * @returns {null}
     */
    getNext() {
        return this.m_objNextEventNode;
    },

    /**
     * 获取上一个事件节点对象
     * @returns {null}
     */
    getPrev() {
        return this.m_objPrevEventNode;
    },

});

module.exports = EventNode;