import {debounce} from "./utils";
import BackTop from "@components/content/backTop/BackTop";
export const  itemListMixin={
  data(){
    return {
      ItemImgList:null
    }
  },
  mounted(){
    let refresh=debounce(this.$refs.scroll.refresh)
    //3.监听item图片加载完成
    this.ItemImgList = () => {
        // this.$refs.scroll.refresh();
        refresh();
      },
      console.log('mixin');
    this.$bus.$on('itemImageLoad',this.ItemImgList)
  }
}
 export const conscroll={
  components:{
   BackTop
  },data() {
    return {
      flag:false
    }
  },
   methods:{
     BackClick(){
       console.log('回到顶部');
       this.$refs.scroll.scrollTo(0,0,2000)
     },
     listenShowBackTop(position){//方法混入封装 不会合并 通过this.listenShowBackTop(position)使用
       this.flag= -position.y > 1000
     }
 }
}
