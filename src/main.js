import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import Fragment from 'vue-fragment'
import App from './App.vue'
import router from './router'
// Подключаем bootsrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueFire)
Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
