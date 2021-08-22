import Vue from 'vue'
import Vuex from 'vuex'
import marks from "./marks"
import bodyTypes from "./bodyTypes";
import transportTypes from "./transportTypes";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        marks,
        bodyTypes,
        transportTypes
    }
})
