import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'

import { Button,Icon,Input, message, Popover, Pagination, FormModel, Modal } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Pagination)
Vue.use(FormModel)
Vue.use(Modal)

Vue.prototype.$message = message;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
