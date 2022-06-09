import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui' //引入elemetnui
import 'element-ui/lib/theme-chalk/index.css'

import router from './router/index.js' // 引入路由
import Store from './store/index' //引入vuex
import axios from 'axios'


Vue.use(ElementUI)

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'


Vue.config.productionTip = false

new Vue({
    Store,
    router,
    render: h => h(App),
}).$mount('#app')