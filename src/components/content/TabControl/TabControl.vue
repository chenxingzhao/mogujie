<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" @click="itemClick(index)">
      <span :class="{is:currentIndex===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default() {
          return [];
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    font-size: 16px;
    background-color: #ffffff;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tab-control-item span{
    padding: 5px 10px;
  }
  .is{
    border-bottom:3px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>
