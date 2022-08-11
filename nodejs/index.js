var $ = require('jquery')
console.log($)
var p = require('./p.js');
// console.log(p())
// console.log(p.hello())
console.log(p.hello())

if(typeof window !== 'undefined'){
    console.log('前端')
    document.getElementById("ul").innerHTML = p.hello()
}else{
    console.log('后端')
} 


