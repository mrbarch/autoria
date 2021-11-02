import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        searchResult: []
    },
    mutations: {
        SET_SEARCH_TO_VUEX: (state, payload) => {
            state.searchResult = payload
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
        searchResult(state) {
            return state.searchResult
        }
    },
    modules: {}
})

