<template>
    <div id="app">
        <app-nav/>
        <router-view />
    </div>
</template>
<script>
import Nav from '@/components/Nav';
export default {
    name: "app",
    components: {
        'app-nav': Nav
    },
    data() {
        return {}
    },
    created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
            console.log(err)
            return new Promise(function (resolve, reject) {
                if(err.status === 401 && err.config && !err.config.__isRetryRequest) {
                    this.$store.dispatch('auth/logout')
                }
                throw err;
            });
        });
    }

}
</script>