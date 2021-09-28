import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 element-ui
import ElementUI from 'element-ui'
// 同时引入 element-ui 的样式主题文件
import 'element-ui/lib/theme-chalk/index.css'
// 注册为Vue的插件使用
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
