<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" ref="tabcontrol1" v-show="isTabFiexd">
    </tab-control>
    <scroll  class="content" ref="scroll"
             @scroll="contentscroll"
             :probe-type="3"
              :pull-up-load="true"
              @pullingUp="loadMore">
      <swiper>
        <swiper-item v-for="item in banner" >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="SwiperimageLoad">
          </a>
        </swiper-item>
      </swiper>
      <home-recommend-view :recommends="recommend"></home-recommend-view>
      <feature></feature>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabcontrol2">
      </tab-control>
      <goods-list :goods="goods[goodslist].list" class="goods clear-fix">
      </goods-list>
    </scroll>
      <back-top @click.native="BackClick" v-show="flag"></back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import
  {getHomemultiData,getHomeGoods}
  from "../../network/home";
  import Swiper from "../../components/common/swiper/Swiper";
  import SwiperItem from "../../components/common/swiper/SwiperItem";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import Feature from "./childComps/Feature";
  import TabControl from "../../components/content/TabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import GoodsListItem from "../../components/content/goods/GoodsListItem";
  import Scroll from "../../components/common/scroll/Scroll";
  import {itemListMixin,conscroll} from "@/common/mixin";
  import {debounce} from "../../common/utils";

  export default {
    name: "Home",
    components:{
      // BackTop,
      Scroll,
      GoodsListItem,
      GoodsList,
      TabControl,
      Feature,
      HomeRecommendView,
      SwiperItem,
      Swiper,
      NavBar
    },
    data(){
      return{
        banner:[],
        recommend:[],
        titles: ['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodslist:'pop',
        tabOffsetTop:0,
        isTabFiexd:false,
        saveY:0,
        // homeItem:null
      }
    },
    //生命周期函数
    created() {
      //1.请求多个数据
      getHomemultiData().then(res=>{//异步操作
        this.banner=res.data.data.banner.list;
        this.recommend=res.data.data.recommend.list;
      })
      //2.请求商品数据
      this.getHomeGoodsPush('pop');
      this.getHomeGoodsPush('sell');
      this.getHomeGoodsPush('new');

    },
    //回来时使用
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll && this.$refs.scroll.scrollTo(0,this.saveY,0);
    },
    //离开时使用
    deactivated() {
      this.saveY=this.$refs.scroll.scroll.y;
      //2.取消全局事件的监听
      this.$bus.$off('itemImgLoad',this.ItemImgList)
    },
    mounted() {

      // let refresh=debounce(this.$refs.scroll.refresh)
      // //3.监听item图片加载完成
      // this.homeItem=()=>{
      //   // this.$refs.scroll.refresh();
      //   refresh();
      // },
      //   this.$bus.$on('itemImageLoad',this.homeItem)

      //获取tabControl的offsetTop
      //所有的组件都有一个属性 $el：用于获取组件中的元素
    },
    methods:{
      /**
       * 事件监听相关的方法
       */
      //防抖操作

       tabClick(index){
         switch (index) {
            case 0:
             this.goodslist = 'pop'
             break
           case 1:
             this.goodslist = 'new'
             break
           case 2:
             this.goodslist = 'sell'
             break
         }
         this.$refs.tabcontrol1.currentIndex=index;
        this.$refs.tabcontrol2.currentIndex=index;

      },
      // HomeBackClick(){
      //   console.log('回到顶部');
      //   this.$refs.scroll.scrollTo(0,0,2000)
      // },

      contentscroll(position){
         //1. 判断BackTop是否显示
        this.listenShowBackTop(position);
        //2.决定tabControl是否吸顶position：fixed
        (-position.y) > this.tabOffsetTop?  this.isTabFiexd=true:this.isTabFiexd=false;
      },
      //Scroll射出调用
      loadMore(){
         this.getHomeGoodsPush(this.goodslist);
      },
      //监听轮播图的图片是否加载完毕
      SwiperimageLoad(){
        this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
      },

      /**
       * 网络请求相关的方法
       * @param type
       */
      //上拉加载更多
      getHomeGoodsPush(type){
        this.goods[type].page++;
        const page=this.goods[type].page;
        getHomeGoods(type,page).then(res=>{
          // console.log(res);
          for (let n of res.data.data.list){
            this.goods[type].list.push(n)
          }
          // console.log(this.goods);
          // this.goods[type].list.push(...res.data.list)
        })
      }
    },
    // 混入mixin
    mixins:[itemListMixin,conscroll]
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    width: 100vw;
  }
  .home-nav{
    background-color: var(--color-high-text)!important;
    color: white;
  }

  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .content{
    /*margin-top: 44px;*/
    /*height: calc(100% - 98px);*/
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  /*.fixed{*/
  /*  position: fixed;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/
  /*.tab-control{*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*}*/
</style>
