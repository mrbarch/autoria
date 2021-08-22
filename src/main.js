import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fontSize from './assets/vars.css'

Vue.config.productionTip = false



new Vue({
  router,
  store,
  fontSize,
  render: h => h(App)
}).$mount('#app')

