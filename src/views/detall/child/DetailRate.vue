<template>
  <div>

    <div class="box" v-if="rate">
      <div class="header">
        <span>用户评价</span>
        <span class="header-more">更多({{rate.cRate}})</span>
        <img src="" alt="">
      </div>
      <div class="pj" v-if="rate.cRate!=0">
        <div class="yh" v-for="item in rate.list">
          <img class="logoimg" :src="item.user.avatar" alt="">
          <span>{{item.user.uname}}</span>
          <p>{{item.content}}</p>
          <div class="yhimg">
            <img class="plimg" v-for="itemimg in item.images" :src="itemimg" alt="">
          </div>
          <div>
            <span class="date">{{item.created | showData}}</span>
            <span>{{item.style}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>暂无评论</p>
    </div>
  </div>

</template>

<script>
  import {formatDate} from '@/common/utils.js'
  export default {
    name: "DetailRate",
    props:{
    rate:{
      type:Object,
      default(){
        return {}
      }
    }
    },
    filters:{
      showData(value){
        //1、将时间戳转成data对象
        const data = new Date(value * 1000);
        //2、格式化data
        return formatDate(data, "yyyy-MM-dd hh:mm");
      }
    }
  }
</script>

<style scoped>
  .box{
    border-top:5px solid #f5f5f5;

    border-bottom:5px solid #f5f5f5;
    padding:10px;
  }
  .header{
    height: 40px;
    line-height: 30px;
    border-bottom: 2px solid #f5f5f5;
  }
  .header-more{
  float: right;
}
  .yh{
    padding:10px 10px;
  }
  .logoimg{
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 15px;
  }
  .yh p{
    margin: 10px 0;
  }
  .yh div span{
    font-size: 14px;
    color: var(--color-text);
    margin-right: 10px;
  }
  .plimg{
    width: 30%;
    height: 100%;
    margin-right: 5px;
  }
</style>
