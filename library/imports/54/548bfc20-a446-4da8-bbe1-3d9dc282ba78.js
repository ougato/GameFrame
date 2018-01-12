"use strict";
cc._RF.push(module, '548bfwgpEZNqLvhPZ3Cgrp4', 'Test');
// Script/Test.js

"use strict";

var dict = { 10: null };

cc.log(dict.hasOwnProperty(10));
delete dict[10];
cc.log(dict.hasOwnProperty(10));

cc._RF.pop();