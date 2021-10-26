<template>
  <div style="position: relative;">
    <div
        class="filter__region filter__region-arrow"
        @click="closeRegionListAfterChoose"
        :class="{'active-region-glass': changeSign, 'active-region-arrow': !changeSign}"
        v-click-outside="hideList"
    >
      <input
          type="search"
          id="region"
          :placeholder="placeholder"
          v-model="searchRegions"
          autocomplete="off"
          :widthRegion="widthRegionInAdvanced"
          :style="{width: this.widthRegionInAdvanced}"
          @click="changePlaceholder"
      >
      <label
          for="region"
          class="filter__region-label">
      </label>
    </div>
    <ul
        class="filter__region-list"
        :class="regionsList === true ? 'active-region' : ''"
        :widthRegionList="widthRegionListInAdvanced"
        :style="{width: this.widthRegionListInAdvanced}">
      <li
          @click="chooseRegion(region.name, region.value)"
          :key="region.value"
          v-for="region in filteredRegion">
        <a
            href="#">{{ region.name }}
        </a>
      </li>
    </ul>
    <span class="filter__region-clean" :class="{'region-close': activeRegion !== '' || searchRegions !== ''}"
          @click="regionListClose">×</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  name: "Region",
  directives: {
    ClickOutside
  },
  data() {
    return {
      activeRegion: '',
      regionsList: false,
      widthRegion: '',
      widthRegionList: '',
      searchRegions: '',
      changeSign: false,
      placeholder: 'Регіон',
      regionToStore: '',
    }
  },

  props: ['widthRegionInAdvanced', 'widthRegionListInAdvanced'],
  methods: {
    chooseRegion(region, index) {
      this.activeRegion = region
      this.regionToStore = index
      this.searchRegions = region
      this.$emit('regionInFilter', this.regionToStore)
    },
    hideList() {
      this.searchRegions = this.activeRegion
      this.regionsList = false
      this.changeSign = false
      this.placeholder = 'Регіон'
      if (this.placeholder !== 'Регіон') {
        this.searchRegions = ''
      }
    },
    regionListClose() {
      this.searchRegions = ''
      this.activeRegion = ''
      this.regionsList = true
    },
    closeRegionListAfterChoose() {
      this.changeSign = true
      this.regionsList = true
      if (this.activeRegion !== '') {
        this.regionsList = false
      }
    },
    changePlaceholder() {
      this.placeholder = 'Пошук...'
    }
  },
  computed: {
    ...mapGetters([
      'regions',
    ]),
    filteredRegion() {
      if (!this.searchRegions) {
        return this.regions
      }
      let searchValue = this.searchRegions.toLowerCase()
      let filter = region => region.name.toLowerCase().includes(searchValue) ||
          region.name.toLowerCase().includes(searchValue)
      if (this.searchRegions === this.activeRegion) {
        return this.regions
      } else {
        return this.regions.filter(filter)
      }
    },
  }
}
</script>

<style lang="scss">

.active-region-glass {
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

.active-region-arrow {
  &:after {
    content: '';
    background: none;
  }
}


.region-close {
  visibility: visible !important;
  opacity: 1 !important;
}

.active-region {
  display: block !important;
}

.filter {
  &__region {
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
      width: 21.1rem;
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

#region {
  border: none;
  border-radius: .5rem;
  padding: 0 0 0 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #777777;
  outline: none;
  height: 3.2rem;
  width: 21.1rem;
}

#region::-webkit-search-cancel-button {
  display: none;
}
</style>
