import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        params: []
    },
    mutations: {
        SET_SEARCH_TO_VUEX: (state, payload) => {
            state.params = payload
        }
    },
    actions: {
        async SEARCH({commit}, searchObject) {
            console.log(searchObject)
            const response = await axios.get(`/auto/search`, {
                params: {
                    api_key: 'NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH',
                    ...searchObject
                }
            })
            commit('SET_SEARCH_TO_VUEX', response.data)
        }
    },
    getters: {
        params(state) {
            return state.params
        }
    },
    modules: {}
})

