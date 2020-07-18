<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="NavBackClick">
        <img src="~@assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item"
        :class="{active:index===currentIndex}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetallTab",
    components: {NavBar},
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex=index;
        this.$emit('titleClick',index)
      },
      NavBackClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.title{
  display: flex;
}
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    text-align: center;
  }
  .back img{
    vertical-align: middle;
  }
</style>
