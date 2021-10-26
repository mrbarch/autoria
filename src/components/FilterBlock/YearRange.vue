<template>
  <div>
    <div class="filter__block-year-range-selects">
      <div class="year-range-from-to">
        <select class="input" name="cars" id="year-range-from" @change="chooseYearFrom">
          <option selected>від</option>
          <option v-for="year in years" :value="year">{{ year }}</option>
        </select>
      </div>
      <div class="year-range-from-to">
        <select class="input" name="cars" id="year-range-to" @change="chooseYearTo">
          <option selected>до</option>
          <option v-for="year in years" :value="year">{{ year }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YearRange",
  data() {
    return {
      yearFrom: null,
      yearTo: null
    }
  },
  methods: {
    chooseYearFrom(e) {
      this.yearFrom = e.target.value
      this.$emit('yearFromFilter', this.yearFrom)
    },
    chooseYearTo(e) {
      this.yearTo = e.target.value
      this.$emit('yearToFilter', this.yearTo)
    }
  },
  computed: {
    years() {
      const year = new Date().getFullYear() + 1
      return Array.from({length: year - 1900}, (value, index) => 1900 + index).reverse()
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  &__block {
    &-year-range {
      &-selects {
        display: flex;
        justify-content: space-between;
        width: 21rem;
      }
    }
  }
  &-year-range select {
    height: 3.2rem;
    width: 10.3rem;
  }
}

.year-range-from-to {
  width: 10.3rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 8rem;
    border: .55rem solid transparent;
    border-top: .5rem solid #db5c4c;
    top: 1.4rem;
  }
}

#year-range-from,
#year-range-to {
  border: 1px solid #e0e3e4;
  border-radius: 5px;
  height: 3.2rem;
  outline: none;
  width: 10.3rem;
}


</style>
