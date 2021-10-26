<template>
  <div class="image">
    <div class="container">
      <router-link to="/checkedByPeople">
        <img src="./../assets/gif/text.gif" alt="text-gif" class="image__gif">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckedByPeopleGif"
}
</script>

<style lang="scss">
.image {
  padding-top: 1.5rem;

  &__gif {
    margin: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
