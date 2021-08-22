import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default ({
    state: {
        bodyTypes: []
    },
    mutations: {
        SET_BODY_TYPES_TO_VUEX: (state, bodyTypes) => {
            state.bodyTypes = bodyTypes
        }
    },
    actions: {
        GET_BODY_TYPES({commit}) {
            return axios('https://developers.ria.com/auto/categories/1/bodystyles?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                method: 'GET',
                accept: 'application/json'
            })
                .then((response) => {
                    commit('SET_BODY_TYPES_TO_VUEX', response.data)
                })
        }
    },
    getters: {
        bodyTypes(state) {
            return state.bodyTypes
        }
    },
    modules: {}
})
