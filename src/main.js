// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import Router from 'vue-router'
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
/* eslint-disable no-new */


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
