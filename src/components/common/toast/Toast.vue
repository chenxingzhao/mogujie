<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      // message:{
      //   type:String,
      //   default:''
      // },
      // show:{
      //   type:Boolean,
      //   default: false
      // }
    },
    data(){
      return {
        message:'',
        show:false
      }
    },
    methods:{
      shows(message,item=2000){
        this.show=true;
        this.message=message;
        setTimeout(()=>{
          this.show=false;
          this.message=''
        },item)
      }
    }
  }
</script>

<style scoped>
  .toast{
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    padding:8px 10px;
    color: white;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.8);
  }
</style>
