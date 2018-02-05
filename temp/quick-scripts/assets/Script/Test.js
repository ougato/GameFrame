(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Test.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '548bfwgpEZNqLvhPZ3Cgrp4', 'Test', __filename);
// Script/Test.js

"use strict";

var dict = { 10: null };

cc.log(dict.hasOwnProperty(10));
delete dict[10];
cc.log(dict.hasOwnProperty(10));

var arr = [1, 2, 3];
delete arr[0];
delete arr[1];
cc.log(arr);

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
        //# sourceMappingURL=Test.js.map
        