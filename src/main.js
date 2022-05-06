import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

import '@/styles/index.scss' // 全局css

/* 引入element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* 引入echarts */
const echarts = require('echarts');
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
