import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

export default ({
    state: {
        marks: []

    },
    mutations: {
        SET_MARKS_TO_VUEX: (state, marks) => {
            state.marks = marks
        }
    },
    actions: {
        GET_MARKS({commit}) {
            return axios('https://developers.ria.com/auto/categories/1/marks?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                method: 'GET',
                accept: 'application/json'
            })
                .then((response) => {
                    commit('SET_MARKS_TO_VUEX', response.data)
                })
        }
    },
    getters: {
        marks(state) {
            return state.marks
        }
    },
})
