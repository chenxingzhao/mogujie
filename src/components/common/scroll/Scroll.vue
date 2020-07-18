<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType: {
        type:Number,
        default:1
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      //创建BScroll
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad
      })
        //监听滚动的位置
        //严谨操作
        if(this.probeType===2||this.probeType===3){
          this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
          })
        }
        //监听上拉加载事件
        //监听scroll滚动到底部
      if (this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp');
          //添加后才能多次刷新 否则只能刷一次
          this.scroll.finishPullUp()
        })
      }
    },
    methods:{
      refresh(){
       this.scroll && this.scroll.refresh();
        // console.log('la');
      },
      scrollTo(x,y,time){
        this.scroll && this.scroll.scrollTo(x,y,time);
      }
    }
  }
</script>

<style scoped>

</style>
