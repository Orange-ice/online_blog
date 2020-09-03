import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Icon,Input } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
