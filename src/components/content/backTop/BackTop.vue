<template>
  <div class="back-top">
    <img src="~@assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
    .back-top{
      position: fixed;
      bottom: 60px;
      right: 10px;
      z-index: 999;
    }
    img{
      width: 44px;
    }
</style>
