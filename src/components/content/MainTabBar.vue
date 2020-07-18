<template>
  <div class="bottom">

    <tab-bar>
      <tab-bar-item path="/home" activeColor="#d81e06">
        <img src="~@assets/img/TabBar/shouye.svg" alt="" slot="item-icon">
        <img src="~@assets/img/TabBar/shouye_tianchong.svg" alt="" slot="item-icon-tianchong">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <!--        activeColor="#d81e06" 写进tab-bar-item里可以改变选到时改变的颜色-->
      <tab-bar-item path="/category">
        <img src="~@assets/img/TabBar/fenlei.svg" alt="" slot="item-icon">
        <img src="~@assets/img/TabBar/fenlei_tianchong.svg" alt="" slot="item-icon-tianchong">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~@assets/img/TabBar/gouwuche.svg" alt="" slot="item-icon">
        <img src="~@assets/img/TabBar/gouwuche_tianchong.svg" alt="" slot="item-icon-tianchong">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~@assets/img/TabBar/wode.svg" alt="" slot="item-icon">
        <img src="~@assets/img/TabBar/wode_tianchong.svg" alt="" slot="item-icon-tianchong">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../common/tabber/TabBar";
  import TabBarItem from "../common/tabber/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>
.bottom{
  height: 49px;
}
</style>
