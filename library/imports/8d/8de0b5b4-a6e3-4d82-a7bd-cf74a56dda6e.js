"use strict";
cc._RF.push(module, '8de0bW0puNNgqe9z3Slbdpu', 'EventNode');
// Script/Core/Manager/Event/EventNode.js

"use strict";

/**
 * 脚本对象 链表结构体 节点
 * @type {Function}
 */

var EventNode = cc.Class({

  /**
   * 构造
   */
  ctor: function ctor() {
    // 构造参数
    // [ 0.监听脚本对象 ]
    var scriptObject = arguments[0];

    // 脚本对象
    this.m_objScript = scriptObject;
    // 上一个事件节点
    this.m_objPrevNode = null;
    // 下一个事件节点
    this.m_objNextNode = null;
  },


  /**
   * 销毁
   */
  destroy: function destroy() {
    this.m_objScript = null;
    this.m_objPrevNode = null;
    this.m_objNextNode = null;
  },


  /**
   * 设置脚本对象
   * @param value {object}
   */
  setScript: function setScript(value) {
    this.m_objScript = value;
  },


  /**
   * 获取脚本对象
   * @returns {null|*}
   */
  getScript: function getScript() {
    return this.m_objScript;
  },


  /**
   * 设置下一个节点值
   * @param value {object}
   */
  setNext: function setNext(value) {
    this.m_objNextNode = value;
  },


  /**
   * 获取下一个事件节点对象
   * @returns {null|*}
   */
  getNext: function getNext() {
    return this.m_objNextNode;
  },


  /**
   * 设置上一个节点值
   * @param value {object}
   */
  setPrev: function setPrev(value) {
    this.m_objPrevNode = value;
  },


  /**
   * 获取上一个事件节点对象
   * @returns {null|*}
   */
  getPrev: function getPrev() {
    return this.m_objPrevNode;
  }
});

module.exports = EventNode;

cc._RF.pop();