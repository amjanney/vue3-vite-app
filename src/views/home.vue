<template>
  <div>
    <img alt="Vue logo" src="/@assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from '/@comps/HelloWorld.vue'
import { reactive, toRefs } from 'vue'

export default {
  components: {
    HelloWorld,
  },
  setup () {
    const state = reactive({
      count: 0,
    })
  
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>