<template>
  <div class="cart">
    <nav-bar class="nav-bar">
<!--      <div slot="center">购物车({{cartLength}})</div>-->
            <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <cart-list class="cart-list"></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {mapGetters} from  'vuex';
  import CartList from "./CartChild/cart-list";
  import CartBottomBar from "./CartChild/CartBottomBar";
  // 1.把Vuex里的getters当成计算属性
  export default {
    name: "Cart",
    components: {CartBottomBar, CartList, NavBar},
    computed:{
      //2.Vuex 两种写法 length映射vuex里的cartLength
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length:'cartLength'
      })
    }

  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: #ffffff;
  }

</style>
