<template>
  <div>
    <div class="checkbox-vin">
      <label class="checkbox-vin__label">
        <input class="checkbox-vin__label-checkbox" type="checkbox" @click="chooseVinCheck">
        <span class="checkbox-vin__label-fake"></span>
        <span class="checkbox-vin__label-text">
          <svg>
            <path
                d="M0.5 3H2L5 0H11L11.75 0.75L8 4.5L6 2.5L4.5 4L8 7.5L13.25 2.25L14 3H15.5C15.7761 3 16 3.22386 16 3.5C16 3.77614 15.7761 4 15.5 4H15V10C15 10.5523 14.5523 11 14 11H13C12.4477 11 12 10.5523 12 10V9H4V10C4 10.5523 3.55228 11 3 11H2C1.44772 11 1 10.5523 1 10V4H0.5C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3Z"
                fill="white">
            </path>
          </svg>
          Перевірений VIN
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "VinCheck",
  data() {
    return {
      activeCheck: false,
      vinCheckCount: 0
    }
  },
  methods: {
    chooseVinCheck() {
      this.activeCheck = !this.activeCheck
      if (this.activeCheck === true) {
        this.vinCheckCount = 1
      } else {
        this.vinCheckCount = 0
      }
      this.$emit('vinCheck', this.vinCheckCount)
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox-vin {
  height: 3.2rem;
  display: flex;
  justify-content: space-between;
  width: 21.2rem;
  margin-top: .4rem;

  &__label {
    height: 2.1rem;
    display: flex;
    width: 22rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    &-text {
      background-color: #266799;
      width: 17.5rem;
      height: 2.4rem;
      margin-top: 0.5rem;
      display: flex;
      font-size: 1.6rem;
      color: #ffffff;
      line-height: 2.5rem;
      padding-left: 0.5rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
      padding: 0.7rem 0 0 1.2rem;
    }

    &-fake {
      display: inline-block;
      width: 2.3rem;
      height: 2.3rem;
      background-color: #fff;
      border: 1px solid #ffffff;
      position: relative;
      border-radius: 3px;
      margin-top: .5rem;

      &:before {
        content: "";
        background: url("./../../assets/svg/check.svg") no-repeat;
        position: absolute;
        top: 7%;
        left: 7%;
        display: block;
        width: 2.2rem;
        height: 2rem;
        background-size: 2rem;
        opacity: 0;
      }
    }

    &-checkbox:checked + &-fake::before {
      opacity: 1;
    }

    &-checkbox {
      opacity: 0;
      position: absolute;
    }


  }
}


</style>
