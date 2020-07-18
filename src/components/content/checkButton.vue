<template>
<!--  <div class="check-button" :class="{check:isCheck}" @click="is">-->

    <div class="check-button" :class="{check:isCheck}">
  <img src="~@assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "checkButton",
    props:{
      isCheck: {
        type:Boolean,
        default:false
      }
    },
    // methods:{
    //   is(){
    //     this.$emit('is')
    //   }
    // }
  }
</script>

<style scoped>
  .check-button{
    /*background-color: red;*/
    background-color: #ccc;
    border-radius: 50%;
  }
  .check{
    background-color: red;
  }
</style>
