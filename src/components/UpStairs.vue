<template>
  <div>
    <div class="upstairs" @click="toTop" v-show="scY > 300">
      <span>наверх</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpStairs",
  data() {
    return {
      showButton: true,
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  }
}
</script>

<style lang="scss">

.upstairs {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background: #e0e3e4;
  padding: 3rem 2.5rem .5rem;
  z-index: 99;
  cursor: pointer;
  -webkit-transition: all linear .2s;
  -o-transition: all linear .2s;
  transition: all linear .2s;
  border-radius: .5rem;

  &:hover {
    background: #eaeff0;

    &:before,
    &:after {
      background: #7a7a7a;
    }
  }

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 1rem;
    background: #fff;
    left: 50%;
    width: .6rem;
    height: 2.4rem;
    margin-left: -1rem;
    -webkit-transform: rotate(
            45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(
            45deg);
    -webkit-transition: background-color .1s linear;
    -o-transition: background-color .1s linear;
    transition: background-color .1s linear;
  }

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 1rem;
    background: #fff;
    left: 63%;
    width: .6rem;
    height: 2.4rem;
    margin-left: -1rem;
    -webkit-transform: rotate(
            45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(
            135deg);
    -webkit-transition: background-color .1s linear;
    -o-transition: background-color .1s linear;
    transition: background-color .1s linear;
  }

  span {
    color: #7a7a7a;
    font-size: 1.5rem;
  }
}
</style>
