import Vue from "vue";
import Router from "vue-router";
import store from '@/store'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
Vue.use(Router);
const router = new Router({
    routes: [{
        path: "/",
        name: "home",
        component: Home,
        meta: {
            // requiresGuest: true
        }
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    }, {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }]
});
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!store.getters.isLoggedIn) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.requiresGuest)) {
        if(store.getters.isLoggedIn) {
            next({
                path: '/dashboard',
                query: {
                    //redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next() 
    }
})
export default router;