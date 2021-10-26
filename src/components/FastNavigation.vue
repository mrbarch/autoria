<template>
  <div>
    <div class="categories">
      <div class="container">
        <ul class="categories__label">
          <router-link class="categories__label-li" to="/">AUTO.RIA.com</router-link>
          <li class="categories__label-li">Нові авто</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FastNavigation"
}
</script>

<style lang="scss">
.categories__label {
  display: flex;
  justify-content: space-between;
  width: 16.6rem;
  padding-top: 1rem;

  &-li {
    font-size: 1.3rem;
    line-height: 1.8rem;

    &:after {
      content: '\203a';
      color: #e0e3e4;
      font-size: 1.3rem;
      position: relative;
      display: inline-block;
      margin-left: .5rem;
      right: 0;
      top: -.1rem;
    }
  }

  li {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  :first-child {
    color: #256799 !important;
  }
}
</style>
