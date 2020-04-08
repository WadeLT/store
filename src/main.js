import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
    // Vue.prototype.$store = store
    /* eslint-disable no-new */
export default new Vue({
    el: '#app',
    router, //相当于在Vue的原型prototype上挂载router：Vue.prototype.$router=router
    store, //Vue.prototype.$store=store
    render: h => h(App)
})