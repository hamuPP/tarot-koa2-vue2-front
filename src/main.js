import 'babel-polyfill'
// // 引入响应式设计JS todo 这玩意儿是干啥的,先不要
// import '@build/utils/responsiveDesign'
// 第三方库
import Vue from 'vue'

// 引入公共样式
import '@/assets/css/common.less'

// vue config配置文件
import './config'

// 引入路由
import router from './router/router'
import App from './app.vue'

/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
});
