// 依赖其他模块的,模块定义需要先引入需要的模块,再定义当前模块
define(function (require, exports, module) {
  var moduleB = require('./moduleB')
  require('./jquery-1.11.1.min')
  // exports.sayHello = function() {
  //     return moduleB.method1()
  // };
  // exports.getDom = function(dom) {
  //     return $(dom)
  // };

  module.exports = {
    sayHello: function () {
      return moduleB.method1()
    },
    getDom: function (dom) {
      return $(dom)
    }
  }
})
