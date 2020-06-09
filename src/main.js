import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {
  name: 'v-touch'
})
// VueTouch.config.swpie = {
//   threshold: 100
// }
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')