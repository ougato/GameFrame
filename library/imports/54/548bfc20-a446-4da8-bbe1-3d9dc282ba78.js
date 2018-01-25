"use strict";
cc._RF.push(module, '548bfwgpEZNqLvhPZ3Cgrp4', 'Test');
// Script_/Test.js

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