import axios from "axios";

export default ({
    state: {
        transportTypes: [],
    },
    mutations: {
        SET_TRANSPORT_TYPES_TO_VUEX: (state, payload) => {
            state.transportTypes = payload
        },
    },
    actions: {
        async GET_TRANSPORT_TYPES({commit}) {
            const response = await axios.get('/auto/categories/?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                accept: 'application/json'
            })
            commit('SET_TRANSPORT_TYPES_TO_VUEX', response.data)
        }
    },
    getters: {
        transportTypes(state) {
            return state.transportTypes
        }
    },
})
