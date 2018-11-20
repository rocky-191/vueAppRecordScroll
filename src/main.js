// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import 'lib-flexible'
// import FastClick from 'fastclick'
import store from './vuex'
import axios from 'axios'

Vue.prototype.$http=axios
Vue.config.productionTip = false
//FastClick.attach(document.body) //解决移动端点击延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
