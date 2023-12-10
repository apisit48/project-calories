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
    <header>
      <h1>Project Calorie</h1>
    </header>

        <div class="login">
    <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="settings">
                <label>E-mail </label>
                <input v-model="email" id="email" type="text" placeholder="Enter mail here"/>

                <label>Password </label>
                <input v-model="password" id="password" type="password" placeholder="Enter password here" />
            </div>
            <div class="form-item">
                <button class="btn1" @click.prevent="resetForm">Reset </button>
                <button class="btn2" type="submit">Login </button>
            </div>           
        </form>
</div>
<footer>
      <h3>&copy; 2023 Project Calories. All rights reserved.</h3>
    </footer>
</template>


<style scoped>
*{
  font-family: 'Afacad', sans-serif;
}
.login {
  margin-top: 7%; /* doesnt center properly most margin are manully adjust becoz center doesnt work and leaves a whitespace*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8em;
  padding-top: 40px;
  padding-bottom: 120px;
  margin-bottom: 7%;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  border-radius: 7px/7px;
  font-size: 18px;
  color: whitesmoke;
  background-color: #212121;
}
.form-item {
  margin-bottom: 1rem;
  align-items: normal;
  text-align: center;
}
div.settings {
    display:grid;
    grid-template-columns: max-content max-content;
    grid-gap:5px;
    margin-bottom: 25px;
}
div.settings label       { text-align:right; }
div.settings label:after { content: ":"; }
.btn1 {
  margin-right: 10px;
}
.btn2 {
  margin-left: 10px;
}

header {
font-family: 'Afacad', sans-serif; 
  background-color: #212121;
  color: #ffffff;
  text-align: center;
  padding: 1em 0;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #212121;
  color: whitesmoke;
  height: 150px;
  width: 99%;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  font-size: 18px;
}
</style>