<template>
    <div class="register">
        <div class="card mt-4">
            <div class="card-body">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input required autofocus type="text" v-model="name" class="form-control" id="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input required v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input required v-model="password" type="password" class="form-control" id="password">
                    </div>
                    <div class="form-group">
                        <label for="password-confirmation">Confirm Password</label>
                        <input required v-model="password_confirmation" type="password" class="form-control" id="password-confirmation">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            is_admin: null
        }
    },
    methods: {
        register: function () {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                is_admin: this.is_admin
            }
            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/dashboard'))
                .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>
    .register {
        width: 400px;
        max-width: 100%;
        margin: auto auto;
    }
</style>