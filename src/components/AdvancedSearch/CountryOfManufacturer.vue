<template>
  <div>
    <div class="country-of-manufacturer" @click="openCountryOfManufacturerList">
      <input disabled="disabled" type="text" class="input input-country-of-manufacturer" id="input-country-of-manufacturer"
             placeholder="Оберіть країну"
             v-model="activeCountryOfManufacturer">
      <label for="input-country-of-manufacturer"></label>
      <ul class="country-of-manufacturer__list"
          :class="countryOfManufacturerList === true ? 'active-country-of-manufacturer' : ''">
        <li class="country-of-manufacturer__list-item" @click="chooseCountryOfManufacturer('Оберіть країну')"><a href="#">Оберіть країну</a></li>
        <li class="country-of-manufacturer__list-item" :key="index"
            v-for="(country, index) in this.countryOfManufacturer"
            @click="chooseCountryOfManufacturer(country.name, index + 1)"><a
            href="#"
        >{{ country.name }}
        </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CountryOfManufacturer",
  data() {
    return {
      activeCountryOfManufacturer: '',
      activeCountryOfManufacturerToStore: '',
      countryOfManufacturerList: false,
    }
  },
  computed: {
    ...mapGetters([
      "countryOfManufacturer"
    ])
  },
  mounted() {
    this.GET_COUNTRY_OF_MANUFACTURER()
  },
  methods: {
    ...mapActions(['GET_COUNTRY_OF_MANUFACTURER']),
    chooseCountryOfManufacturer(country, index) {
      this.activeCountryOfManufacturer = country
      this.activeCountryOfManufacturerToStore = index
    },
    openCountryOfManufacturerList() {
      this.countryOfManufacturerList = !this.countryOfManufacturerList
    }
  }
}
</script>

<style lang="scss" scoped>
.active-country-of-manufacturer {
  display: block !important;
}
.input-country-of-manufacturer {
  width: 21rem!important;
}
.country-of-manufacturer {
  width: 22rem;
  position: relative;
  border: 1px solid #e0e3e4;
  border-radius: 3px;
  height: 3.2rem;
  &:before {
    content: "";
    position: absolute;
    border: .55rem solid transparent;
    border-top: .5rem solid #B6B6B6;
    left: 19.8rem;
    top: 1.3rem;
  }
  &__list {
    background: #fff;
    border: 1px solid #3498db;
    width: 22.1rem;
    max-height: 19rem;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 3;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: .5rem;
    display: none;
    position: absolute;

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
</style>
