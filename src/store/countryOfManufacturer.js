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
        async GET_COUNTRY_OF_MANUFACTURER({commit}) {
            const response = await axios('/auto/countries', {
                params: {
                    api_key: 'NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH',
                }
            })
            commit('SET_COUNTRY_OF_MANUFACTURER', response.data)
        }
    },
    getters: {
        countryOfManufacturer(state) {
            return state.countryOfManufacturer
        }
    },
    modules: {}
})
