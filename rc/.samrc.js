const { env } = require('process');

const https = env.HTTPS == 1;

module.exports = {
  // silent: false,
  // logLevel: 'TRACE',
  https,
  hosts: ['pre.my.domain.com', 'daily.my.domain.com', 'my.domain.com'],
  path: '/', // 默认打开路径
  // proxy: { // 代理配置
  //   port: 8800,  // 指定代理服务端口，默认8880
  // },
  // // 预览编译后效果，配置编译结果目录
  // webRoot: './dist',
};
