import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Axios from 'axios';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import './modules/@fortawesome';

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
})
.$mount("#app");