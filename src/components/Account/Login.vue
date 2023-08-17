<template>
    <div id="app" class="app">
        <div class="auth-container">
            <form @submit.prevent="login">
                <input v-model="email" placeholder="email">
                <input v-model="password" placeholder="password" type="password">
                <input type="submit" value="log in">
            </form>
        </div>  
    </div>
</template>
<!-- <div className="auth-container">
    <div className="auth-input-wrap">
        <input className="auth-input" type="email" id="e_mail" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
        <label className="auth-label" htmlFor="e_mail">Email </label>
      </div>
    <div className="auth-input-wrap">
    <input className="auth-input" type="password" id="p_assword" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
        <label className="auth-label" htmlFor="p_assword">Password </label>
      </div>
      <button type="submit"onClick={()=>handleSubmit()}>Login</button>
    </div>
  </div>
); -->

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