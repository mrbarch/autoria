<template>
  <div style="position: relative;">
    <div
        class="filter__brand filter__brand-arrow"
        @click="closeMarkListAfterChoose"
        :class="{'active-brand-glass': changeSign, 'active-brand-arrow': !changeSign}"
        v-click-outside="hideList"
    >
      <input
          type="search"
          id="marks"
          :placeholder="placeholder"
          v-model="searchMarks"
          autocomplete="off"
          :widthMarks="widthMarksInAdvanced"
          :style="{width: this.widthMarksInAdvanced}"
          @click="changePlaceholder"
      >
      <label
          for="marks"
          class="filter__brand-label">
      </label>
    </div>
    <ul
        class="filter__brand-list"
        :class="marksList === true ? 'active-marks' : ''"
        :widthMarksList="widthMarksListInAdvanced"
        :style="{width: this.widthMarksListInAdvanced}"
    >
      <li
          @click="chooseMark(mark.name, mark.value)"
          :key="mark.name"
          v-for="mark in filteredMarks"
      ><a href="#">{{ mark.name }}</a></li>
    </ul>
    <span class="filter__brand-clean" :class="{'mark-close': activeMark !== '' || searchMarks !== ''}"
          @click="marksListClose">×</span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import ClickOutside from 'vue-click-outside'

export default {
  name: "Mark",
  directives: {
    ClickOutside
  },
  data() {
    return {
      changeSign: false,
      searchMarks: '',
      marksList: false,
      activeMark: '',
      markToStore: '',
      placeholder: 'Марка',
    }
  },
  props: ['typeOfTransportIndex', 'widthMarksInAdvanced', 'widthMarksListInAdvanced'],
  methods: {
    ...mapActions(['GET_MARKS', 'GET_MODELS']),

    hideList() {
      this.searchMarks = this.activeMark
      this.marksList = false
      this.changeSign = false
      this.placeholder = 'Марка'
      if (this.placeholder !== 'Марка') {
        this.searchMarks = ''
      }
    },
    chooseMark(mark, index) {
      this.activeMark = mark
      this.markToStore = index
      this.searchMarks = mark
      this.$emit('closeModelsAfterMarks', this.searchMarks)
      this.$emit('markInFilter', this.markToStore)
      this.fetchModels()
    },

    fetchModels() {
      const typeOfTransportToMark = {
        indexTypeOfTransport: this.typeOfTransportIndex,
        indexMark: this.markToStore
      }
      this.GET_MODELS(typeOfTransportToMark)
    },
    marksListClose() {
      this.searchMarks = ''
      this.activeMark = ''
      this.marksList = true
    },
    closeMarkListAfterChoose() {
      this.changeSign = true
      this.marksList = true
      if (this.activeMark !== '') {
        this.marksList = false
      }
    },
    changePlaceholder() {
      this.placeholder = 'Пошук...'
    }
  },

  mounted() {
    this.GET_MARKS(this.typeOfTransportIndex)
  },
  computed: {
    ...mapGetters([
      'marks'
    ]),
    filteredMarks() {
      if (!this.searchMarks) {
        return this.marks
      }
      let searchValue = this.searchMarks.toLowerCase()
      let filter = mark => mark.name.toLowerCase().includes(searchValue) ||
          mark.name.toLowerCase().includes(searchValue)
      if (this.searchMarks === this.activeMark) {
        return this.marks
      } else {
        return this.marks.filter(filter)
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.active-brand-glass {
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

.active-brand-arrow {
  &:after {
    content: '';
    background: none;
  }
}

.mark-close {
  visibility: visible !important;
  opacity: 1 !important;
}

.active-marks {
  display: block !important;
}

.filter {
  &__brand {
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
      opacity: 0;
      visibility: hidden;
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
            color: #ffffff!important;
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

#marks {
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

#marks::-webkit-search-cancel-button {
  display: none;
}
</style>
