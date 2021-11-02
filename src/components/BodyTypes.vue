<template>
  <div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "BodyTypes",
  data() {
    return {
      activeBodyTypes: 1
    }
  },
  methods: {
    ...mapActions(['GET_BODY_TYPES']),
  },
  computed: {
    ...mapGetters([
      'bodyTypes'
    ]),
  },
  mounted() {
    this.GET_BODY_TYPES()
  }
}
</script>

<style lang="scss">

</style>
