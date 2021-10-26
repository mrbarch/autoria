<template>
  <div>
    <div class="filter">
      <div class="container">
        <div class="filter__block-new">

          <div class="filter__block-new-state">
            <button class="filter__block-new-state-btn">Всі</button>
            <button class="filter__block-new-state-btn">Вживані</button>
            <button class="filter__block-new-state-btn">Нові</button>
            <button class="filter__block-new-state-btn">Під пригон</button>
          </div>

          <TransportType
              @activeTypeOfTransport="chooseTypeOfTransport"
          />

          <Region/>

          <Mark
              @activeMark="chooseMark"
          />

          <div class="filter__block-new-price">
            <div class="filter__block-new-price-title from-to-title">Ціна, $</div>
            <div class="filter__block-new-price-inputs">
              <input class="input" type="number" placeholder="від">
              <input class="input" type="number" placeholder="до">
            </div>
          </div>

          <div class="filter__block-new-model" @click="modelsList = true">
            <input disabled="disabled" type="text" class="input" id="input-models" placeholder="Модель"
                   v-model="activeModels"
                   autocomplete="off">
            <label for="input-models"></label>
            <span class="filter__block-new-model-clean" :class="modelsList === true ? 'models-close' : ''"
                  @click="modelsList = false">×</span>
            <ul class="filter__block-new-model-list" :class="modelsList === true ? 'active-models' : ''"
                @mouseleave="modelsList = false">
              <li @click="chooseModels(model.name)" :key="model.name" v-for="model in models"><a
                  href="#">{{ model.name }}</a></li>
            </ul>
          </div>

          <button class="filter__block-new-extension">Розширений пошук</button>
          <button class="filter__block-new-search">Пошук</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransportType from "../FilterBlock/TransportType";
import Region from "../FilterBlock/Region";
import Mark from "../FilterBlock/Mark";

export default {
  name: 'FilterBlockNew',
  components: {
    TransportType,
    Region,
    Mark
  },
  data() {
    return {
      modelsList: false,
      activeModels: '',
      activeTypeOfTransport: '',
    }
  },

  computed: {
    years() {
      const year = new Date().getFullYear() + 1
      return Array.from({length: year - 1900}, (value, index) => 1900 + index).reverse()
    }
  },

  methods: {

    chooseTypeOfTransport(index) {
      this.activeTypeOfTransport = index
      this.$emit('activeTransportIndex', this.chooseTypeOfTransport)
    },
    chooseMark(mark) {
      this.activeMark = mark
    },
    chooseModels(model) {
      this.activeModels = model
    },
  },
}
</script>

<style lang="scss">

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#input-marks, #input-models {
  width: 27.4rem;
}

#input-transport-type {
  cursor: pointer;
  width: 27.4rem;
}

.active-transport-type {
  display: block !important;
}

.marks-close {
  display: block !important;
}

.active-marks {
  display: block !important;
}

.models-close {
  display: block !important;
}

.active-models {
  display: block !important;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

.input {
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
}

.from-to-title {
  font-size: 1.6rem;
  color: #ffffff;
  line-height: 2.5rem;
  display: flex;
  align-items: flex-start;
  padding-top: .2rem;
}

.filter {
  position: relative;
  top: -.5rem;
  &__block-new {
    height: 23.7rem;
    margin-top: 1.8rem;
    background-color: #db5c4c;
    width: 60.5rem;
    position: relative;
    border-radius: 0 0 0 1.3rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1.3rem 0 0 1.3rem;

    &-state {
      height: 3.2rem;
      width: calc(63%);

      :nth-child(3) {
        background: url('../../assets/svg/check.svg') 1.5rem 0.6rem no-repeat, #ffffff;
        color: #414042;
        width: 7.3rem;
        padding-left: 2rem;
        background-size: 1.5rem;
      }

      :nth-child(1) {
        width: 4.3rem;
        background: transparent;
        color: #ffffff;
        padding-left: 0!important;
        border-radius: .5rem 0 0 .5rem;
      }

      :nth-child(2) {
        width: 7.4rem;
      }

      :last-child {
        border-radius: 0 .5rem .5rem 0;
        width: 9rem;
      }

      &-btn {
        background-color: transparent;
        border: .1rem solid #ffffff;
        height: 3.2rem;
        color: #ffffff;
        font-size: 1.3rem;
        line-height: 1.4rem;
      }
    }

    &-vin {
      height: 3.2rem;
      display: flex;
      justify-content: space-between;
      width: 21.2rem;

      &-checkbox {
        background-color: #266799;
        width: 18rem;
        height: 2.4rem;
        margin-top: 0.5rem;
        display: flex;
      }

      svg {
        width: 2rem;
        height: 2rem;
        padding: 0.55rem 0 0 1.4rem;
      }

      p {
        font-size: 1.6rem;
        color: #ffffff;
        line-height: 2.5rem;
        padding-left: 0.5rem;
      }
    }





    &-brand {
      width: calc(51.5%);
      margin-right: 3rem;
    }

    &-brand-clean {
      display: none;
      background: #fff;
      position: absolute;
      top: 11rem;
      right: 33rem;
      color: #db5c4c;
      font-size: 2.4rem;
      line-height: 2rem;
      padding: .3rem .6rem .1rem;
      cursor: pointer;
      z-index: 1;
      border-radius: .3rem;
    }

    &-year-range {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 28rem;

      &-from:after {
        content: '';
        position: absolute;
        left: 15.3rem;
        border: .55rem solid transparent;
        border-top: .5rem solid #db5c4c;
        top: 1.4rem;
      }

      &-from, &-to {
        position: absolute;
      }

      &-to:after {
        content: '';
        position: absolute;
        left: 25.9rem;
        border: .55rem solid transparent;
        border-top: .5rem solid #db5c4c;
        top: 1.4rem;
      }

      &-selects {
        display: flex;
        justify-content: space-between;
        width: 21rem;
      }

    }

    &-year-range select {
      height: 3.2rem;
      width: 10.3rem;
    }

    &-model {
      width: calc(51.5%);

      &-clean {
        display: none;
        background: #fff;
        position: absolute;
        top: 15.7rem;
        right: 33rem;
        color: #db5c4c;
        font-size: 2.4rem;
        line-height: 2rem;
        padding: .3rem .6rem .1rem;
        cursor: pointer;
        z-index: 1;
        border-radius: .3rem;
      }

      &-list {
        background: #fff;
        border: 1px solid #3498db;
        width: 28.3rem;
        max-height: 19rem;
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
        left: 1.3rem;
        top: 18.6rem;
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

    &-model:after {
      content: '';
      position: absolute;
      left: 27.4rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #db5c4c;
      top: 16.7rem;
    }

    &-price {
      display: flex;
      justify-content: space-between;
      width: 28rem;

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

    &-extension {
      border: .1rem solid #ffffff;
      border-radius: .5rem;
      width: 28rem;
      height: 3.1rem;
      font-size: 1.5rem;
      line-height: 1.8rem;
      position: relative;
      top: 4.4rem;
      left: -31rem;
      padding-left: 6.8rem;
      background-color: transparent;
      display: flex;
      color: #ffffff;
      align-items: center;
      &:hover {
        background-color: #c95c4e;
      }
    }

    &-search {
      background: url("../../assets/img/search.png") 6.8rem 1rem no-repeat, #3e9be7;
      line-height: 1.8rem;
      width: 21rem;
      height: 3.1rem;
      border: none;
      background-size: 1.7rem;
      font-size: 1.8rem;
      color: #ffffff;
      padding-left: 2rem;
      border-radius: .5rem;
      margin-left: 10rem;
      position: relative;
      left: 28rem;
      top: -.5rem;
      &:hover {
        background-color: #2ea7f3;
      }
    }
  }
}
</style>

