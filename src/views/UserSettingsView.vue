<script setup>
import {ref, onMounted} from 'vue'
import { signOut } from 'firebase/auth'
import { auth } from '@/js/firebase'
import router from '@/router/index.js'

const currentUser = ref(null)

onMounted(() => {
  currentUser.value = auth.currentUser
  if (currentUser.value != null) {
    console.log("Current user is: " + currentUser.value.email)
    console.log(auth.currentUser)
  }
  
})

function userSignOut() {
  signOut(auth).then(() => {
    console.log("Signed Out")
    router.push('/')
  }).catch((error) => {
    console.log("Cannot Sign Out !!!")
    console.log(error)
  });
}
</script>

<template>
  <div class="usersettings">
    <h1>User Settings</h1>
    <div v-if="currentUser !== null">
      <p>Current user: {{ currentUser.email }}</p>
      <button @click.prevent="userSignOut">Sign Out</button>
    </div>
    
</div>
</template>
<style scoped>
*{
  font-family: 'Afacad', sans-serif;
}
.usersettings{
  background-color: #212122;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center; 
  max-width: 800px;
  margin: 7% auto;
  padding: 200px;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  color: whitesmoke;
  font-size: 1.12em;
}
</style>