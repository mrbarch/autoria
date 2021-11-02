import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from "vuex";
import axios from "axios";
import './filters/globalFilters'
import ru from './locales/ru.json'
import ua from './locales/ua.json'

Vue.use(VueI18n)
import VueI18n from 'vue-i18n'
const i18n = new VueI18n({
    locale: 'ru',
    pluralizationRules: {
        'ru': function(choice, choicesLength, orgRule) {
            if (choice === 0) {
                return 0
            }

            const teen = choice > 10 && choice < 20
            const endsWithOne = choice % 10 === 1
            if (!teen && endsWithOne) {
                return 1
            }
            if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
                return 2
            }

            return choicesLength < 4 ? 2 : 3
        }
    },
    messages: {
        ru,
        ua
    },

})

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
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

