<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/" href="#">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Profile</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" @click="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "app-nav",
    data() {
        return {}
    },
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                })
        }
    },
}
</script>