<template>
  <div>
    <div class="filter">
      <div class="container">
        <div class="filter__block">
          <div class="filter__block-row">
            <div class="filter__block-state">
              <button class="filter__block-state-btn">Всі</button>
              <button class="filter__block-state-btn">Вживані</button>
              <button class="filter__block-state-btn">Нові</button>
              <button class="filter__block-state-btn">Під пригон</button>
            </div>
            <div class="filter__block-vin">
              <div class="filter__block-vin-checkbox">
                <svg>
                  <path
                      d="M0.5 3H2L5 0H11L11.75 0.75L8 4.5L6 2.5L4.5 4L8 7.5L13.25 2.25L14 3H15.5C15.7761 3 16 3.22386 16 3.5C16 3.77614 15.7761 4 15.5 4H15V10C15 10.5523 14.5523 11 14 11H13C12.4477 11 12 10.5523 12 10V9H4V10C4 10.5523 3.55228 11 3 11H2C1.44772 11 1 10.5523 1 10V4H0.5C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3Z"
                      fill="white"></path>
                </svg>
                <p>Перевірений VIN</p>
              </div>
              <label for="vin" class="label">
                <input class="checkbox" type="checkbox" id="vin">
              </label>
            </div>
          </div>
          <div class="filter__block-row">
            <div class="filter__block-type">
              <select class="input" name="cars" id="type">
                <option :key="transportType.name" v-for="transportType in this.transportTypes">{{ transportType.name }}</option>
              </select>
            </div>
            <div class="filter__block-region">
              <p class="filter__block-region-title">Регіон</p>
              <select class="input" name="cars" id="region">
                <option>Київ</option>
              </select>
            </div>
          </div>
          <div class="filter__block-row">
            <div class="filter__block-brand">
              <input type="text" class="input" id="input-marks" placeholder="Марка" v-model="searchMarks" autocomplete="off">
              <label for="input-marks" data-text="Марка"></label>
              <span class="filter__block-brand-clean">x</span>
              <ul class="filter__block-brand-list">
                <li @click="chooseMark" :value="mark.value" v-for="mark in filteredItems"><a href="#">{{ mark.name }}</a></li>
              </ul>
            </div>
            <div class="filter__block-year-range">
              <div class="filter__block-year-range-from"></div>
              <div class="filter__block-year-range-to"></div>
              <p class="filter__block-year-range-title">Рік</p>
              <div class="filter__block-year-range-selects">
                <select class="input" name="cars" id="year-range-from">
                  <option selected class="default">від</option>
                  <option>2021</option>
                  <option >2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                </select>
                <select class="input" name="cars" id="year-range-to">
                  <option selected class="default">до</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                </select>
              </div>
            </div>
          </div>
          <div class="filter__block-row">
            <div class="filter__block-model">
              <select class="input" name="cars" id="model">
                <option selected class="default">Модель</option>
              </select>
            </div>
            <div class="filter__block-price">
              <div class="filter__block-price-title">Ціна, $</div>
              <div class="filter__block-price-inputs">
                <input class="input" type="number" placeholder="від" >
                <input class="input" type="number" placeholder="до">
              </div>
            </div>
          </div>
          <div class="filter__block-row">
            <button class="filter__block-extension">Розширений пошук</button>
            <button class="filter__block-search">Пошук</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'FilterBlock',

  data() {
    return {
      searchMarks: null,
      search: ''
    }
  },
  mounted() {
    this.GET_BODY_TYPES()
    this.GET_MARKS()
    this.GET_MODELS()
  },
  computed: {
    ...mapGetters(['transportTypes', 'marks', 'models']),
    filteredItems(){
      if (!this.searchMarks) {
        return this.marks
      }
      let searchValue = this.searchMarks.toLowerCase()
      let filter = mark => mark.name.toLowerCase().includes(searchValue) ||
          mark.name.toLowerCase().includes(searchValue)

      return this.marks.filter(filter)
    }
  },
  methods: {
    ...mapActions(['GET_BODY_TYPES', 'GET_MARKS', 'GET_MODELS']),
    chooseMark() {
      let textLoaded = Object.values(Object.values(this.marks))
      console.log(textLoaded)
      this.searchMarks = textLoaded
    }
  }
}
</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
.default {
  color: #777777 !important;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

option {
  color: #777777 !important;
}

#cars option:hover {
  background-color: orange;
}
.input {
  border: none;
  border-radius: .5rem;
  padding-left: 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #777777;
  width: 27.5rem;
  height: 3rem;
  outline: none;
}

.checkbox input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 1rem 0 0 2rem;
}

.checkbox {
  width: 3rem;
  height: 2.7rem;
  border: none;
}

.checkbox input:checked {
  background: #9FD468;
}

.checkbox input:checked {
  left: 2.6rem;
}

.checkbox input:focus {
  box-shadow: inset 0 .2rem .3rem rgba(0, 0, 0, .2), 0 0 0 .3rem rgba(255, 255, 0, .7);
}

.label {
  margin: 0.4rem 0 0 0.3rem;
}

.filter {
  &__block {
    height: 25rem;
    margin-top: 2rem;
    background-color: #db5c4c;
    width: 62rem;
    position: relative;
    border-radius: 0 0 0 1.3rem;
    &-row {
      padding: 1.44rem 1.6rem 0 1.3rem;
      display: flex;
      justify-content: space-between;
    }

    &-state {
      height: 3.2rem;
      width: 36rem;

      :nth-child(1) {
        background: url('./../assets/svg/check.svg') 1.5rem 0.6rem no-repeat, #ffffff;
        color: #000;
        width: 6.5rem;
        background-size: 1.5rem;
        border-radius: .5rem 0 0 .5rem;
        padding-left: 2rem;
      }
      :nth-child(2) {
        width: 7.5rem;
      }
      :nth-child(3) {
        width: 5rem;
      }
      :last-child {
        border-radius: 0 .5rem .5rem 0;
        width: 9rem;
      }

      &-btn {
        background-color: transparent;
        border: .1rem solid #ffffff;
        height: 3.2rem;
        color: #ffffff;
        font-size: 1.3rem;
        line-height: 1.4rem;
      }
    }

    &-vin {
      height: 3.2rem;
      display: flex;
      justify-content: space-between;
      width: 21.2rem;

      &-checkbox {
        background-color: #266799;
        width: 18rem;
        height: 2.4rem;
        margin-top: 0.5rem;
        display: flex;
      }

      svg {
        width: 2rem;
        height: 2rem;
        padding: 0.55rem 0 0 1.4rem;
      }

      p {
        font-size: 1.6rem;
        color: #ffffff;
        line-height: 2.5rem;
        padding-left: 0.5rem;
      }
    }

    &-type select {
      width: 28.1rem;
      height: 3.2rem;
    }

    &-type option {
      background-color: #ffffff;
    }

    &-type:after {
      content: '';
      position: absolute;
      left: 27.3rem;
      border: .55rem solid transparent ;
      border-top: .5rem solid #db5c4c;
      top: 7.5rem;
      border-width: .5rem .5rem 0;
    }

    &-region {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 28rem;

      &-title {
        font-size: 1.6rem;
        color: #ffffff;
        line-height: 2.5rem;
      }
    }

    &-region:after {
      content: '';
      position: absolute;
      left: 58.3rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #db5c4c;
      top: 7.5rem;
      border-width: .5rem .5rem 0;
    }

    &-region select {
      height: 3.2rem;
      width: 21rem;
    }
    &-brand-clean {
      display: none;
      background: #fff;
      position: absolute;
      top: 2px;
      right: 2px;
      color: #db5c4c;
      font-size: 24px;
      line-height: 20px;
      padding: 3px 6px 1px;
      cursor: pointer;
      z-index: 1;
      border-radius: 3px;
    }
    &-brand-list {
      background: #fff;
      border: 1px solid #3498db;
      width: 28.3rem;
      max-height: 19rem;
      margin: 0;
      overflow-y: auto;
      overflow-x: hidden;
      position: absolute;
      left: 1.3rem;
      top: 13.7rem;
      z-index: 3;
      -webkit-overflow-scrolling: touch;
      box-sizing: border-box;
      padding: .5rem;
      li {
        font-size: 1.6rem;
        line-height: 2rem;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        a {
          color: #414042 !important;
          font-weight: 200 !important;
        }
      }
    }
    &-brand-list::-webkit-scrollbar {
      width: 1em;
    }

    &-brand-list::-webkit-scrollbar-track {
      background-color: #f7f4f4;
    }

    &-brand-list::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }

    &-brand select {
      width: 28.1rem;
      height: 3.2rem;
    }

    &-brand:after {
      content: '';
      position: absolute;
      left: 27.3rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #db5c4c;
      top: 12.2rem;
      border-width: .5rem .5rem 0;
    }

    &-year-range {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 28rem;
      &-from:after {
        content: '';
        position: absolute;
        left: 15.3rem;
        border: .55rem solid transparent;
        border-top: .5rem solid #db5c4c;
        top: 1.5rem;
        border-width: .5rem .5rem 0;
      }
      &-from, &-to {
        position: absolute;
      }
      &-to:after {
        content: '';
        position: absolute;
        left: 25.9rem;
        border: .55rem solid transparent;
        border-top: .5rem solid #db5c4c;
        top: 1.5rem;
        border-width: .5rem .5rem 0;
      }
      &-selects {
        display: flex;
        justify-content: space-between;
        width: 21rem;
      }
      &-title {
        font-size: 1.6rem;
        color: #ffffff;
        line-height: 2.5rem;
        display: flex;
        align-items: center;
      }
    }
    &-year-range select {
      height: 3.2rem;
      width: 10.4rem;
    }
    &-model select{
      width: 28.1rem;
      height: 3.2rem;
    }
    &-model:after{
      content: '';
      position: absolute;
      left: 27.4rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #db5c4c;
      top: 17rem;
      border-width: .5rem .5rem 0;
    }
    &-price {
      display: flex;
      justify-content: space-between;
      width: 28rem;
      &-title {
        font-size: 1.6rem;
        color: #ffffff;
        line-height: 2.5rem;
        display: flex;
        align-items: center;
      }
      &-inputs {
        display: flex;
        justify-content: space-between;
        width: 21rem;
        input {
          width: 9.7rem;
          outline: none;
        }
      }
    }
    &-extension {
      border: .1rem solid #ffffff;
      border-radius: .5rem;
      width: 28rem;
      height: 3.4rem;
      line-height: 1.8rem;
      font-size: 1.6rem;
      background-color: transparent;
      color: #ffffff;
      &:hover {
        background-color: #c95c4e;
      }
    }
    &-search {
      background: url("./../assets/img/search.png") 6.6rem 1rem no-repeat, #3e9be7;
      line-height: 1.8rem;
      width: 21rem;
      border: none;
      background-size: 1.7rem;
      font-size: 1.8rem;
      color: #ffffff;
      padding-left: 2rem;
      border-radius: .5rem;
      &:hover {
        background-color: #2ea7f3;
      }
    }
  }
}
</style>
