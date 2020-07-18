<template>
<div id="detall">

    <detall-tab class="detail-nav" @titleClick="titleClick" ref="tabnav"></detall-tab>
  <scroll class="content" @scroll="contentscroll" ref="scroll" :probe-type="3">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop :shop="shop"></detail-shop>
    <detail-info :detail-info="detailInfo" @infoload="infoimageInfo()"></detail-info>
    <detail-params ref="params" :param-info="paraminfo"></detail-params>
    <detail-rate ref="rate" :rate="rate"></detail-rate>
    <goods-list ref="goods" :goods="recommends" class="clear-fix"></goods-list>
  </scroll>
  <back-top @click.native="BackClick" v-show="flag"></back-top>
  <detail-bottom-bar @openShoppingCart="addCart"></detail-bottom-bar>

</div>
</template>

<script>

  import DetallTab from "./child/DetallTab";
  import {getDatall,getRecommend,Goods,Shop,GoodsParam} from "../../network/detall";
  import DetailSwiper from "./child/DetailSwiper";
  import DetailBaseInfo from "./child/DetailBaseInfo";
  import DetailShop from "./child/DetailShop";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailInfo from "./child/DetailInfo";
  import {debounce} from "../../common/utils";
  // import BackTop from "../../components/content/backTop/BackTop";
  import DetailParams from "./child/DetailParams";
  import DetailRate from "./child/DetailRate";
  import GoodsList from "../../components/content/goods/GoodsList";
  import {itemListMixin,conscroll} from "@/common/mixin";
  import DetailBottomBar from "./child/DetailBottomBar";
  import Toast from "../../components/common/toast/Toast";

  export default {
    name: "Detall",
    components: {
      Toast,
      DetailBottomBar,
      GoodsList,
      DetailRate,
      DetailParams,  DetailInfo, Scroll, DetailShop, DetailBaseInfo, DetailSwiper, DetallTab},
    data(){
      return{
        iid:null,
        topImages:[],
        goods:null,
        shop:null,
        detailInfo:null,

        paraminfo:{},
        rate:null,
        recommends: [],
        themeTopYs:[],
        getthemeTopYs:null,
        topindex:0
        // DetailItem:null
      }
    },
    created() {
      //1.保存传入的iid
      this.iid=this.$route.params.iid;
      // console.log(this.iid);

      //2.根据iid请求数据详情
      getDatall(this.iid).then(res=>{
        console.log(res);
        // 1.获取顶部的轮播图片
        const data=res.data.result
        this.topImages=res.data.result.itemInfo.topImages;
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop=new Shop(data.shopInfo)
        this.detailInfo=data.detailInfo;
        this.paraminfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //评论
        if(data.rate.cRate !== 0){
          this.rate=data.rate
        }


      })
      //3.请求推荐数据
      getRecommend().then(res=>{
        this.recommends=res.data.data.list
      })
      this.getthemeTopYs=debounce(()=>{
          this.themeTopYs=[];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.rate.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.goods.$el.offsetTop-44);
          console.log('获取高度');
      })
    },
    methods:{
      addCart(){
        // 1.获取购物车需要展示的信息
        const product={};
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.lowNowPrice;
        product.iid = this.iid;
        console.log(product);

        //2.将商品添加到购物车
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res=>{
          console.log(res);
          this.$toast.shows(res);
        })

      },
      infoimageInfo(){
        console.log('img');
        this.$refs.scroll.refresh();
        this.getthemeTopYs()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],200);
      },
      contentscroll(position){
        this.listenShowBackTop(position);
        // 1.获取Y值
        const  positionY= -position.y
        // 和主题中的值进行对比
        let length=this.themeTopYs.length
        for (let i=0;i<length;i++){
          if(this.topindex !== i && ((i<length-1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1] ) || (i == length-1 && positionY > this.themeTopYs[i]))){
            this.topindex=i;
            console.log(this.topindex);
            this.$refs.tabnav.currentIndex=this.topindex;
          }
        }
      }

    },
    mounted() {
      // let refresh=debounce(this.$refs.scroll.refresh)
      // //3.监听item图片加载完成
      // this.DetailItem=()=>{
      //   // this.$refs.scroll.refresh();
      //   refresh();
      // },
      // this.$bus.$on('itemImgLoad',this.DetailItem)
    },
    destroyed() {
      console.log('detailqx');
      this.$bus.$off('itemImgLoad',this.ItemImgList)
    },
    // 混入mixin
    mixins:[itemListMixin,conscroll]

  }
</script>

<style scoped>
#detall {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav{
  position: relative;
  z-index: 9;
  background-color: white;
}
  .content{
    height: calc(100% - 93px);
  }
</style>
