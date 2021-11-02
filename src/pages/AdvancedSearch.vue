<template>
  <div>
    <Header/>
    <HeaderCategories/>
    <div class="advanced-search-line"></div>
    <div class="search">
      <div class="container">
        <h1 class="search__title">Розширений пошук вживаних авто</h1>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="main__info advanced-search-block">
          <div class="main__info-title">
            <p class="main__info-title-text advanced-search-title">New!</p>
          </div>
          <div class="main__info-description">
            <label class="advanced-search-subtitle main__info-description-btn"
                   @click="activeAutoType('allAuto')"
                   :class="{'radio-btn' : activeType === 'allAuto' }">Всі</label>
            <label class="advanced-search-subtitle main__info-description-btn"
                   @click="activeAutoType('usedAuto')"
                   :class="{'radio-btn' : activeType === 'usedAuto' }">Вживані</label>
            <label class="advanced-search-subtitle main__info-description-btn"
                   @click="activeAutoType('newAuto')"
                   :class="{'radio-btn' : activeType === 'newAuto'}">Нові</label>
            <label class="advanced-search-subtitle main__info-description-btn"
                   @click="activeAutoType('fitAuto')"
                   :class="{'radio-btn' : activeType === 'fitAuto' }">Під пригон</label>
            <br>
          </div>
        </div>
        <div class="main__checkboxes">
          <div class="main__checkbox-vin">
            <label for="vin" class="main__checkbox-vin-label">
              <input class="main__checkbox-vin-checkbox" type="checkbox" id="vin">
              <span class="main__checkbox-vin-fake"></span>
              <span class="main__checkbox-vin-block">
                <svg class="main__checkbox-vin-img">
                  <path
                      d="M0.5 3H2L5 0H11L11.75 0.75L8 4.5L6 2.5L4.5 4L8 7.5L13.25 2.25L14 3H15.5C15.7761 3 16 3.22386 16 3.5C16 3.77614 15.7761 4 15.5 4H15V10C15 10.5523 14.5523 11 14 11H13C12.4477 11 12 10.5523 12 10V9H4V10C4 10.5523 3.55228 11 3 11H2C1.44772 11 1 10.5523 1 10V4H0.5C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3Z"
                      fill="white"></path>
                </svg>
                <span class="main__checkbox-vin-text">Перевірений VIN-код</span>
              </span>
            </label>
          </div>

          <div class="main__checkbox-number">
            <label for="number" class="main__checkbox-number-label">
              <input class="main__checkbox-number-checkbox checkbox-number" type="checkbox" id="number">
              <span class="main__checkbox-number-fake"></span>
              <span class="main__checkbox-number-text">Держ. номер</span>
            </label>
          </div>

        </div>
      </div>
    </div>
    <div class="type-of-transport">
      <div class="container">
        <div class="type-of-transport__block advanced-search-block">
          <p class="type-of-transport__title advanced-search-title">
            Тип транспорту
          </p>
          <div class="type-of-transport__block-dropdown">
            <TransportType
                @activeTypeOfTransport="chooseTypeOfTransport"
                :advancedFormWidth="widthTransportTypes"
                :widthTransportTypesListInAdvanced="widthTransportTypesList"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="body-types">
      <div class="container">
        <div class="body-types__block advanced-search-block">
          <p class="body-types__title advanced-search-title">
            Тип кузова
          </p>
          <div class="body-types__block-dropdown">
            <BodyTypes/>
          </div>
        </div>
      </div>
    </div>

    <div class="country">
      <div class="container">
        <div class="country__block advanced-search-block">
          <p class="country__title advanced-search-title">
            Країна виробник
          </p>
          <CountryOfManufacturer
              @activeCountryOfManufacturer="chooseCountryOfManufacturerList"
          />
        </div>
      </div>
    </div>
    <div class="brand-model-year">
      <div class="container">
        <div class="brand-model-year__block advanced-search-block">
          <p class="brand-model-year__title advanced-search-title">
            Марка, модель, рік
          </p>
          <BrandModelYear
              :activeTypeOfTransportIndex="activeTypeOfTransportIndex"
          />
        </div>
      </div>
    </div>
    <div class="advanced-auto">
      <div class="container">
        <p class="advanced-auto__delete advanced-search-subtitle">
          Виключити авто
        </p>
      </div>
    </div>
    <div class="container">
      <div class="advanced-search-line"></div>
    </div>
    <div class="advanced-price">
      <div class="container">
        <div class="advanced-price__block advanced-search-block">
          <p class="advanced-price__text">
            Вартість
          </p>
          <div class="advanced-price__block-inputs">
            <Price
                :widthBlockPrice="widthBlock"
            />
            <PriceSign/>
          </div>
        </div>
        <div class="advanced-price__checkboxes">
          <div class="advanced-price__checkbox-mpe">
            <label class="advanced-price__checkbox-mpe-label">
              <input type="checkbox" class="advanced-price__checkbox-mpe-checkbox">
              <span class="advanced-price__checkbox-mpe-fake"></span>
              <span class="advanced-price__checkbox-mpe-text advanced-search-subtitle">Ціна з ПДВ</span>
            </label>
            <span class="advanced-price__checkbox-mpe-warning">
              <svg id="svgi16info" fill="none" viewBox="0 0 16 16" width="1.6rem" height="1.6rem">
                <circle cx="8" cy="8" r="7.5" stroke="#256799"/>
                <circle cx="8" cy="4" r="0.5" stroke="#256799"/>
                 <rect x="7.5" y="6.5" width="1" height="6" rx="0.5" stroke="#256799"/>
              </svg>
            </span>
            <span class="advanced-price__checkbox-mpe-warning-text">
              При продажу авто юридичним особам відшкодовується сума ПДВ
            </span>
          </div>

          <div class="advanced-price__checkbox-auction">
            <label class="advanced-price__checkbox-auction-label">
              <input type="checkbox" class="advanced-price__checkbox-auction-checkbox">
              <span class="advanced-price__checkbox-auction-fake"></span>
              <span class="advanced-price__checkbox-auction-text advanced-search-subtitle">Можливий торг</span>
            </label>
          </div>

          <div class="advanced-price__checkbox-exchange-realty">
            <label class="advanced-price__checkbox-exchange-realty-label">
              <input type="checkbox" class="advanced-price__checkbox-exchange-realty-checkbox">
              <span class="advanced-price__checkbox-exchange-realty-fake"></span>
              <span class="advanced-price__checkbox-exchange-realty-text advanced-search-subtitle">Можливий обмін на нерухомість</span>
            </label>
          </div>

          <div class="advanced-price__checkbox-exchange-auto">
            <label class="advanced-price__checkbox-exchange-auto-label">
              <input type="checkbox" class="advanced-price__checkbox-exchange-auto-checkbox">
              <span class="advanced-price__checkbox-exchange-auto-fake"></span>
              <span class="advanced-price__checkbox-exchange-auto-text advanced-search-subtitle">Можливий обмін на aвтомобіль</span>
            </label>
          </div>
        </div>
        <div class="container">
          <div class="advanced-search-line"></div>
        </div>
      </div>
    </div>
    <div class="advanced-region">
      <div class="container">
        <div class="advanced-region__wrapper">
          <p class="advanced-region__title">Регіон</p>
          <div class="advanced-region__block">
            <Cities/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header";
import HeaderCategories from "../layouts/HeaderCategories";
import TransportType from "../components/FilterBlock/TransportType";
import {mapGetters, mapActions} from 'vuex'
import CountryOfManufacturer from "../components/AdvancedSearch/CountryOfManufacturer";
import BrandModelYear from "../components/AdvancedSearch/BrandModelYear";
import TransportTypes from "../store/transportTypes";
import Models from "../components/FilterBlock/Models";
import Price from "../components/FilterBlock/Price";
import PriceSign from "../components/FilterBlock/PriceSign";
import Cities from "../components/FilterBlock/Cities";
import BodyTypes from "../components/BodyTypes";

export default {
  name: "advancedSearch",
  components: {
    Header,
    HeaderCategories,
    TransportType,
    CountryOfManufacturer,
    BrandModelYear,
    TransportTypes,
    Models,
    Price,
    PriceSign,
    Cities,
    BodyTypes
  },
  data() {
    return {
      activeTypeOfTransportIndex: '',
      transportTypesList: false,
      widthTransportTypes: '21rem !important',
      widthTransportTypesList: '22rem !important',
      widthBlock: '22rem',
      btn1: true,
      btn2: false,
      btn3: false,
      btn4: false,
      activeType: '',
    }
  },
  async mounted() {
    await this.GET_COUNTRY_OF_MANUFACTURER()
  },
  methods: {
    ...mapActions(['GET_COUNTRY_OF_MANUFACTURER', 'GET_MARKS', 'SEARCH', 'GET_BODY_TYPES']),
    activeAutoType(type) {
      this.activeType = type
    },
    chooseCountryOfManufacturerList(type) {
      this.activeTypeOfTransport = type
    },
    chooseTypeOfTransport(index) {
      this.activeTypeOfTransportIndex = index
      this.GET_MARKS(index)
      this.GET_BODY_TYPES()
    },
  },
  computed: {
    ...mapGetters(['countryOfManufacturer', 'marks', 'bodyTypes'])
  }
}
</script>

<style lang="scss">
input[type=radio] {
  position: absolute;
  width: .1rem;
  height: .1rem;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.radio-btn {
  position: relative;
  padding: 0.5rem 1rem .5rem 2.6rem !important;
  background: #f0f2fa;
  cursor: default;
  border: 1px solid #79be00 !important;
  &:before {
    background: url("./../assets/img/advancedSearch/check.svg") .6rem .6rem no-repeat;
    background-size: 1.4rem;
    content: '';
    position: absolute;
    top: 0;
    width: 8rem;
    height: 3rem;
    left: 0;
  }

  &:after {
    content: " \430\432\442\43E";
  }
}

.active-sign {
  display: block !important;
}

.advanced-search-title {
  font-size: 1.6rem;
  line-height: 2rem;
}

.advanced-search-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.advanced-search-subtitle {
  font-size: 1.6rem;
  line-height: 1.92rem;
  color: #256799;
}

.advanced-search-line {
  border-top: .1rem solid #e0e3e4;
}

.search {
  padding-top: 1rem;

  &__title {
    font-size: 2.4rem;
    line-height: 2.88rem;
    font-family: Arial-Regular, sans-serif;
    font-weight: 400;
  }
}

.main {
  padding-top: 1.7rem;

  &__checkboxes {
    padding: 2rem 0 0 20.2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 5rem;
  }

  &__checkbox-vin {
    width: 19.5rem;
    height: 2rem;
    position: relative;

    &-label {
      display: flex;
      height: 2rem;
      justify-content: space-between;
      width: 21.4rem;
    }

    &-label:hover + &-fake {
      border: 1px solid #000;
    }

    &-fake {
      display: inline-block;
      width: 1.6rem;
      height: 1.7rem;
      border: 1px solid #e0e3e4;
      position: relative;
      border-radius: 2px;

      &:before {
        content: "";
        background: url("../assets/svg/advancedSearch/check-grey.svg") no-repeat;
        position: absolute;
        top: 27%;
        left: 20%;
        display: block;
        width: 1rem;
        height: 1rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-checkbox {
      opacity: 0
    }

    &-text {
      margin-right: -0.5 rem;
      color: #ffffff !important;
    }

    &-block {
      display: flex;
      justify-content: center;
      font-size: 1.3rem;
      line-height: 2rem;
      color: #FFFFFF;
      background-color: #256799;
      border-radius: 4px;
      width: 17.2rem;
      position: relative;
    }

    &-img {
      width: 2rem;
      height: 1rem;
      position: relative;
      top: 0.4rem;
    }
  }

  &__checkbox-number {
    width: 15.7rem;
    position: relative;
    padding-top: 1rem;

    &-label {
      display: flex;
      height: 2rem;
      justify-content: space-between;
      width: 14.4rem;
    }

    &-label:hover + &-fake {
      border: 1px solid #000;
    }

    &-fake {
      display: inline-block;
      width: 1.6rem;
      height: 1.7rem;
      border: 1px solid #e0e3e4;
      position: relative;
      border-radius: 2px;

      &:before {
        content: "";
        background: url("../assets/svg/advancedSearch/check-grey.svg") no-repeat;
        position: absolute;
        top: 27%;
        left: 20%;
        display: block;
        width: 1rem;
        height: 1rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-checkbox {
      opacity: 0
    }

    &-text {
      position: relative;
      padding-left: 2rem;
      border: 1px solid #256799;
      border-radius: 1.5px;
      width: 8rem;
      font-size: 1.3rem;
      line-height: 2rem;
      align-items: center;
      color: #414042;
      display: flex;

      &:before {
        background-color: #07499d;
        font-size: 6px;
        color: #fff;
        text-align: center;
        top: 0;
        left: 0;
        bottom: 0;
        width: 11px;
        padding-top: 4px;
        content: "UA";
        position: absolute;
      }

      &:after {
        border-top: 3px solid #00a7ef;
        border-bottom: 3px solid #fed500;
        height: 0;
        width: 8px;
        left: 1px;
        top: 50%;
        margin-top: -7px;
        content: "";
        position: absolute;
      }
    }
  }

  &__info {
    width: 59.3rem;

    &-title {
      &-text {
        color: #DB5C4C;
        font-weight: 700;
        font-family: Arial-Bold, sans-serif;
      }
    }

    &-description {
      display: flex;
      justify-content: space-between;
      width: 37.4rem;

      &-btn {
        padding: 0.5rem 1rem .5rem 1rem;
        border: 1px solid #e0e3e4;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          border: 1px solid #256799;
        }
      }
    }
  }
}

.type-of-transport {
  padding-top: 2rem;

  &__block {
    width: 44rem;

    &-dropdown {
      border: 1px solid #e0e3e4;
      border-radius: 3px;
      height: 3.2rem;
      width: 22rem;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        border: .55rem solid transparent;
        border-top: .5rem solid #B6B6B6;
        left: 19.8rem;
        top: 1.3rem;
      }

      &-list {
        background: #fff;
        border: 1px solid #3498db;
        width: 22rem;
        max-height: 19rem;
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
        z-index: 3;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
        padding: .5rem;
        display: none;

        &-item {
          font-size: 1.6rem;
          line-height: 2rem;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;

          a {
            font-weight: 200 !important;
          }
        }
      }
    }
  }
}

.body-types {
  padding-top: 2rem;
}

#input-transport-type {
  width: 20.4rem;
}

.country {
  padding-top: 1.9rem;

  &__block {
    width: 44rem;
  }
}

.brand-model-year {
  padding-top: 1.7rem;

  &__block {
    width: 91.8rem;
  }

  &__title {
    width: 14rem;
    margin-bottom: 4rem;
  }
}

.advanced-auto {
  padding: 2rem 0 1.7rem 48.6rem;

  &__delete {
    position: relative;
    display: inline-block;
    cursor: pointer;
    border-bottom: 1px dotted #256799;
    margin-right: 1.5rem;

    &:after {
      width: 0;
      height: 0;
      border-bottom: .6rem solid transparent;
      border-color: #256799 transparent currentcolor;
      border-style: solid solid none;
      border-width: .6rem .6rem 0;
      position: absolute;
      right: 12.7rem;
      top: 50%;
      margin-top: -.3rem;
      content: "";
      -webkit-transition: all .2s linear;
      -o-transition: all linear .2s;
      transition: all .2s linear;
    }
  }
}

.advanced-price {
  padding-top: 1.3rem;

  &__text {
    font-size: 1.8rem;
    line-height: 2.16rem;
  }

  &__block {
    width: 51.5rem;

    &-inputs {
      width: 29.7rem;
      display: flex;
      justify-content: space-between;
      padding-top: .6rem;
    }
  }

  &__checkboxes {
    padding: 1.8rem 0 1.8rem 20.5rem;
  }

  &__checkbox-mpe {
    display: flex;
    justify-content: space-between;
    width: 14.7rem;
    position: relative;

    &-label {
      display: flex;
      height: 2rem;
    }

    &-label:hover + &-fake {
      border: 1px solid #000;
    }

    &-fake {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      border: 1px solid #e0e3e4;
      position: relative;
      border-radius: 2px;

      &:before {
        content: "";
        background: url("../assets/svg/advancedSearch/check-grey.svg") no-repeat;
        position: absolute;
        top: 27%;
        left: 20%;
        display: block;
        width: 1rem;
        height: 1rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-text {
      padding-left: 0.7rem;
      color: #414042 !important;
    }

    &-checkbox {
      opacity: 0
    }

    &-warning:hover + &-warning-text {
      opacity: 1;
      visibility: visible;
    }

    &-warning {
      cursor: pointer;

      &-text {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #414042;
        border: 1px solid #e0e3e4;
        width: 25rem;
        border-radius: 5px;
        padding: .7rem 0 .7rem .7rem;
        height: 3rem !important;
        position: absolute;
        left: 16rem;
        bottom: -1rem;
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  &__checkbox-auction {
    display: flex;
    justify-content: space-between;
    width: 14.7rem;
    position: relative;
    padding-top: 1.1rem;

    &-label {
      display: flex;
      height: 2rem;
    }

    &-label:hover + &-fake {
      border: 1px solid #000;
    }

    &-fake {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      border: 1px solid #e0e3e4;
      position: relative;
      border-radius: 2px;

      &:before {
        content: "";
        background: url("../assets/svg/advancedSearch/check-grey.svg") no-repeat;
        position: absolute;
        top: 27%;
        left: 20%;
        display: block;
        width: 1rem;
        height: 1rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-text {
      padding-left: 0.7rem;
      color: #414042 !important;
      width: 12rem;
    }

    &-checkbox {
      opacity: 0
    }

    &-warning:hover + &-warning-text {
      opacity: 1;
      visibility: visible;
    }

    &-warning {
      cursor: pointer;

      &-text {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #414042;
        border: 1px solid #e0e3e4;
        width: 25rem;
        border-radius: 5px;
        padding: .7rem 0 .7rem .7rem;
        height: 3rem !important;
        position: absolute;
        left: 16rem;
        bottom: -1rem;
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  &__checkbox-exchange-realty {
    display: flex;
    justify-content: space-between;
    width: 14.7rem;
    position: relative;
    padding-top: 1.5rem;

    &-label {
      display: flex;
      height: 2rem;
    }

    &-label:hover + &-fake {
      border: 1px solid #000;
    }

    &-fake {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      border: 1px solid #e0e3e4;
      position: relative;
      border-radius: 2px;

      &:before {
        content: "";
        background: url("../assets/svg/advancedSearch/check-grey.svg") no-repeat;
        position: absolute;
        top: 27%;
        left: 20%;
        display: block;
        width: 1rem;
        height: 1rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-text {
      padding-left: 0.7rem;
      color: #414042 !important;
      width: 24rem;
    }

    &-checkbox {
      opacity: 0
    }

    &-warning:hover + &-warning-text {
      opacity: 1;
      visibility: visible;
    }

    &-warning {
      cursor: pointer;

      &-text {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #414042;
        border: 1px solid #e0e3e4;
        width: 25rem;
        border-radius: 5px;
        padding: .7rem 0 .7rem .7rem;
        height: 3rem !important;
        position: absolute;
        left: 16rem;
        bottom: -1rem;
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  &__checkbox-exchange-auto {
    display: flex;
    justify-content: space-between;
    width: 14.7rem;
    position: relative;
    padding-top: 1.5rem;

    &-label {
      display: flex;
      height: 2rem;
    }

    &-label:hover + &-fake {
      border: 1px solid #000;
    }

    &-fake {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      border: 1px solid #e0e3e4;
      position: relative;
      border-radius: 2px;

      &:before {
        content: "";
        background: url("../assets/svg/advancedSearch/check-grey.svg") no-repeat;
        position: absolute;
        top: 27%;
        left: 20%;
        display: block;
        width: 1rem;
        height: 1rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-text {
      padding-left: 0.7rem;
      color: #414042 !important;
      width: 24rem;
    }

    &-checkbox {
      opacity: 0
    }

    &-warning:hover + &-warning-text {
      opacity: 1;
      visibility: visible;
    }

    &-warning {
      cursor: pointer;

      &-text {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #414042;
        border: 1px solid #e0e3e4;
        width: 25rem;
        border-radius: 5px;
        padding: .7rem 0 .7rem .7rem;
        height: 3rem !important;
        position: absolute;
        left: 16rem;
        bottom: -1rem;
        opacity: 0;
        visibility: hidden;
      }
    }
  }
}

.advanced-region {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    width: 93.9rem;
  }

  &__title {
    font-size: 1.8rem;
    line-height: 2.16rem;
    color: #414042;
    padding-top: 4.5rem;
  }

  &__block {
    width: 67.8rem;
    height: 40.2rem;
    border: 1px solid #e0e3e4;
    border-radius: 3px;
    padding: 2rem;
    margin-top: 2rem;
  }
}
</style>
