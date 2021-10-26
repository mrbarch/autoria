import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default ({
    state: {
        countryOfManufacturer: [],
    },
    mutations: {
        SET_COUNTRY_OF_MANUFACTURER: (state, payload) => {
            state.countryOfManufacturer = payload
        },
    },
    actions: {
        GET_COUNTRY_OF_MANUFACTURER({commit}) {
            const countryOfManufacturerGet = axios('https://developers.ria.com/auto/countries?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                method: 'GET',
                accept: 'application/json'
            })
                .then((response) => {
                    commit('SET_COUNTRY_OF_MANUFACTURER', response.data)
                })
        }
    },
    getters: {
        countryOfManufacturer(state) {
            return state.countryOfManufacturer
        }
    },
    modules: {}
})
