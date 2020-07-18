<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!is">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-tianchong"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#d81e06'
      }
    },
    computed:{
      is(){
        //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.is ?   {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  img{
    margin-top: 5px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  div{
    font-size: 14px;
  }

</style>