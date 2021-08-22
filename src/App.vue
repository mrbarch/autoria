<template>
  <div id="app">
    <Main/>
    <router-view/>
  </div>
</template>

<script>
import Main from "./pages/Main";

export default {
  name: 'App',
  components: {
    Main,
  },
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {

  },
  computed: {

  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Roboto-Regular;
  src: local('Roboto-Regular'),
  url("./assets/fonts/Roboto-Regular.ttf");
}

@font-face {
  font-family: Roboto-Bold;
  src: local('Roboto-Bold'),
  url("./assets/fonts/Roboto-Bold.ttf");
}

ul, li {
  list-style-type: none;
  text-decoration: none;
}

html,
body {
  font-family: Roboto-Regular, sans-serif;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-size: var(--fontSize);
}

a {
  text-decoration: none;
  color: black;
}

.container {
  width: 94rem;
  margin: auto;
}

button {
  cursor: pointer;
}
</style>
