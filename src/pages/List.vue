<template>
  <div>
    <Header/>
    <HeaderCategories/>
    <div class="fast-navigation">
      <div class="container">
        <ul class="fast-navigation__label">
          <router-link class="fast-navigation__label-li" to="/">AUTO.RIA.com</router-link>
          <li class="fast-navigation__label-li">Бу авто</li>
          <li class="fast-navigation__label-li">{{ markName | capitalize }}</li>
          <li class="fast-navigation__label-li">{{ modelName | capitalize }}</li>
        </ul>
      </div>
    </div>
    <div class="info-result">
      <div class="container">
        <p class="info-result__name">
          {{ searchOrSellWord }} {{ transportTypeName | capitalize }} {{ markName | capitalize }}
          {{ modelName | capitalize }} {{ yearRangeWord }} {{ activeYearFrom }} {{ yearRangeSign }} {{ activeYearTo }}
          {{ year }}, {{ priceRangeWord }} {{ activePriceFrom }} {{ priceRangeSign }} {{ activePriceTo }} {{ price }}
        </p>
        <p class="info-result__count-proposition">
          <span>{{
              $tc('list_page.offers', this.countOffers)  | capitalize
            }}</span>
        </p>
        <div class="info-result__tags">
          <div class="info-result__tags-block">
            <span class="info-result__tags-block-wrap" v-for="tag in tagsArrayLimit">
              <a href="#" class="info-result__tags-block-wrap-go">{{ tag | capitalize }}</a>
              <a href="#" class="info-result__tags-block-wrap-remove">×</a>
            </span>
              <span class="info-result__tags-block-wrap info-result__tags-block-wrap-show-all"
                    v-show="tagsArray.length > 5 && tagsLimit !== null" @click="changeStateAdditionalTags">
              <a href="#" class="info-result__tags-block-wrap-go info-result__tags-block-wrap-show-all-number">{{
                  additionalAmountOfTags
                }}</a>
              <a href="#" class="info-result__tags-block-wrap-remove"></a>
            </span>
              <span class="info-result__tags-block-wrap" v-show="changeState === false">
              <a href="#" class="info-result__tags-block-wrap-go">Всі</a>
              <a href="#" class="info-result__tags-block-wrap-remove">×</a>
            </span>
          </div>
          <router-link to="/advancedSearch" class="info-result__tags-block-btn btn-blue-hover list-auto-majority">
            Уточнить поиск
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from "../layouts/Header";
import HeaderCategories from "../layouts/HeaderCategories";

export default {
  name: "List",
  components: {
    Header,
    HeaderCategories,
  },
  data() {
    return {
      searchOrSellWord: '',
      activeMarkValue: null,
      activeModelValue: null,
      activeTransportTypeValue: null,
      modelName: null,
      markName: null,
      transportTypeName: null,
      transport: null,
      objectToStore: {},
      countOffers: '',
      activeVin: null,
      activeVinWord: null,
      activeRegionValue: null,
      regionName: null,
      activeYearFrom: null,
      activeYearTo: null,
      yearRangeWord: null,
      yearRangeSign: '-',
      year: 'гг.',
      activePriceFrom: null,
      activePriceTo: null,
      priceRangeWord: null,
      priceRangeSign: '-',
      price: '$',
      tagsArray: [],
      yearRangeToTag: null,
      priceRangeToTag: null,
      tagsLimit: 5,
      additionalAmountOfTags: null,
      changeState: true
    }
  },
  async created() {
    this.searchOrSellWord = 'Продаж'
    await this.allParamsToStore()
    this.countOffers = this.searchResult.result.search_result.count
    this.changeYearFormat()
    this.changePriceFormat()
    this.changeWordSearchOrSell()
    this.tagsShowMore()
  },
  methods: {
    ...mapActions(['SEARCH', 'GET_MARKS', 'GET_MODELS', 'GET_TRANSPORT_TYPES', 'MUTATE_ITEMS']),
    changeStateAdditionalTags() {
      this.changeState = !this.changeState
      this.tagsLimit = null
    },
    tagsShowMore() {
      if (this.tagsArray.length > 5) {
        this.additionalAmountOfTags = '+' + (this.tagsArray.length - this.tagsLimit)
      }
    },
    collectVinCheckTag() {
      if (this.activeVin === 1) {
        this.activeVinWord = 'Перевірений VIN-код'
        this.collectTags(this.activeVinWord)
      }
    },
    collectYearRangeTag() {
      if (this.activeYearFrom === null && this.activeYearTo !== null) {
        this.yearRangeToTag = 'до' + ' ' + this.activeYearTo + ' ' + 'г.'
        this.collectTags(this.yearRangeToTag)
      } else if (this.activeYearTo === null && this.activeYearFrom !== null) {
        this.yearRangeToTag = 'від' + ' ' + this.activeYearFrom + ' ' + 'г.'
        this.collectTags(this.yearRangeToTag)
      } else if (this.activeYearFrom !== null && this.activeYearTo !== null) {
        this.yearRangeToTag = this.activeYearFrom + '-' + this.activeYearTo + ' ' + 'гг.'
        this.collectTags(this.yearRangeToTag)
      }
    },
    collectPriceRangeTag() {
      if (this.activePriceFrom === null && this.activePriceTo !== null) {
        this.priceRangeToTag = 'до' + ' ' + this.activePriceTo + ' ' + '$'
        this.collectTags(this.priceRangeToTag)
      } else if (this.activePriceTo === null && this.activePriceFrom !== null) {
        this.priceRangeToTag = 'від' + ' ' + this.activePriceFrom + ' ' + '$'
        this.collectTags(this.priceRangeToTag)
      } else if (this.activePriceFrom !== null && this.activePriceTo !== null) {
        this.priceRangeToTag = this.activePriceFrom + ' ' + '-' + ' ' + this.activePriceTo + ' ' + '$'
        this.collectTags(this.priceRangeToTag)
      }
    },
    collectTags(element) {
      for (let i = 0; i < 10; i++) {
        if (!this.tagsArray.includes(element))
          this.tagsArray.push(element);
      }
      console.log(this.tagsArray)

      return this.tagsArray;
    },
    changeWordSearchOrSell() {
      if (this.activeYearFrom === null && this.activeYearTo === null && this.activePriceFrom === null && this.activePriceTo === null) {
        this.searchOrSellWord = 'Продаж'
      } else {
        this.searchOrSellWord = 'Поиск'
      }
    },
    changeYearFormat() {
      if (this.activeYearFrom === null) {
        this.yearRangeWord = 'до'
        this.yearRangeSign = ''
      } else if (this.activeYearTo === null) {
        this.yearRangeWord = 'від'
        this.yearRangeSign = ''
      }
      if (this.activeYearFrom === null && this.activeYearTo === null) {
        this.yearRangeWord = ''
        this.year = ''
        this.yearRangeSign = ''
      }
    },
    changePriceFormat() {
      if (this.activePriceFrom === null) {
        this.priceRangeWord = 'до'
        this.priceRangeSign = ''
      } else if (this.activePriceTo === null) {
        this.priceRangeWord = 'від'
        this.priceRangeSign = ''
      }
      if (this.activePriceFrom === null && this.activePriceTo === null) {
        this.priceRangeWord = ''
        this.price = ''
        this.priceRangeSign = ''
      }
    },
    async transportTypeFromNameToValue() {
      this.transportTypeName = this.$route.params.transportType
      await this.GET_TRANSPORT_TYPES()
      this.collectTags(this.transportTypeName)
      this.activeTransportTypeValue = this.transportTypes.find(e => e.name.toLowerCase() === this.transportTypeName).value
      if (this.activeTransportTypeValue === '') {
        return
      }
      console.log(this.objectToStore, this.transportTypeName)
    },
    async markFromNameToValue() {
      this.markName = this.$route.params.mark
      await this.GET_MARKS()
      this.collectTags(this.markName)
      this.activeMarkValue = this.marks.find(e => e.name.toLowerCase() === this.markName).value
      if (this.activeMarkValue === '') {
        return
      }
      console.log(this.objectToStore, this.markName)
    },
    async modelFromNameToValue() {
      this.modelName = this.$route.params.model
      this.collectTags(this.modelName)
      this.activeModelValue = this.models.find(e => e.name.toLowerCase() === this.modelName).value
      if (this.activeModelValue === '') {
        return
      }
      console.log(this.objectToStore, this.modelName)
    },
    getVinCode() {
      this.activeVin = this.$route.query.vin
      if (this.activeVin === '') {
        return
      }
      console.log(this.objectToStore, this.activeVin)
    },
    getRegion() {
      this.activeRegionValue = this.$route.query.region
      this.regionName = this.regions.find(e => e.value === this.activeRegionValue).region
      this.collectTags(this.regionName)
      console.log(this.objectToStore, this.activeRegionValue)
    },
    getYearFrom() {
      this.activeYearFrom = this.$route.query.yearFrom
      if (this.activeYearFrom === '') {
        return
      }
      console.log(this.objectToStore, this.activeYearFrom)
    },
    getYearTo() {
      this.activeYearTo = this.$route.query.yearTo
      if (this.activeYearTo === '') {
        return
      }
      console.log(this.objectToStore, this.activeYearTo)
    },
    getPriceFrom() {
      this.activePriceFrom = this.$route.query.priceFrom
      if (this.activePriceFrom === '') {
        return
      }
      console.log(this.objectToStore, this.activePriceFrom)
    },
    getPriceTo() {
      this.activePriceTo = this.$route.query.priceTo
      if (this.activePriceTo === '') {
        return
      }
      console.log(this.objectToStore, this.activePriceTo)
    },
    async allParamsToStore() {
      await this.transportTypeFromNameToValue()
      await this.markFromNameToValue()
      await this.modelFromNameToValue()
      await this.getVinCode()
      await this.collectVinCheckTag()
      await this.getRegion()
      await this.getYearFrom()
      await this.getYearTo()
      await this.collectYearRangeTag()
      await this.getPriceFrom()
      await this.getPriceTo()
      await this.collectPriceRangeTag()

      console.log(21341231)

      this.objectToStore = {
        main_category: this.activeTransportTypeValue,
        marka_id: this.activeMarkValue,
        model_id: this.activeModelValue,
        // 'verified.VIN': this.activeVin,
        // state: this.activeRegionValue,
        // 's_yers': this.activeYearFrom,
        // 'po_yers': this.activeYearTo,
        // 'price_ot': this.activePriceFrom,
        // 'price_do': this.activePriceTo
      }
      console.log(this.objectToStore)
      await this.SEARCH(this.objectToStore)
    },
  },
  computed: {
    ...mapGetters(['transportTypes', 'marks', 'models', 'searchResult', 'regions']),
    tagsArrayLimit() {
      return this.tagsLimit ? this.tagsArray.slice(0, this.tagsLimit) : this.tagsArray
    }
  }
}
</script>

<style lang="scss">
* {
  color: #414042;
}

.list-auto-18 {
  font-size: 1.8rem;
  line-height: 2.16rem;
  color: #256799;
}

.list-auto-filter-name {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  font-family: Arial-Bold, sans-serif;
}

.list-auto-majority {
  font-size: 1.5rem;
  line-height: 2rem;
}

.list-auto-price {
  font-size: 2.2rem;
  line-height: 2rem;
  font-weight: 700;
  font-family: Arial-Bold, sans-serif;
  color: #3c9806;
}

.fast-navigation {
  &__label {
    display: flex;
    padding-top: 1rem;

    &-li {
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: #256799;

      &:hover {
        text-decoration: underline;
      }

      &:after {
        content: '\203a';
        color: #e0e3e4;
        font-size: 1.3rem;
        position: relative;
        display: inline-block;
        margin-left: .5rem;
        margin-right: .5rem;
        right: 0;
        top: -.1rem;
      }
    }
  }
}

.info-result {
  &__name {
    font-size: 2.4rem;
    line-height: 2.5rem;
    color: #414042;
    display: inline-block;
    font-weight: 700;
    margin: 0;
    font-family: Arial-Bold, sans-serif;
    padding-top: 2.4rem;
  }

  &__count-proposition {
    padding-top: .2rem;
    font-weight: 700;
    font-family: Arial-Bold, sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  &__tags {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    &-block {
      border: 1px solid #e0e3e4;
      border-radius: 3px;
      padding: .7rem .7rem .2rem .7rem;
      min-height: 2rem;
      overflow: hidden;
      display: block;
      flex-wrap: wrap;
      width: 72.3rem;
      &-btn {
        border: 1px solid #256799;
        border-radius: 3px;
        padding: 0 3.7rem;
        color: #256799;
        display: flex;
        align-items: center;
      }

      &-wrap {
        font-weight: 400;
        border-radius: 3px;
        background: #db5c4c;
        float: left;
        margin: 0 .4rem .5rem 0;
        height: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-show-all {
          background: #f0f2fa;
          cursor: pointer;

          &-number {
            color: #256799 !important;

            &:hover {
              text-decoration: none !important;
            }
          }
        }

        &-go {
          color: #ffffff;
          line-height: 2rem;
          font-size: 1.5rem;
          padding-left: .7rem;

          &:hover {
            text-decoration: underline;
          }
        }

        &-remove {
          font-size: 2.2rem;
          color: #ffffff;
          top: 0;
          line-height: 2rem;
          padding: 0 .6rem;
        }
      }
    }
  }
}
</style>
