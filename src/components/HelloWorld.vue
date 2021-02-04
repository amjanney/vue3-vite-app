<template>
  <div @click="add" class="count">
    <el-button>el-buttons</el-button>
    {{ count }}
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
  .count{
    font-size: 24px;
    color: forestgreen;
  }
</style>