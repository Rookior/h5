seajs.config({
  // Sea.js 的基础路径
 
  // 路径配置
  paths: {
    asset: './js'
  },
  // 别名配置
  alias: {
    jquery: 'asset/jquery-1.11.1.min',
    moduleA: 'asset/moduleA',
    moduleB: 'asset/moduleB',
    moduleC: 'asset/moduleC'
  }
})
