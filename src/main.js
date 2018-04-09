import 'babel-polyfill';
// // 引入响应式设计JS todo 这玩意儿是干啥的,先不要
// import '@build/utils/responsiveDesign'
// 第三方库
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/routes.js';
import Utils from './utils';
import store from './vuex';
import iView from 'iview';

import 'iview/dist/styles/iview.css';

// 引入本项目的公共样式
import '@/assets/css/common.less'
import '@/assets/css/main.less'

// vue config配置文件
// import './config'

import App from './app.vue'

Vue.use(VueRouter);
Vue.use(iView);

// 设置路由
const router = new VueRouter({
    mode: 'history',
    routes
});
router.beforeEach((to, from, next) => {
    Utils.title(to.meta.title);
    next();
});

router.afterEach((route) => {
    // 设置标题 todo 设置标题的方式
    // doc.title = route.meta.title || '首页'
    // iView.LoadingBar.finish();
});

/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
