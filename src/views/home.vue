<template>
  <div>
    <router-link to="/home/1">
      <el-button type="text">detail1</el-button>
    </router-link>
    <span class="snipet">|</span>
    <router-link to="/home/2">
      <el-button type="text">detail2</el-button>
    </router-link>
    <router-view></router-view>
    <!-- helloWord可以写一下vue3.0的最新语法啥的 -->
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
  .snipet{
    margin: 0 10px;
  }
</style>