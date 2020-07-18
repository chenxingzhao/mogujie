<template>
    <div v-if="goods">
      <p class="title">{{goods.title}}</p>
      <div class="jiage">
        <span class="new">{{goods.newPrice}}</span>
        <s class="old" v-if="goods.oldPrice">{{goods.oldPrice}}</s>
        <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
  goods:{
    type:Object,
      default() {
      return {}
       }
        }
    }
  }
</script>

<style scoped>
  div{
    padding: 0 5px;
  }
.title{
  font-weight: 700;
  padding:10px 5px;
}
  .new{
    font-size: 16px;
    font-weight: 700;
    color: var(--color-high-text);
  }
  .old{
    margin-left: 5px;
    font-size: 12px;
  }
  .discount{
    display: inline-block;
    padding: 5px;
    background-color: var(--color-high-text);
    color: white;
    margin-left: 5px;
    font-size: 10px;
    border-radius:10px;
    position: relative;
    top: -5px;
  }
  .info-other {
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
