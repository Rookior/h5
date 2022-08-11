// 依赖其他模块的,模块定义需要先引入需要的模块,再定义当前模块
define(['jquery', 'moduleB'], function (jquery, moduleB) {
    return {
        name:'hello moduleC',
        method1:moduleB.method1,
        getDom:jquery
    }
})
