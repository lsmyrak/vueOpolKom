<template>
 <div class="auth-container">
    <div id="app" class="app">
        <form @submit.prevent="register">
            <input v-model="firstName" placeholder="firstName">
            <input v-model="lastName" placeholder="lastName">
            <input v-model="email" placeholder="email">
            <input v-model="password" placeholder="password" type="password">
            <input v-model="confirmPassword" placeholder="Confirm Password" type="password">
            <input type="submit" value="log in">
        </form>
        </div>
    </div>
</template>

<script>
import AuthService from '@/Services/AuthService';

export default {
    name: "App",
    data() {
        return {
            firstName:"",
            lastName:"",
            email: "",
            password: "",
            confirmPassword:""
        };
    },
    methods: {
        async register() {
            const { firstName,lastName, email, password ,confirmPassword} = this;
            AuthService.register(firstName,lastName,email,password,confirmPassword);
        }
    }
};
</script>