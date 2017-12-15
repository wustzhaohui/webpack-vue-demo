import Vue from 'vue'
import App from './app.vue'
import router from './routes.js'
import './assets/style/_style.less'
Vue.config.debug = true; //开启错误提示

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
})