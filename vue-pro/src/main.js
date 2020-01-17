import Vue from 'vue'
import App from './App.vue'
import router from './router'  
import store from './store'

//引入stylesheets/main.scss文件
import "./stylesheets/main.scss"
//引入rem.js文件
import "./modules/rem"
Vue.config.productionTip = false
//引入swiper的样式文件
import "swiper/css/swiper.min.css"
import "./modules/directive"
import {
  Lazyload,
  InfiniteScroll,
  Header,
  Button,
  Tabbar, 
  TabItem,
  Cell
} from "mint-ui"
import { Calendar,Cell as MyCell } from 'vant';
import axios from "axios"
Vue.prototype.$http = axios  //所有的Vue的组件的原型对象上面都可以通过$http这个属性访问到axios

Vue.use(Lazyload)
Vue.use(InfiniteScroll)
Vue.use(Calendar);
Vue.use(MyCell);
Vue.component("mt-header",Header)
Vue.component("mt-button",Button)
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);


new Vue({
  router, //为了让组件可以访问this.$route/this.$router相关的api
  store, //为了让组件可以访问this.$store的api
  render: h => h(App)
}).$mount('#app')
