const path = require('path');

//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave:true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@views',resolve('src/views'))
      .set('@common',resolve('@/common'))
  }
}
