/**
 * Created by ty on 18/3/10.
 */
const Koa = require('koa');
const KoaRouter = require('koa-router')();
const Webpack = require("webpack");
const Ip = require('ip').address();
const Opn = require('opn');
const KoaLogger = require('koa-logger')();
const KoaConvert = require('koa-convert');
const WebpackDevMid = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

const appConfig = require('./../conf/app.js');
const config = require('./webpack.config.dev');
const clientCompiler = Webpack(config);

const setCookieMiddleware = require('./utils/setCookieMiddleWare')
const httpMiddleware = require('./utils/httpMiddleWare')
const proxyMiddleware = require('./utils/proxyMiddleWare')
const errorMiddleware = require('./utils/errorMiddleWare')
const spaMiddleWare = require('./utils/spaMiddleWare')

const app = new Koa();
const uri = 'http://' + Ip + ':' + appConfig.appPort

const devMiddleware = WebpackDevMid(clientCompiler, {
    publicPath: config.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
        colors: true,
    },
    noInfo: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
});

// 中间件,一组async函数，generator函数需要convert转换
const middleWares = [
    // 打印请求与响应 日志
    KoaLogger,
    // 压缩响应
    require('koa-compress')(),
    // 错误处理
    errorMiddleware,
    // webpack开发中间件
    KoaConvert(devMiddleware),
    // webpack热替换中间件
    KoaConvert(webpackHotMiddleware(clientCompiler)),
    // 手动设置cookie方法
    setCookieMiddleware,
    // http中间件
    httpMiddleware(),
    // spa单页应用处理,非api后段请求返回index.html
    spaMiddleWare(),
    // 插入自定义中间件
    ...appConfig.middleWares,
    // 路由
    KoaRouter.middleware(),
    // 代理中间件
    proxyMiddleware(),
];

middleWares.forEach((middleware) => {
    if (!middleware) {
        return
    }
    app.use(middleware)
});

console.log('> Starting dev server...');

devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    Opn(uri)
});

// 错误处理
app.on('error', (err) => {
    console.error('Server error: \n%s\n%s ', err.stack || '')
});

const server = app.listen(appConfig.appPort)

process.on('SIGTERM', () => {
    console.log('Stopping dev server')
    devMiddleware.close()
    server.close(() => {
        process.exit(0)
    })
})