const name = 'nodejs';
function hello(){
    return 'hello ' + name
}
// 导出方法hello
// module.exports = hello
// 导出对象含有方法hello
// module.exports.hello = hello
// 导出对象含有方法hello
module.exports = {
    hello
};