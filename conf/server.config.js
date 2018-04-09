/**
 * 配置服务端口，以及代理
 */
const constants = require('./constants');
const common = 'test';
module.exports = {
  appPort: 7001,
  proxy: {
    '/api/test': constants.loginTargets[common],
    '/v3/assistant': 'http://restapi.amap.com/v3/',
      // '/test':'../test'
  },
};
