<template>
  <div class="listitem" @click="tiemClick">
      <div class="juzho">
        <img v-lazy="showImage" alt="" @load="imageLoad">
      </div>
      <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">☆{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return  this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      tiemClick(){
        this.$router.push('/detall/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>

  .listitem{
    padding:0 1%;
    width: 50%;
    float: left;
    /*margin: 5px;*/
    text-align: center;
  }
  .listitem div p{
    /* 这个单词的意思是如果文字显示不开自动换行 */
    /* white-space: normal; */
    /* 1.这个单词的意思是如果文字显示不开也必须强制一行内显示 */
    white-space: nowrap;
    /* 2.溢出的部分隐藏起来 */
    overflow: hidden;
    /* 3. 文字溢出的时候用省略号来显示 */
    text-overflow: ellipsis;
  }
  .juzho{
    width: 100%;
    height:282px;
    display: table-cell;
    vertical-align: middle;
  }
  img{
    border-radius: 10px;
    width: 100%;
  }
  .price{
    color: #ff8198;
    margin-right: 10px;
  }
  span{
    font-size: 13px;
  }
</style>
