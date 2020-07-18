import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false
Vue.use(toast);
Vue.prototype.$bus= new Vue();
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.png')
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
