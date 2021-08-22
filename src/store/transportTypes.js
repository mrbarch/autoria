import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default ({
    state: {
        transportTypes: []
    },
    mutations: {
        SET_TRANSPORT_TYPES_TO_VUEX: (state, transportTypes) => {
            state.transportTypes = transportTypes
        }
    },
    actions: {
        GET_BODY_TYPES({commit}) {
            return axios('https://developers.ria.com/auto/categories/?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                method: 'GET',
                accept: 'application/json'
            })
                .then((response) => {
                    commit('SET_TRANSPORT_TYPES_TO_VUEX', response.data)
                })
        }
    },
    getters: {
        transportTypes(state) {
            return state.transportTypes
        }
    },
    modules: {}
})
