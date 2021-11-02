<template>
  <div>
    <div class="filter">
      <div class="container">
        <div class="filter__block">
          <div class="filter__block-state">
            <button class="filter__block-state-btn">Всі</button>
            <button class="filter__block-state-btn">Вживані</button>
            <button class="filter__block-state-btn">Нові</button>
            <button class="filter__block-state-btn">Під пригон</button>
          </div>

          <VinCheck
              @vinCheck="setVin"
          />

          <TransportType
              @activeTypeOfTransport="chooseTypeOfTransport"
          />

          <div class="filter__block-region">
            <p class="filter__block-region-title from-to-title">Регіон</p>
            <Region
                @regionInFilter="setRegion"
            />
          </div>


          <Mark
              :typeOfTransportToStore="activeTypeOfTransport"
              :typeOfTransportIndex="activeTypeOfTransport"
              @markInFilter="setMark"
          />

          <div class="filter__block-year-range">
            <p class="filter__block-year-range-title from-to-title">Рік</p>
            <YearRange
                @yearFromFilter="setYearFrom"
                @yearToFilter="setYearTo"
            />
          </div>

          <Models
              @modelInFilter="setModel"
          />

          <div class="filter__block-price">
            <div class="filter__block-price-title from-to-title">Ціна, $</div>
            <Price
                @priceFromInFilter="setPriceFrom"
                @priceToInFilter="setPriceTo"
            />
          </div>
          <router-link to="/advancedSearch" class="filter__block-extension">Розширений пошук</router-link>
          <a @click.prevent="goToList" href="#" class="filter__block-search">Пошук</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import TransportType from "./FilterBlock/TransportType";
import Region from "./FilterBlock/Region";
import Mark from "./FilterBlock/Mark";
import Models from "./FilterBlock/Models";
import Router from "../Router";
import YearRange from "./FilterBlock/YearRange";
import Price from "./FilterBlock/Price";
import VinCheck from "./FilterBlock/VinCheck";


export default {
  name: 'FilterBlock',
  components: {
    Router,
    TransportType,
    Region,
    Mark,
    Models,
    YearRange,
    Price,
    VinCheck
  },
  data() {
    return {
      activeTypeOfTransport: 1,
      vin: 0,
      markValue: null,
      modelValue: null,
      regionValue: null,
      yearFromValue: null,
      yearToValue: null,
      priceFromValue: null,
      priceToValue: null,
      searchObject: {}
    }
  },
  computed: {
    ...mapGetters(['params', 'marks', 'models', 'transportTypes'])
  },

  methods: {
    ...mapActions(['GET_MARKS', 'SEARCH']),
    chooseTypeOfTransport(indexTransport) {
      this.activeTypeOfTransport = indexTransport
    },
    setVin(vinCode) {
      this.vin = vinCode
    },
    setMark(markValue) {
      this.markValue = markValue
    },
    setModel(modelValue) {
      this.modelValue = modelValue
    },
    setRegion(RegionValue) {
      this.regionValue = RegionValue
    },
    setYearFrom(yearFrom) {
      this.yearFromValue = yearFrom
    },
    setYearTo(yearTo) {
      this.yearToValue = yearTo
    },
    setPriceFrom(priceFrom) {
      this.priceFromValue = priceFrom
    },
    setPriceTo(priceTo) {
      this.priceToValue = priceTo
    },
    goToList() {
      const transportTypes = this.transportTypes.find(e => e.value === this.activeTypeOfTransport)
      const mark = this.marks.find(e => e.value === this.markValue)
      const models = this.models.find(e => e.value === this.modelValue)
      this.$router.push({
        name: 'search',
        params: {
          transportType: transportTypes ? transportTypes.name.toLowerCase() : null,
          mark: mark ? mark.name.toLowerCase() : null,
          model: models ? models.name.toLowerCase() : null,
        },
        query: {
          vin: this.vin,
          region: this.regionValue,
          yearFrom: this.yearFromValue,
          yearTo: this.yearToValue,
          priceFrom: this.priceFromValue,
          priceTo: this.priceToValue
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

.from-to-title {
  font-size: 1.6rem;
  color: #ffffff;
  line-height: 2.5rem;
  display: flex;
  align-items: flex-start;
  padding-top: .2rem;
}

.filter {
  position: relative;
  top: -.5rem;

  &__block {
    height: 23.7rem;
    margin-top: 1.8rem;
    background-color: #db5c4c;
    width: 60.5rem;
    position: relative;
    border-radius: 0 0 0 1.3rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1.3rem 0 0 1.3rem;

    &-price {
      display: flex;
      justify-content: space-between;
      width: 28rem;
      margin-left: 3rem;
    }

    &-year-range {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 28rem;
      margin-left: 3rem;

      &-from, &-to {
        position: absolute;
      }
    }

    &-region {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 28rem;
      margin-left: 3rem;
    }

    &-state {
      height: 3.2rem;
      width: calc(63%);

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


    &-extension {
      border: .1rem solid #ffffff;
      border-radius: .5rem;
      width: 28rem;
      height: 3.1rem;
      line-height: 1.8rem;
      font-size: 1.6rem;
      background-color: transparent;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #c95c4e;
      }
    }

    &-search {
      background: url("./../assets/img/search.png") 6.6rem 0.6rem no-repeat, #3e9be7;
      line-height: 1.8rem;
      width: 19rem;
      height: 3.1rem;
      border: none;
      background-size: 1.7rem;
      font-size: 1.8rem;
      color: #ffffff;
      padding-left: 2rem;
      display: flex;
      border-radius: .5rem;
      margin-left: 10rem;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #2ea7f3;
      }
    }
  }
}
</style>
