<template>
  <div>
    <div class="advanced-price__sign" @click="openSignList">
      <input
          type="text"
          class="sign-input"
          id="sign"
          v-model="activeSign"
          placeholder="$"
          autocomplete="off"
          disabled="disabled"
      >
      <label for="sign"></label>
      <ul
          class="advanced-price__sign-list"
          :class="signList === true ? 'active-sign' : ''"
      >
        <li
            class="advanced-search-title"
            @click="chooseSign(sign)"
            :key="sign.index"
            v-for="sign in signs"
        ><a href="#">{{ sign }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceSign",
  data() {
    return {
      signs: [
        '$',
        '€',
        'грн.'
      ],
      signList: false,
      activeSign: '$'
    }
  },
  methods: {
    chooseSign(mark) {
      this.activeSign = mark
    },
    openSignList() {
      this.signList = !this.signList
    }
  }
}
</script>

<style scoped lang="scss">
.active-sign {
  display: block !important;
}
.advanced-price {
  &__sign {
    position: relative;
    border: 1px solid #e0e3e4;
    border-radius: 5px;
    height: 3.2rem;
    outline: none;
    &:after {
      content: '';
      position: absolute;
      right: 1rem;
      top: 1.5rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #B6B6B6;
    }
    &-list {
      background: #fff;
      border: 1px solid #3498db;
      width: 5.4rem;
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

      li {
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

#sign {
  border: none;
  border-radius: .5rem;
  padding: 0 0 0 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #777777;
  outline: none;
  height: 3.2rem;
  width: 4.7rem;
}
</style>
