/**
 * 脚本事件 管理器
 * @type {Function}
 */

let EventNode = require( "EventNode" );

// 实例化对象
let instance = null;

let ViewEvent = cc.Class({

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
                instance = new ViewEvent();
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
     * 获取最后一个脚本节点
     * @param msgId
     * @returns {*}
     */
    getLastEventNode( msgId ) {
        let scriptNode = null;
        if( this.m_dictMsgList.hasOwnProperty( msgId ) ) {
            let scriptList = this.m_dictMsgList[msgId];
            if( Utils.isArray( scriptList ) && scriptList.length > 0 ) {
                scriptNode = scriptList[scriptList.length-1];
            }
        }
        return scriptNode;
    },

    /**
     * 获取第一个脚本节点
     * @param msgId
     * @returns {*}
     */
    getFirstEventNode( msgId ) {
        let scriptNode = null;
        if( this.m_dictMsgList.hasOwnProperty( msgId ) ) {
            let scriptList = this.m_dictMsgList[msgId];
            if( Utils.isArray( scriptList ) && scriptList.length > 0 ) {
                scriptNode = scriptList[0];
            }
        }
        msgId.toString();
        return scriptNode;
    },

    /**
     * 获取脚本节点 在 数组里的下标
     * @param msgId
     * @param script
     * @returns {number}
     */
    getEventNodeIndex( msgId, script ) {
        let index = -1;
        if( this.m_dictMsgList.hasOwnProperty( msgId ) && Utils.isArray( this.m_dictMsgList[msgId] ) ) {
            for( let i = 0; i < this.m_dictMsgList[msgId].length; ++i ) {
                let findNode = this.m_dictMsgList[msgId][i];
                if( !Utils.isNull( findNode ) && findNode.getScript() === script ) {
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
    _register1( msgId, scriptNode ) {
        if( this.m_dictMsgList.hasOwnProperty( msgId ) && Utils.isArray( this.m_dictMsgList[msgId] ) ) {
            let lastNode = getLastEventNode( msgId );
            if( !Utils.isNull( lastNode ) ) {
                scriptNode.m_objPrevScript = lastNode;
                scriptNode.m_objNextScript = null;
                lastNode.m_objNextScript = scriptNode;
            }
        } else {
            // msgId 在字典中不存在
            this.m_dictMsgList[msgId] = [];
        }
        this.m_dictMsgList[msgId].push( scriptNode );
    },

    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            let scriptNode = new EventNode( script );
            this._register1( msgIdList[i], scriptNode );
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
            this._register2( param1, param2 );
        }
    },

    /**
     * 内部函数 删除注册事件_1
     * @param msgId
     * @param script
     * @private
     */
    _unRegister1( msgId, script ) {
        if( this.m_dictMsgList.hasOwnProperty( msgId ) && Utils.isArray( this.m_dictMsgList[msgId] ) ) {
            let firstNode = this.getFirstEventNode( msgId );
            let nextNode = firstNode;
            while( !Utils.isNull( nextNode ) ) {
                if( nextNode.getScript() === script ) {
                    let index = this.getEventNodeIndex( script );
                    if( index >= 0 ) {
                        let prevNode = script.m_objPrevScript;
                        prevNode.m_objNextScript = script.m_objNextScript;
                        let nextNode = script.m_objNextScript;
                        nextNode.m_objPrevScript = script.m_objPrevScript;
                        let spliceNode = this.m_dictMsgList[msgId].splice( index, 1 );
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
    _unRegister2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            this._unRegister1( msgIdList[i], script );
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
            this._unRegister2( param1, param2 );
        }
    },

    /**
     * 接收 消息 监听函数
     * @param msgId
     * @param data
     */
    onMessageEvent( msgId, data ) {
        if( this.m_dictMsgList.hasOwnProperty( msgId ) ) {

        } else {
            cc.warn( "未找到消息 [" + msgId + "]" );
        }
    },

});

module.exports = ViewEvent;