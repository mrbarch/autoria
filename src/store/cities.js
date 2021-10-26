import axios from "axios";

export default ({
    state: {
        cities: [],
    },
    mutations: {
        SET_CITIES_TO_VUEX: (state, payload) => {
            state.cities = payload
        },
    },
    actions: {
        GET_CITIES({commit}) {
            axios.get('https://developers.ria.com/auto/states/1/cities?api_key=NNu0QGSKlc1KrqulqK9MjxaW4veh8votIz3tDrdH', {
                accept: 'application/json'
            })
                .then((response) => {
                    commit('SET_CITIES_TO_VUEX', response.data)
                })
        }
    },
    getters: {
        cities(state) {
            return state.cities
        }
    },
    modules: {}
})
