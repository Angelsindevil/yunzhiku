// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
// import $ from 'jquery'
// Vue.use(Vuex)
Vue.config.productionTip = false
Vue.config.debug = true
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// export default {
//   name: 'app',
//   router,
//   store,
//   data() {
//     return {
//     }
//   },
//   components: {
//     App
//   }
// }
