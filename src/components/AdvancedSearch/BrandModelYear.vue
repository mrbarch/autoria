<template>
  <div>
    <div class="blocks" v-model="oneBlock">
      <div class="block">
        <Mark
            :widthMarksInAdvanced="widthMarks"
            :widthMarksListInAdvanced="widthMarksList"
            :typeOfTransportIndex="activeTypeOfTransportIndex"
        />
      </div>
      <div class="block">
        <Models
            :widthModelsInAdvanced="widthModels"
            :widthModelsListInAdvanced="widthModelsList"
        />
      </div>

      <YearRange/>
    </div>
    <a href="#" class="blocks__more" @click="addBlock">
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3V16M17 9.5H4" stroke="#256799"></path>
      </svg>
      <p>Ще марка</p>
    </a>
  </div>
</template>

<script>
import Mark from "../FilterBlock/Mark";
import Models from "../FilterBlock/Models";
import YearRange from "../FilterBlock/YearRange";

export default {
  name: "BrandModelYear",
  components: {
    Mark,
    Models,
    YearRange
  },
  data() {
    return {
      widthMarks: '22rem',
      widthMarksList: '22rem',
      widthModels: '21.3rem',
      widthModelsList: '22rem',
      placeholder: 'Оберіть марку',
      oneBlock: '',
      TypeOfTransportIndex: ''
    }
  },
  props: ['activeTypeOfTransportIndex'],
  methods: {
    addBlock() {

    },
  }
}
</script>

<style scoped lang="scss">
.blocks {
  display: flex;
  justify-content: space-between;
  width: 70rem;
  &__more {
    display: flex;
    align-items: center;
    margin-top: 1.9rem;
    svg {
      overflow: hidden;
    }
    p {
      width: 7.5rem;
      font-size: 1.6rem;
      line-height: 1.92rem;
      color: #256799;
      padding-left: .5rem;
      border-bottom: 1px dotted #256799;
    }
  }
}

.block {
  position: relative;
  border: 1px solid #e0e3e4;
  border-radius: 3px;
  height: 3.2rem;
  outline: none;

  &:before {
    content: "";
    position: absolute;
    border: .55rem solid transparent;
    border-top: .5rem solid #B6B6B6;
    left: 19.8rem;
    top: 1.3rem;
  }
}
</style>
