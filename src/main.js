import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import VueTouch from 'vue-touch'
import VueCookies from 'vue-cookies'
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)
Vue.use(VueTouch, {
  name: 'v-touch'
})
Vue.use(VueCookies)
// VueTouch.config.swpie = {
//   threshold: 100
// }
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')