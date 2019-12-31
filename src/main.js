import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './modules/@fortawesome';

const mess = 'Okes';

new Vue({
        router,
        store,
        render: h => h(App)
    })
    .$mount("#app");