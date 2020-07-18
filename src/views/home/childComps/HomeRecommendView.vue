<template>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
}
  .recommend-item{
    float: left;
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 12px;
    border-bottom: 8px solid #eeeeee;
  }
  img{
    width: 80%;
    margin-bottom: 8px;
  }

</style>
