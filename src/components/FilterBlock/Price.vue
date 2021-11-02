<template>
  <div>
    <div
        class="filter__block-price-inputs"
        :widthBlock="widthBlockPrice"
        :style="{ width: widthBlock }"
    >
      <input class="price-input" id="input-price-from" type="number" placeholder="від" @change="choosePriceFrom">
      <input class="price-input" id="input-price-to" type="number" placeholder="до" @change="choosePriceTo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  data(){
    return {
      widthBlockPrice: '',
      priceFrom: null,
      priceTo: null,
    }
  },
  methods: {
    choosePriceFrom(e) {
      this.priceFrom = e.target.value
      this.$emit('priceFromInFilter', this.priceFrom)
    },
    choosePriceTo(e) {
      this.priceTo = e.target.value
      this.$emit('priceToInFilter', this.priceTo)
    }
  },
  props: ['widthBlock']
}
</script>

<style scoped lang="scss">
.filter {
  &__block {
    &-price {
      &-inputs {
        display: flex;
        justify-content: space-between;
        width: 21rem;

        input {
          width: 9.6rem;
          outline: none;
        }
      }
    }
  }
}
.price-input {
  border: none;
  border-radius: .5rem;
  padding-left: 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #777777;
  outline: none;
  width: 28.1rem;
  height: 3.2rem;
  cursor: text;
}
#input-price-from,
#input-price-to {
  border: 1px solid #e0e3e4;
  border-radius: 5px;
  height: 3.2rem;
  outline: none;
  width: 9.4rem;
}
</style>
