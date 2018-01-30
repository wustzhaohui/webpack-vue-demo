import Vue from 'vue'
import App from './app.vue'
import router from './routes.js'
import './assets/style/_style.less'
Vue.config.debug = true; //开启错误提示
let ele = document.createElement('div')
ele.id = 'appIndex'
document.body.appendChild(ele);

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
})