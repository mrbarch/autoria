<template>
  <div>
    <div class="advanced-region__block">
      <input
          type="text"
          class="marks-input"
          id="marks"
          placeholder="Я шукаю місто ..."
          v-model="searchMarks"
          autocomplete="off"
          :width="widthMarks"
          :style="{width: this.widthMarks}"
      >
      <label for="marks"></label>
      <ul
          class="filter__block-brand-list"
          :class="marksList === true ? 'active-marks' : ''"
      >
        <li
            @click="chooseMark(mark.name, index + 1)"
            :key="mark.index"
            v-for="(mark, index) in filteredMarks"
        ><a href="#">{{ mark.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvancedSearchRegion"
}
</script>

<style scoped lang="scss">
.advanced-region {
  &__block{

  }
}
</style>
