import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default ({
    state: {
        models: []
    },
    mutations: {
        SET_MODELS_TO_VUEX: (state, models) => {
            state.models = models
        }
    },
    actions: {
        GET_MODELS({commit}) {
            return axios('https://developers.ria.com/auto/categories/?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                method: 'GET',
                accept: 'application/json'
            })
                .then((response) => {
                    commit('SET_MODELS_TO_VUEX', response.data)
                })
        }
    },
    getters: {
        models(state) {
            return state.models
        }
    },
    modules: {}
})
