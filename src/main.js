import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from "vuex";
import axios from "axios";
import './filters/globalFilters'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

axios.defaults.baseURL = 'https://developers.ria.com';

import ScrollAnimationNumber from "./directives/scrollanimation-number"
import ScrollAnimationCheck from "./directives/scrollanimation-check"
import ScrollAnimationVin from "./directives/scrollanimation-vin"
import ScrollAnimationVinMax from "./directives/scrollanimation-vin-max"
import ScrollAnimationTechnical from "./directives/scrollanimation-technical"
Vue.directive('scrollanimation-number', ScrollAnimationNumber)
Vue.directive('scrollanimation-check', ScrollAnimationCheck)
Vue.directive('scrollanimation-vin', ScrollAnimationVin)
Vue.directive('scrollanimation-vin-max', ScrollAnimationVinMax)
Vue.directive('scrollanimation-technical', ScrollAnimationTechnical)

import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

