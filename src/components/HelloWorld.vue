<template>
  <div class="hello-container">
    <img alt="Vue logo" src="/@assets/logo.png" />
    <div class="content">
      <el-button @click="add" >el-buttons</el-button>
      <h3 class="count">{{ count }}</h3>
      <p>{{$store.state.msg}}</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
    })
    const add = () => {
      state.count ++
    };
    return {
      ...toRefs(state),
      add
    }
  }
}
</script>

<style lang="scss" scoped>
  .hello-container{
    text-align: center;
    img{
      display: inline-block;
    }
    .count{
      font-size: 24px;
      color: forestgreen;
    }
  }
</style>