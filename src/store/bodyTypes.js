import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const bodyTypes = ({
    state: {
        bodyTypes: []
    },
    mutations: {
        SET_BODY_TYPES_TO_VUEX: (state, payload) => {
            state.bodyTypes = payload
        }
    },
    actions: {
        GET_BODY_TYPES({commit}) {
            axios.get('https://developers.ria.com/auto/categories/1/bodystyles?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
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

export default bodyTypes
