<template>
  <div>
    <div class="filter__block-type">
      <select
          class="filter__block-type transport-type-input"
          v-model="activeTypeOfTransportIndex"
          @change="chooseTypeOfTransport($event.target.selectedIndex)"
      >
        <option class="filter__block-type-list" value="0">
          Будь-який
        </option>
        <option class="filter__block-type-list"
                v-for="(transportType, value) in transportTypes"
                :value="value+1"
        >
          {{ transportType.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TransportType",
  data() {
    return {
      activeTypeOfTransportIndex: 1,
      transportTypesList: false,
      activeTypeOfTransportName: ''
    }
  },
  mounted() {
    this.GET_TRANSPORT_TYPES()
  },
  computed: {
    ...mapGetters([
      'transportTypes'
    ]),
  },
  methods: {
    ...mapActions(['GET_TRANSPORT_TYPES', 'GET_MARKS']),
    chooseTypeOfTransport(selectedIndex) {
      this.activeTypeOfTransportIndex = selectedIndex;
      this.$emit('activeTypeOfTransport', this.activeTypeOfTransportIndex)
      this.GET_MARKS(selectedIndex)
    },
  }
}
</script>

<style lang="scss">
.active-transport-type {
  display: block !important;
  width: 21rem !important;
}

.filter {
  &__block {
    &-type {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        border: .55rem solid transparent;
        border-top: .5rem solid #db5c4c;
        right: 1rem;
        top: 1.5rem;
      }

      &-list {
        background: #fff;
        border: 1px solid #3498db;
        width: 28.1rem !important;
        max-height: 19rem;
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
        z-index: 3;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
        padding: .5rem;
        color: #414042 !important;

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

    &-type option {
      background-color: #ffffff;
    }
  }
}

.transport-type-input {
  border: none;
  border-radius: .5rem;
  padding: 0 0 0 0.7rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: #ffffff;
  color: #414042 !important;
  outline: none;
  height: 3.2rem;
  width: 28.1rem;
}
</style>
