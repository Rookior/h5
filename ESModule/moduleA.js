// export关键字后直接跟变量声明
export const name = "wzy";
export const age = 18;

export const sayHello =  function(world){
   console.log(this.name + ' say hello ' + world )
}