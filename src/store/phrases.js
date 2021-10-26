import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        Phrases: [
            {
                phrase: "У чесних продавців і коменти норм"
            },
            {
                phrase: "Перевірено людьми"
            },
            {
                phrase: "Ви пишете відгуки — продавці пишуть правду"
            },
            {
                phrase: "«Перевірив – не біток». Перевірено людьми"
            },
            {
                phrase: "«Ціна реальна». Перевірено людьми"
            },
            {
                phrase: "«Машинка дійсно в салоні». Перевірено людьми"
            },
            {
                phrase: "«Ну трошки крашена». Перевірено людьми"
            },
            {
                phrase: "Більше чесної інфи даси — швидше тачку продаси"
            },
        ]
    },
    getters: {
        Phrases(state) {
            return state.Phrases
        }
    },
})
