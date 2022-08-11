// 依赖其他模块的,模块定义需要先引入需要的模块,再定义当前模块
// define(['jquery', 'moduleB'], function (jquery, moduleB) {
//     return {
//         name:'hello moduleC',
//         method1:moduleB.method1,
//         getDom:jquery
//     }
// })


// define(function(require, exports, module) {
//     var jquery = require('./jquery-1.11.1.min');
//    console.log(333,jquery)
//     exports.moduleC = {
//         name:'hello moduleC',
//         getDom :function(dom){
//             console.log(123,$)
//             return 111
//         }
      
//     }
// });


// define('moduleC',function(require, exports, module) {

//     // 通过 require 引入依赖
//     var $ = require('./jquery-1.11.1.min');
   
  
//     // 通过 exports 对外提供接口
//     exports.doSomething = $
  
  
//   });

define(function(require, exports, module) {
    var moduleB = require("./moduleB");
    require('./jquery-1.11.1.min');
 
    exports.sayHello = function() {
        return moduleB.method1()
    };
    exports.getDom = function(dom) {
        return $(dom)
    };
});