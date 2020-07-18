import Vue from 'vue'
import Vuex from 'vuex'
//安装插件
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //mutations中的每个方法尽可能完成的事件比较单一
    //mutations唯一的目的就是修改state中的状态
    AddCounter(state,payload){
          payload.count++
    },
    addToCart(state,payload){
      payload.count=1
      payload.flag=false;
      state.cartList.push(payload);
    },
    // checkis(state,payload){
    //     payload.flag=!payload.flag
    // }

  },
  actions: {
    addCart(context,payload){
      return new Promise((resovle,reject)=>{
        console.log(payload);
        let product=context.state.cartList.find(function (item) {//find遍历数组  item数组里的元素
          return item.iid===payload.iid
        })

        if(product){
          // product.count+=1
          context.commit('AddCounter',product)
          resovle('当前的商品数量+1')
        }else {

          // context.state.cartList.push(payload)
          context.commit('addToCart',payload)
          resovle('购物车添加了新的商品')
        }
        console.log(context.state.cartList);
      })
    }
  },
  modules: {
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
