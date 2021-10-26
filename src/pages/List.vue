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
          Продаж {{ transportTypeName | capitalize }} {{ markName | capitalize }} {{ modelName | capitalize }}
        </p>
        <p class="info-result__count-proposition">  <span>{{ propositionState | capitalize }}</span></p>
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
      activeMarkValue: null,
      activeModelValue: null,
      activeTransportTypeValue: null,
      modelName: null,
      markName: null,
      transportTypeName: null,
      transport: null,
      objectToStore: {},
      propositionState: '',
    }
  },
  created() {
    this.allParamsToStore()
  },

  methods: {
    ...mapActions(['SEARCH', 'GET_MARKS', 'GET_MODELS', 'GET_TRANSPORT_TYPES']),
     transportTypeFromNameToValue() {
      this.transportTypeName = this.$route.params.transportType
      this.activeTransportTypeValue = this.transportTypes.find(e => e.name.toLowerCase() === this.transportTypeName).value
      if (this.activeTransportTypeValue === '') {
        return
      }
      console.log(this.objectToStore, this.transportTypeName)
    },
    async markFromNameToValue() {
      this.markName = this.$route.params.mark
      await this.GET_MARKS()
      this.activeMarkValue = this.marks.find(e => e.name.toLowerCase() === this.markName).value
      if (this.activeMarkValue === '') {
        return
      }
      console.log(this.objectToStore, this.markName)
    },
    async modelFromNameToValue() {
      this.modelName = this.$route.params.model
      this.activeModelValue = this.models.find(e => e.name.toLowerCase() === this.modelName).value
      if (this.activeModelValue === '') {
        return
      }
      console.log(this.objectToStore, this.modelName)
    },
    async allParamsToStore() {
      await this.transportTypeFromNameToValue()
      await this.markFromNameToValue()
      await this.modelFromNameToValue()

      this.objectToStore = {
        main_category: this.activeTransportTypeValue,
        marka_id: this.activeMarkValue,
        model_id: this.activeModelValue
      }
      await this.SEARCH(this.objectToStore)
    },
  },
  computed: {
    ...mapGetters(['transportTypes', 'marks', 'models', 'params']),
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
    padding-top: 2rem;
  }

  &__count-proposition {
    padding-top: .6rem;
    font-weight: 700;
    font-family: Arial-Bold, sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
</style>
