import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import global_ from '../config/global'

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.prototype.GLOBAL=global_
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router
})
