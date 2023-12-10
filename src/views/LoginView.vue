<script setup>

import {ref} from 'vue'
import { auth } from '@/js/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import router from '@/router/index.js'

const email = ref(null)
const password = ref(null)

function login () {
    console.log("Login : " + email.value + " : " + password.value);

signInWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            console.log(userCredential)
            router.push('/books')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Code: " + errorCode)
            console.log("Error Message: " + errorMessage)
        });

}
function resetForm () {
    console.log("Reset Form");
    email.value = null;
    password.value = null;
}
</script>

<template>
  <div class="login">
    <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-item">
                <label>E-mail </label>
                <input v-model="email" id="email" type="text" />
            </div>
            <div class="form-item">
                <label>Password </label>
                <input v-model="password" id="password" type="password" />
            </div>
            <div class="form-item">
                <button class="btn1" @click.prevent="resetForm">Reset </button>
                <button class="btn2" type="submit">Login </button>
            </div>           
        </form>
</div>
</template>


<style scoped>
.login {
  margin-top: 12.5%; /* doesnt center properly*/
  font-family: 'Afacad', sans-serif; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8em;
}
.form-item {
  margin-bottom: 1rem;
  align-items: normal;
  text-align: center;
}
.form-item input {
  margin-left: 5rem;
}
.form-item label {
  position: absolute;
}
.btn1 {
  margin-right: 10px;
}
.btn2 {
  margin-left: 10px;
}
</style>