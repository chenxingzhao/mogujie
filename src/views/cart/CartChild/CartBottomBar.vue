<template>
  <div class="bottom-bar">
    <div class="check" @click="checkClick">
      <check-button class="button" :is-check="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <span class="heji">合计：{{totalPrice}}￥</span>
    <div class="right">去结算({{checkLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton";
  export default {
    name: "CartBottomBar",
    components: {CheckButton},
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item => item.flag).reduce((preValue,item)=>preValue+item.price * item.count,0).toFixed(2)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.flag).reduce((preValue,item)=>preValue+ item.count,0)
      },
      isSelectAll(){
        if(!this.$store.state.cartList.length) return false
        return !(this.$store.state.cartList.filter(item=> !item.flag).length)
      }
    },
    methods:{
      checkClick(){
          if(this.isSelectAll){
            this.$store.state.cartList.forEach(item=>item.flag=false);
          }else{
            this.$store.state.cartList.forEach(item=>item.flag=true);
          }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 45px;
    position: absolute;
    bottom: 45px;
    background-color: #726c6c;
    color: white;
    font-weight: 700;

  }
  .check{
    display: inline-block;
    /*padding-top:15px ;*/
  }
  .button{

    vertical-align: top;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
  .right{
    width: 100px;
    text-align: center;
    background-color:tomato ;
    line-height: 45px;

  }
  .heji{
    line-height: 45px;
    margin-left: 20px;
  }
</style>
