import Vue from 'vue'
import Vuex from 'vuex'
import transportTypes from "./transportTypes"
import marks from "./marks"
import models from "./models"
import randomPhrases from "./phrases";
import CarCatalogNew from "./carCatalogNew";
import countryOfManufacturer from "./countryOfManufacturer";
import search from "./search";
import regions from "./regions";
import bodyTypes from "./bodyTypes";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        transportTypes,
        marks,
        models,
        randomPhrases,
        CarCatalogNew,
        countryOfManufacturer,
        search,
        regions,
        bodyTypes
    },
})
