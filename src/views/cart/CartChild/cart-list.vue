<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item,index) in cartList"
        :key="index"
        :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Scroll from "../../../components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  export default {
    name: "cart-list",
    components: {CartListItem, Scroll},
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>

  .content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 89px;
  }
</style>
