import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        marks: []
    },
    mutations: {
        SET_MARKS_TO_VUEX: (state, payload) => {
            state.marks = payload
        }
    },
    actions: {
        async GET_MARKS({commit}, activeTypeOfTransportToStore) {
            const response = await axios.get(`/auto/categories/${activeTypeOfTransportToStore}/marks?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH`, {
                accept: 'application/json'
            })
            commit('SET_MARKS_TO_VUEX', response.data)
        }
    },
    getters: {
        marks(state) {
            return state.marks
        }
    },
    modules: {}
})

