import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import routes from './routes';
import './style.css';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false
Vue.use(VueRouter)

let router = new VueRouter({
    routes
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
