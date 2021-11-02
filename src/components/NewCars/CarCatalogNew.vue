<template>
  <div>
    <div class="auto-new">
      <div class="container">
        <div class="auto-new__catalog">
          <p class="auto-new__catalog-title">
            Каталог автомобілей:
          </p>
          <ul class="auto-new__catalog-list">
            <li @click="changeCatalog('newAuto', 'marks')"
                :class="{'active-btn': catalogCar === 'newAuto'}">Нові авто
            </li>
            <li @click="changeCatalog('news', '')"
                :class="{'active-btn': catalogCar === 'news'}">Новини
            </li>
          </ul>
        </div>
        <div class="auto-new__sort" v-show="catalogCar === 'newAuto'">
          <p class="auto-new__sort-title">Сортувати:</p>
          <ul class="auto-new__sort-list">
            <li @click="changePage('marks')"
                :class="{'active-btn': sortCar === 'marks'}">по марці
            </li>
            <li @click="changePage('region')"
                :class="{'active-btn': sortCar === 'region'}">по регіону
            </li>
            <li @click="changePage('type')"
                :class="{'active-btn': sortCar === type}">по типу
            </li>
            <li @click="changePage('popularity')"
                :class="{'active-btn': sortCar === 'popularity'}">
              <nobr>по популярним</nobr>
            </li>
            <li @click="changePage('year')"
                :class="{'active-btn': sortCar === 'year'}">по року
            </li>
            <li @click="changePage('price')"
                :class="{'active-btn': sortCar === 'price'}">по ціні
            </li>
            <li @click="changePage('type-fuel')"
                :class="{'active-btn': sortCar === 'type-fuel'}">
              <nobr>по типу палива</nobr>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'marks'">
      <div class="container">
        <div class="cars__list">
          <div class="cars__item" v-for="(auto, index) in CarCatalogNewAuto" :key="index">
            <a href="#">
              {{ auto }}
            </a>
          </div>
          <div class="cars__show">
            <p>Дивитись всі 48 марок→</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'region'">
      <div class="container">
        <div class="cars__list-region">
          <div class="cars__item" v-for="(region, index) in CarCatalogNewRegion" :key="index">
            <a href="#">
              {{ region }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'type'">
      <div class="container">
        <div class="cars__list-type">
          <div class="cars__item cars__item-type" v-for="(type, index) in CarCatalogNewType" :key="index">
            <a href="#">
              {{ type }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'popularity'">
      <div class="container">
        <div class="cars__list cars__list-popular">
          <div class="cars__item cars__item-popular" v-for="(popularCars, index) in CarCatalogNewPopular" :key="index">
            <a href="#">
              {{ popularCars }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'year'">
      <div class="container">
        <div class="cars__list cars__list-year">
          <div class="cars__item cars__item-year" v-for="(year, index) in CarCatalogNewYear" :key="index">
            <a href="#">
              {{ year }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'price'">
      <div class="container">
        <div class="cars__list cars__list-price">
          <div class="cars__item cars__item-price" v-for="(price, index) in CarCatalogNewPrice" :key="index">
            <a href="#">
              {{ price }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cars" v-show="sortCar === 'type-fuel'">
      <div class="container">
        <div class="cars__list cars__list-petrol">
          <div class="cars__item cars__item-petrol" v-for="(petrolType, index) in CarCatalogNewTypePetrol" :key="index">
            <a href="#">
              {{ petrolType }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="news" v-show="catalogCar === 'news'">
      <div class="container">
        <div class="news__list news__list-items">
          <div class="news__item" v-for="(carNews, index) in CarCatalogNewNews" :key="index">
            <a href="#">
              {{ carNews.text }}
            </a>
            <em class="news__item-count">
              {{ carNews.amount }}
            </em>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "CarCatalogNew",
  data() {
    return {
      sortCar: 'marks',
      catalogCar: 'newAuto'
    }
  },
  computed: {
    ...mapGetters([
      'CarCatalogNewAuto',
      'CarCatalogNewNews',
      'CarCatalogNewRegion',
      'CarCatalogNewType',
      'CarCatalogNewYear',
      'CarCatalogNewPopular',
      'CarCatalogNewPrice',
      'CarCatalogNewTypePetrol',
      'CarCatalogNewAllBrands'
    ]),
  },
  methods: {
    changePage(page) {
      this.sortCar = page
    },
    changeCatalog(catalog, page) {
      this.catalogCar = catalog
      this.sortCar = page
    },
  }
}
</script>

<style lang="scss">
.active-btn {
  border-color: #256799 !important;
}

.non-active-btn {
  border-color: #e0e3e4;
}

.auto-new {
  padding-top: 4.8rem !important;

  &__catalog {
    display: flex;
    justify-content: space-between;
    width: 35.9rem;

    &-title {
      font-size: 2rem;
      line-height: 2.4rem;
    }

    &-list {
      width: 15rem;
      display: flex;
      justify-content: space-between;

      li {
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #256799;
        border: 1px solid #e0e3e4;
        border-radius: 3px;
        align-self: center;
        display: flex;
        padding: .3rem 0.55rem;
        cursor: pointer;
      }

      li:hover {
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #256799;
        border: 1px solid #256799;
        border-radius: 3px;
        align-self: center;
        display: flex;
        padding: .3rem 0.55rem;
      }
    }
  }

  &__sort {
    padding: 1rem 1rem 1rem 13rem;
    display: flex;
    justify-content: space-between;
    width: 71.5rem;
    align-items: center;

    &-title {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }

    &-list {
      width: 64rem;
      display: flex;
      justify-content: space-between;

      li {
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #256799;
        border-radius: 3px;
        align-self: center;
        display: flex;
        padding: 0 0.55rem;
        border: 1px solid #ffffff;
        margin-left: .5rem;
        justify-content: center;
        cursor: pointer;
      }

      li:hover {
        border: 1px solid #256799;
        padding: 0 0.55rem;
        display: flex;
        justify-content: center;
        margin-left: .5rem;
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #256799;
        border-radius: 3px;
        align-self: center;
      }
    }
  }
}

.cars {
  &__list {
    display: flex;
    justify-content: space-between;
    padding-top: 0.2rem;
    flex-direction: column;
    flex-wrap: wrap;
    height: 22.5rem;
    position: relative;

    &-region {
      display: flex;
      padding-top: 0.2rem;
      flex-direction: column;
      flex-wrap: wrap;
      height: 21.5rem;
    }

    &-type {
      display: flex;
      padding-top: 0.2rem;
      flex-direction: column;
      flex-wrap: wrap;
      height: 22.5rem;
    }

    &-price {
      height: 15rem !important;
      display: flex;
      justify-content: normal;
    }

    &-popular {
      height: 13rem !important;
    }

    &-year {
      height: 12rem !important;
      display: flex !important;
      justify-content: normal !important;
    }

    &-petrol {
      height: 12rem !important;
      display: flex !important;
      justify-content: normal !important;
    }
  }

  &__show {
    a {
      font-size: 1.3rem;
      line-height: 1.56rem;
      color: #256799;
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;

      &:hover {
        border-bottom: 1px solid #256799;
      }
    }
  }

  &__item {
    font-size: 1.3rem;
    line-height: 1.56rem;
    color: #256799;
    display: inline-block;
    height: 1.5rem;
    padding-right: .3rem;
    white-space: nowrap;
    margin-bottom: 1rem;
    width: 23.6rem;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #256799;
      border-bottom: 1px solid transparent;
      text-decoration-skip-ink: none;
      background: #fff;
      position: relative;
      padding-right: 0.3rem;

      &:hover {
        border-bottom: 1px solid #256799;
      }
    }

    &-type {
      width: 31rem !important;

      &:before {
        width: 21.4% !important;
        content: "" !important;
      }
    }

    &-popular {
      width: 31rem !important;

      &:before {
        width: 32.4% !important;
        content: "" !important;
      }
    }

    &-price {
      width: 31rem !important;

      &:before {
        width: 32.4% !important;
        content: "" !important;
      }
    }

    &-year {
      width: 31rem !important;

      &:before {
        width: 32.4% !important;
        content: "" !important;
      }
    }

    &-petrol {
      width: 31rem !important;

      &:before {
        width: 48.4% !important;
        content: "" !important;
      }
    }

    &:before {
      border-bottom: 1px dotted #dcdcdc;
      width: 21.4%;
      position: absolute;
      content: "";
      margin-top: 1.1rem;
    }

    &-count {
      color: #9DA6AA;
      font-size: 1.3rem;
      line-height: 1.56rem;
      font-style: normal;
      float: right;
      padding-bottom: .1rem;
      padding-left: .3rem;
      position: relative;
      right: 0;
      top: 0;
      background: #fff;
    }
  }
}

.news {
  &__list {
    display: flex;
    justify-content: space-between;
    padding-top: 0.2rem;
    flex-direction: column;
    flex-wrap: wrap;
    height: 5.5rem;
    width: 65rem;
    position: relative;

    &-items {
      margin-top: 1.2rem !important;
    }
  }

  &__show {
    a {
      font-size: 1.3rem;
      line-height: 1.56rem;
      color: #256799;
      font-weight: 700;
      font-family: Arial-Bold, sans-serif;

      &:hover {
        border-bottom: 1px solid #256799;
      }
    }
  }

  &__item {
    font-size: 1.3rem;
    line-height: 1.56rem;
    color: #256799;
    display: inline-block;
    height: 1.5rem;
    padding-right: .3rem;
    white-space: nowrap;
    margin-bottom: 1rem;
    width: 29.6rem;
    justify-content: space-between;

    &-region {
      font-size: 1.3rem;
      line-height: 1.56rem;
      color: #256799;
      display: inline-block;
      height: 1.5rem;
      padding-right: .3rem;
      white-space: nowrap;
      margin-bottom: 1rem;
      width: 29.6rem;
      justify-content: space-between;
    }

    a {
      text-decoration: none;
      color: #256799;
      border-bottom: 1px solid transparent;
      text-decoration-skip-ink: none;
      background: #fff;
      font-weight: 200 !important;
      font-family: Arial-Regular, sans-serif;
      position: relative;
      padding-right: 0.3rem;

      &:hover {
        border-bottom: 1px solid #256799;
      }
    }

    em {
      font-weight: 200 !important;
      font-family: Arial-Regular, sans-serif;
    }

    &:before {
      border-bottom: 1px dotted #dcdcdc;
      width: 41.4%;
      position: absolute;
      content: "";
      margin-top: 1.1rem;
    }

    &-count {
      color: #9DA6AA;
      font-size: 1.3rem;
      line-height: 1.56rem;
      font-style: normal;
      float: right;
      padding-bottom: .1rem;
      padding-left: .3rem;
      position: relative;
      right: 0;
      top: 0;
      background: #fff;
    }
  }
}

nobr {
  color: #256799;
}
</style>
