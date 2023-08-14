<template>
    <div id="app" class="app">
        <form @submit.prevent="login">
            <input v-model="email" placeholder="email">
            <input v-model="password" placeholder="password" type="password">
            <input type="submit" value="log in">
        </form>
    </div>
</template>

<script>
import AuthService from '@/Services/AuthService';
export default {
    name: "App",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async login() {
            const { email, password } = this;
            AuthService.login(email,password)
        }
    }
};
</script>