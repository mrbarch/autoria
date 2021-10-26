<template>
  <div style="position: relative;">
    <div
        class="filter__model filter__model-arrow"
        @click="closeModelsListAfterChoose"
        :class="{'active-model-glass': changeSign, 'active-model-arrow': !changeSign}"
        v-click-outside="hideList"
    >
      <input
          type="search"
          id="models"
          :placeholder="placeholder"
          v-model="searchModels"
          autocomplete="off"
          :widthModels="widthModelsInAdvanced"
          :style="{width: this.widthModelsInAdvanced}"
          @click="changePlaceholder"
      >
      <label
          for="models"
          class="filter__model-label">
      </label>
    </div>
    <ul
        class="filter__model-list"
        :class="modelsList === true ? 'active-models' : ''"
        :widthModelsList="widthModelsListInAdvanced"
        :style="{width: this.widthModelsListInAdvanced}">
      <li
          @click="chooseModels(model.name, model.value)"
          :key="model.name"
          v-for="model in filteredModels">
        <a
            href="#">{{ model.name }}
        </a>
      </li>
    </ul>
    <span class="filter__model-clean" :class="{'model-close': activeModel !== '' || searchModels !== ''}"
          @click="modelsListClose">×</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  name: "Models",
  directives: {
    ClickOutside
  },
  data() {
    return {
      activeModel: '',
      modelsList: false,
      widthModels: '',
      widthModelsList: '',
      searchModels: '',
      changeSign: false,
      placeholder: 'Модель',
      modelToStore: '',
    }
  },

  props: ['widthModelsInAdvanced', 'widthModelsListInAdvanced'],
  methods: {
    chooseModels(model, index) {
      this.activeModel = model
      this.modelToStore = index
      this.searchModels = model
      this.$emit('modelInFilter', this.modelToStore)
    },
    hideList() {
      this.searchModels = this.activeModel
      this.modelsList = false
      this.changeSign = false
      this.placeholder = 'Модель'
      if (this.placeholder !== 'Модель') {
        this.searchModels = ''
      }
    },
    modelsListClose() {
      this.searchModels = ''
      this.activeModel = ''
      this.modelsList = true
    },
    closeModelsListAfterChoose() {
      this.changeSign = true
      this.modelsList = true
      if (this.activeModel !== '') {
        this.modelsList = false
      }
    },
    changePlaceholder() {
      this.placeholder = 'Пошук...'
    }
  },
  computed: {
    ...mapGetters([
      'models',
    ]),
    filteredModels() {
      if (!this.searchModels) {
        return this.models
      }
      let searchValue = this.searchModels.toLowerCase()
      let filter = model => model.name.toLowerCase().includes(searchValue) ||
          model.name.toLowerCase().includes(searchValue)
      if (this.searchModels === this.activeModels) {
        return this.models
      } else {
        return this.models.filter(filter)
      }
    },
  }
}
</script>

<style lang="scss">

.active-model-glass {
  &:after {
    border-top: none !important;
    background: url("../../assets/img/glass.png") no-repeat, #fff;
    border: none !important;
    width: 1.6rem;
    height: 1.6rem;
    background-size: 1.6rem 1.6rem;
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0.7rem;
    margin: -.8rem 0 0 !important;
    content: '';
  }
}

.active-model-arrow {
  &:after {
    content: '';
    background: none;
  }
}


.model-close {
  visibility: visible !important;
  opacity: 1 !important;
}

.active-models {
  display: block !important;
}

.filter {
  &__model {
    position: relative;

    &-label {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      cursor: text;
      font-size: 1.6rem;
      line-height: 2rem;
      margin-left: .8rem;
      color: #777;
    }

    &-clean {
      visibility: hidden;
      opacity: 0;
      background: #fff;
      position: absolute;
      top: 0.4rem;
      right: 0.3rem;
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

      li {
        font-size: 1.6rem;
        line-height: 2rem;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;

        &:hover {
          background-color: #3399fe;
        }

        a {
          font-weight: 200 !important;

          &:hover {
            color: #ffffff !important;
          }
        }
      }
    }

    &-list::-webkit-scrollbar {
      width: 1em;
    }

    &-list::-webkit-scrollbar-track {
      background-color: #f7f4f4;
    }

    &-list::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }

    select {
      width: 28.1rem;
      height: 3.2rem;
    }

    &-arrow:before {
      content: '';
      position: absolute;
      right: 1rem;
      top: 1.5rem;
      border: .55rem solid transparent;
      border-top: .5rem solid #db5c4c;
    }
  }
}

#models {
  border: none;
  border-radius: .5rem;
  padding: 0 0 0 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #777777;
  outline: none;
  height: 3.2rem;
  width: 28.1rem;
}

#models::-webkit-search-cancel-button {
  display: none;
}

//.unshow-list {
//  color: #9b9b9b;
//  padding: .5rem .6rem .2rem;
//  display: inline-block;
//  width: 100%;
//  font-size: 1.3rem !important;
//  position: relative;
//  bottom: 1.2rem;
//  left: -.8rem;
//  cursor: default;
//}
</style>
