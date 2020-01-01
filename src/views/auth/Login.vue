<template>
    <div class="login">
        <div class="card mt-4">
            <div class="card-body">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input required v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input required v-model="password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "asa@asd",
            password: "aas"
        }
    },
    methods: {
        login: function () {
            let email = this.email
            let password = this.password
            this.$store.dispatch('auth/login', {
                    email,
                    password
                })
                .then(() => {
                    this.$router.push('/dashboard')
                })
                .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>
    .login {
        width: 400px;
        max-width: 100%;
        margin: auto auto;
    }
</style>