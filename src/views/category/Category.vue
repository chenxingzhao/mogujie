<template>
  <div>
    <h2>分类</h2>
    <back-top @click.native="BackClick" v-show="flag"></back-top>
  </div>
</template>

<script>
  import {conscroll} from "@/common/mixin";
  export default {
    name: "Category",
    // 混入mixin 混入封装
    mixins:[conscroll]
  }
</script>

<style scoped>

</style>
