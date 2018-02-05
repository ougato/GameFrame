
// 单例对象
let instance = null;

/**
 * 声音管理器
 * @type {Function}
 */
let AudioManager = cc.Class({

    /**
     * 静态
     */
    static: {
        /**
         * 单例
         * @returns {*}
         */
        getInstance() {
            if( Utils.isNull( instance ) ) {
                instance = new AudioManager();
            }
            return instance;
        },

        /**
         * 销毁
         */
        destroy() {
            if( !Utils.isNull( instance ) ) {
                instance.destroy();
            }
            instance = null;
        },

    },

    /**
     * 构造
     */
    ctor() {
        this.initData();
    },

    /**
     * 销毁
     */
    destroy() {

    },

    /**
     * 初始化数据
     */
    initData() {
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
    play( filePath, isLoop, volume ) {
        return cc.audioEngine.play( filePath, isLoop, volume );
    },

});

module.exports = AudioManager;