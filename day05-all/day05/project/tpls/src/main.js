// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//让当前项目支持VueResource插件：支持网络请求模块
import VueResource from 'vue-resource'
Vue.use(VueResource);
import './assets/css/bootstrap.css'
import './assets/js/jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
