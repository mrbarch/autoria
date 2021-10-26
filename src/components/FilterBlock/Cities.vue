<template>
  <div>
    <div
        class="cities"
        @click="citiesList = true"
    >
      <input
          disabled="disabled"
          type="text"
          id="cities-input"
          placeholder="Я шукаю місто ..."
          v-model="activeCities"
          autocomplete="off"
      >
      <label for="cities-input"></label>
      <ul
          class="cities__list"
          :class="citiesList === true ? 'active-cities' : ''"
          @mouseleave="citiesList = false">
        <li
            class="cities__list-item"
            @click="chooseCities(city.name)"
            :key="city.name"
            v-for="city in this.cities"><a
            href="#">{{ city.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Cities",
  data() {
    return {
      activeCities: '',
      citiesList: false,
    }
  },
  mounted() {
    this.GET_CITIES()
  },
  methods: {
    ...mapActions(['GET_CITIES']),
    chooseCities(city) {
      this.activeCities = city
    },
  },
  computed: {
    ...mapGetters([
      'cities',
    ]),
  }
}
</script>

<style lang="scss">

.active-cities {
  display: block !important;
}

.cities {
  &:after {
    content: '';
    right: 1rem;
    top: 1.5rem;
    position: absolute;
    border: .55rem solid transparent;
    border-top: .5rem solid #db5c4c;
  }

  &__list {
    background: #fff;
    border: 1px solid #3498db;
    width: 28.1rem;
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


#cities-input {
  border: none;
  border-radius: .5rem;
  padding: 0 0 0 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #777777;
  outline: none;
  height: 3.2rem;
  width: 27.4rem;
}
</style>
