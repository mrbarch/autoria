import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        regions: [
            {
                name: "Київ",
                value: 10
            },
            {
                name: "Вінниця",
                value: 1
            },
            {
                name: "Дніпро (Дніпропетровськ)",
                value: 11
            },
            {
                name: "Донецька обл.",
                value: 13
            },
            {
                name: "Житомир",
                value: 2
            },
            {
                name: "Запоріжжя",
                value: 14
            },
            {
                name: "Івано-Франківськ",
                value: 15
            },
            {
                name: "Кропивницький (Кіровоград)",
                value: 16
            },
            {
                name: "Луганська обл.",
                value: 17
            },
            {
                name: "Луцьк",
                value: 18
            },
            {
                name: "Львів",
                value: 5
            },
            {
                name: "Миколаїв",
                value: 19
            },
            {
                name: "Одеса",
                value: 12
            },
            {
                name: "Полтава",
                value: 20
            },
            {
                name: "Рівне",
                value: 9
            },
            {
                name: "Суми",
                value: 8
            },
            {
                name: "Тернопіль",
                value: 3
            },
            {
                name: "Ужгород",
                value: 22
            },
            {
                name: "Харків",
                value: 7
            },
            {
                name: "Херсон",
                value: 23
            },
            {
                name: "Хмельницький",
                value: 4
            },
            {
                name: "Черкаси",
                value: 24
            },
            {
                name: "Чернівці",
                value: 25
            },
            {
                name: "Чернігів",
                value: 6
            },
        ]

    },
    getters: {
        regions(state) {
            return state.regions

        },
    }
})

