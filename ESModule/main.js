import { name, age } from "./moduleA.js";
console.log(name, age);
import * as moduleA from "./moduleA.js";
console.log(moduleA,moduleA.name,moduleA.age)
moduleA.sayHello('world')

import * as moduleB from "./moduleB.js";
var ppp = moduleB.default.sex;
console.log(ppp)
document.body.addEventListener("click",function(){
    alert(ppp)
})
// 当使用webpack打包时不需要加default,否则会报错.webpack编译后 变量会直接定义成对应值的字符串，写入代码
console.log(moduleB.default.sex);
// webpack打包时，不需要default否则报错
// console.log(moduleB.sex);

// "use strict";

// (function () {
//   "use strict";

//   var e = "female";
//   console.log(e);
//   var o = e;
//   console.log(o), document.body.addEventListener("click", function () {
//     alert(o);
//   });
// })();



