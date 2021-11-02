import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        regions: [
            {
                name: "Київ",
                region: "Київська",
                value: 10
            },
            {
                name: "Вінниця",
                region: "Вінницька",
                value: 1
            },
            {
                name: "Дніпро (Дніпропетровськ)",
                region: "Дніпропетровська",
                value: 11
            },
            {
                name: "Донецька обл.",
                region: "Донецька",
                value: 13
            },
            {
                name: "Житомир",
                region: "Житомирська",
                value: 2
            },
            {
                name: "Запоріжжя",
                region: "Запорізька",
                value: 14
            },
            {
                name: "Івано-Франківськ",
                region: "Івано-Франківська",
                value: 15
            },
            {
                name: "Кропивницький (Кіровоград)",
                region: "Кіровоградська",
                value: 16
            },
            {
                name: "Луганська обл.",
                region: "Луганська",
                value: 17
            },
            {
                name: "Луцьк",
                region: 'Волинська',
                value: 18
            },
            {
                name: "Львів",
                region: "Львівська",
                value: 5
            },
            {
                name: "Миколаїв",
                region: 'Миколаївська',
                value: 19
            },
            {
                name: "Одеса",
                region: "Одеська",
                value: 12
            },
            {
                name: "Полтава",
                region: "Полтавська",
                value: 20
            },
            {
                name: "Рівне",
                region: "Рівненська",
                value: 9
            },
            {
                name: "Суми",
                region: "Сумська",
                value: 8
            },
            {
                name: "Тернопіль",
                region: "Тернопільська",
                value: 3
            },
            {
                name: "Ужгород",
                region: "Закарпатська",
                value: 22
            },
            {
                name: "Харків",
                region: "Харківська",
                value: 7
            },
            {
                name: "Херсон",
                region: "Херсонська",
                value: 23
            },
            {
                name: "Хмельницький",
                region: "Хмельницька",
                value: 4
            },
            {
                name: "Черкаси",
                region: "Черкаська",
                value: 24
            },
            {
                name: "Чернівці",
                region: "Чернівецька",
                value: 25
            },
            {
                name: "Чернігів",
                region: "Чернігівська",
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

