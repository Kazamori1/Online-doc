// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import md5 from 'js-md5'

Vue.use(ElementUI,Vuex)
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.prototype.$md5 = md5
Vue.prototype.$HOST='https://'//国外镜像
// Vue.prototype.$HOST='http://'//国内镜像
// Vue.prototype.$HOST='http://'//开发环境
Vue.prototype.$appid= ""
Vue.prototype.$appsecret= ""
let appid= ""
let appsecret= ""
Vue.prototype.$sign=md5(appid + appsecret)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
})
