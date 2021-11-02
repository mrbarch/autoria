import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        bodyTypes: []
    },
    mutations: {
        SET_BODY_TYPES_TO_VUEX: (state, payload) => {
            state.bodyTypes = payload
        }
    },
    actions: {
        async GET_BODY_TYPES({commit}, types) {
            const response = await axios.get(`/auto/categories/${types}/bodystyles`, {
                params: {
                    api_key: 'NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH',
                }
            })
            commit('SET_BODY_TYPES_TO_VUEX', response.data)
        }
    },
    getters: {
        bodyTypes(state) {
            return state.bodyTypes
        }
    },
})

