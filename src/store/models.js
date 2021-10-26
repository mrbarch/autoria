import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default ({
    state: {
        models: [],
    },
    mutations: {
        SET_MODELS_TO_VUEX: (state, payload) => {
            state.models = payload
        },
    },
    actions: {
        async GET_MODELS({commit}, typeOfTransportToMark) {
            const response = await axios.get(`/auto/categories/${typeOfTransportToMark.indexTypeOfTransport}/marks/${typeOfTransportToMark.indexMark}/models?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH`, {
                accept: 'application/json'
            })
            commit('SET_MODELS_TO_VUEX', response.data)
        }
    },
    getters: {
        models(state) {
            return state.models
        }
    },
    modules: {}
})
