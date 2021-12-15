import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  //自定义事件总线


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
