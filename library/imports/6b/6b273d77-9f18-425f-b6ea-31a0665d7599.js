"use strict";
cc._RF.push(module, '6b27313nxhCX7bqMaBmXXWZ', 'AudioManager');
// Script/Core/Manager/Audio/AudioManager.js

"use strict";

// 单例对象
var instance = null;

/**
 * 声音管理器
 * @type {Function}
 */
var AudioManager = cc.Class({

    /**
     * 静态
     */
    static: {
        /**
         * 单例
         * @returns {*}
         */
        getInstance: function getInstance() {
            if (Utils.isNull(instance)) {
                instance = new AudioManager();
            }
            return instance;
        },


        /**
         * 销毁
         */
        destroy: function destroy() {
            if (!Utils.isNull(instance)) {
                instance.destroy();
            }
            instance = null;
        }
    },

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
        // 音乐列表
        this.m_arrMusic = [];
        // 音效列表
        this.m_arrSound = [];
    },


    /**
     * 播放声音
     * @param filePath {String} - 声音文件路径+文件名
     * @param isLoop {Boolean} - 是否重复播放
     * @param volume {Number} - 音量 0.1~1.0 的范围值
     * @returns {number}
     */
    play: function play(filePath, isLoop, volume) {
        return cc.audioEngine.play(filePath, isLoop, volume);
    }
});

module.exports = AudioManager;

cc._RF.pop();