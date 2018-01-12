/**
 * 脚本自动生成
 * @type {anysdk.AgentManager|*|DefMsg|dragonBones.ObjectDataParser}
 */

let DefMsg = require( "DefMsg" );
let Utils = require( "Utils" );
let EventManager = require( "EventManager" );
// let ViewManager = require( "ViewManager" );

// TODO: 使用python脚本自动生成 需要导入的全局类
// 工具类
window.Utils = Utils.getInstance();
// 消息定义
window.DefMsg = DefMsg.getInstance();
// 事件管理器
window.EventManager = EventManager.getInstance();
// 视图管理器
// window.ViewManager = ViewManager.getInstance();