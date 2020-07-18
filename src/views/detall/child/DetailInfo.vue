<template>
  <div class="info" v-if="detailInfo">
    <div>
      {{detailInfo.desc}}
    </div>
    <div class="juzho">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div v-for="item in detailInfo.detailImage[0].list" >
      <img :src="item" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    data(){
      return{
        counter:0,
        imglength:0
      }
    },
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgload(){
        if(++this.counter == this.imglength)
        this.$emit('infoload');
      }
    },
    watch:{
      detailInfo(){
        this.imglength=this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .info{
    margin-top: 25px;
  }
  img{
    width: 100%;
  }
  .juzho{
    margin-top: 10px;
    text-align: center;
  }
</style>
