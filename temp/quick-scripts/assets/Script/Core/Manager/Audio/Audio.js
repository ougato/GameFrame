(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Core/Manager/Audio/Audio.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2db1cicgI5EubK71cdFlf9+', 'Audio', __filename);
// Script/Core/Manager/Audio/Audio.js

"use strict";

/**
 * 声音基类
 * @type {Function}
 */
var Audio = cc.Class({

    /**
     * 构造
     */
    ctor: function ctor() {
        this.initData();
    },


    /**
     * 销毁
     */
    destroy: function destroy() {},


    /**
     * 初始化数据
     */
    initData: function initData() {
        // ID
        this.m_nId = 0;
    },


    /**
     * 播放
     */
    play: function play() {},


    /**
     * 停止
     */
    stop: function stop() {},


    /**
     * 暂停
     */
    pause: function pause() {}
});

module.exports = Audio;

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
        //# sourceMappingURL=Audio.js.map
        