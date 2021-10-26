<template>
  <div>
    <div class="menu__slogan">
      <div class="container">
        <ul class="list-wrapper">
          <li class="list">
            <router-link to="/checkedbypeople" href="#" @click="gotoContact">
              {{ RandomPhrases.phrase }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="line menu__slogan-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomPhrase",
  computed: {
    Phrases() {
      return this.$store.getters.Phrases
    },
    RandomPhrases() {
      return this.Phrases[Math.floor(Math.random() * this.Phrases.length)]
    }
  },
  methods: {
    gotoContact() {
      let route = this.$router.resolve({ path: "/checkedByPeople" });
      window.open(route.href);
    },
  }
}
</script>

<style lang="scss">
.list-wrapper {
}

.list {
  font-size: 1.8rem;
  color: #266799;
  line-height: 2rem;
  position: relative;
  top: -1rem;
}

.menu {
  &__slogan a {
    font-size: 1.75rem;
    color: #32679F;
    font-weight: 300;
    line-height: 3rem;

    &:hover {
      border-bottom: 1px solid #32679F;
    }

  }

  &__slogan {
    &-line {
      position: absolute;
      margin-top: -0.4rem !important;
    }
  }
}
</style>
