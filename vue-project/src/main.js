import Vue from 'vue'
import App from './App.vue'


import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
Vue.prototype.$axios = axios;

import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$qs = qs;



//引入路由
import router from "./routers/index"

//引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册element-UI
Vue.use(ElementUI);

// 引入vant的组件
import elementUI from './element-ui/index'
elementUI()


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
