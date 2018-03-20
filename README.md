# 我的个站-tarot 的前端项目

## 采用技术
> koa2+vue2+vuex+webpack

## web目录

```
├── build/    (打包指令 )
├── src/      (开发用的目录 )
├		├── assets/  (静态资源)
├		├── components/  (功能模块/业务模块)
├		├		└── Index.vue (入口vue文件)
├		├── vuex/ (vuex目录： 放 数据管理状态管理的相关逻辑)
├		└── main.js/ (路由的配置)
├── dist/      (打包后的文件)
├── gulpfile.js   (gulp配置文件)
├── package.json  (项目描述)
└── webpack.config.js （webpack配置）


## 跟原版本不同之处

1. 更改页面的router-view结构

2.更改全屏页面的路由配置，以前是index/1代表首页，index/sdfsdfsdf代表其他全屏页面，现在取消，直接用index代表首页

## 备注

1. static 里面的/lang和/themes全是ueditor的相关资源