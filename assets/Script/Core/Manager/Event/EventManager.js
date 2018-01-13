/**
 * 事件管理器
 * @type {Function}
 */

let EventNode = require( "EventNode" );

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
        this.m_dictMsgList = {};

    },

    /**
     * 获取最后一个事件节点
     * @param msgId
     * @returns {*}
     */
    getLastEventNode( msgId ) {
        let eventNode = null;
        if( this.m_dictMsgList.hasOwnProperty( msgId ) ) {
            let eventList = this.m_dictMsgList[msgId];
            if( Utils.isArray( eventList ) && eventList.length > 0 ) {
                eventNode = eventList[eventList.length-1];
            }
        }
        return eventNode;
    },

    /**
     * 获取第一个事件节点
     * @param msgId
     * @returns {*}
     */
    getFirstEventNode( msgId ) {
        let eventNode = null;
        if( this.m_dictMsgList.hasOwnProperty( msgId ) ) {
            let eventList = this.m_dictMsgList[msgId];
            if( Utils.isArray( eventList ) && eventList.length > 0 ) {
                eventNode = eventList[0];
            }
        }
        return eventNode;
    },

    /**
     * 获取事件节点 在 数组里的下标
     * @param msgId
     * @param eventNode
     * @returns {number}
     */
    getEventNodeIndex( msgId, eventNode ) {
        let index = -1;
        for( let i = 0; i < this.m_dictMsgList[msgId].length; ++i ) {
            let currNode = this.m_dictMsgList[msgId][i];
            if( currNode.getScript() === eventNode.getScript() ) {
                index = i;
                break;
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
    _register1( msgId, eventNode ) {
        if( this.m_dictMsgList.hasOwnProperty( msgId ) && Utils.isArray( this.m_dictMsgList[msgId] ) ) {
            let lastNode = getLastEventNode( msgId );
            if( !Utils.isNull( lastNode ) ) {
                eventNode.m_objPrevEventNode = lastNode;
                eventNode.m_objNextEventNode = null;
                lastNode.m_objNextEventNode = eventNode;
            }
        } else {
            // msgId 在字典中不存在
            this.m_dictMsgList[msgId] = [];
        }
        this.m_dictMsgList[msgId].push( eventNode );
    },

    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            let eventNode = new EventNode( script );
            this._register1( msgIdList[i], eventNode );
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
    register() {
        // 参数
        // [ 0.可变参数 1.可变参数 ]
        let param1 = arguments[0];
        let param2 = arguments[1];

        if( Utils.isNumber( param1 ) && Utils.isObject( param2 ) ) {
            this._register1( param1, param2 );
        } else if( Utils.isObject( param1 ) && Utils.isArray( param2 ) ) {
            this._register2( param2, param2 );
        }
    },

    /**
     * 内部函数 删除注册事件_1
     * @param msgId
     * @param eventNode
     * @private
     */
    _unRegister1( msgId, eventNode ) {
        if( this.m_dictMsgList.hasOwnProperty( msgId ) && Utils.isArray( this.m_dictMsgList[msgId] ) ) {
            let firstNode = this.getFirstEventNode( msgId );
            let nextNode = firstNode;
            while( !Utils.isNull( nextNode ) ) {
                if( nextNode.getScript() === eventNode.getScript() ) {
                    let index = this.getEventNodeIndex( eventNode );
                    if( index >= 0 ) {
                        let prevNode = eventNode.m_objPrevEventNode;
                        prevNode.m_objNextEventNode = eventNode.m_objNextEventNode;
                        let nextNode = eventNode.m_objNextEventNode;
                        nextNode.m_objPrevEventNode = eventNode.m_objPrevEventNode;
                        delete this.m_dictMsgList[msgId][index];
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
    _unRegister2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            let eventNode = new EventNode( script );
            this._register1( msgIdList[i], eventNode );
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
    unRegister() {
        // 参数
        // [ 0.可变参数 1.可变参数 ]
        let param1 = arguments[0];
        let param2 = arguments[1];

        if( Utils.isNumber( param1 ) && Utils.isObject( param2 ) ) {
            this._unRegister1( param1, param2 );
        } else if( Utils.isObject( param1 ) && Utils.isArray( param2 ) ) {
            this._unRegister2( param2, param2 );
        }
    },

});

module.exports = EventManager;