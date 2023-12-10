<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id ="layout">
  <header>
    <div class="wrapper">
      <nav>
          <span class="menuitem">
            <RouterLink to="/">Home</RouterLink>
          </span>
         <span class="menuitem">
          <span> | </span>
          <RouterLink to="/about">About</RouterLink>
         </span> 
         <span class="menuitem">
          <span> | </span>
          <RouterLink to="/register">Register</RouterLink>
         </span> 
         <span class="menuitem">
          <span> | </span>
          <RouterLink to="/login">Login</RouterLink>
         </span> 
         <span class="menuitem">
          <span> | </span>
          <RouterLink to="/calorie">Calculator</RouterLink>
         </span> 
         <span class="menuitem">
          <span> | </span>
          <RouterLink to="/workout">Workout</RouterLink>
         </span> 
         <span class="menuitem">
          <span> | </span>
          <RouterLink to="/guide">Guide</RouterLink>
         </span> 

        </nav>
    </div>
  </header>
</div>
  <RouterView />
</template>

<style scoped>
#layout {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smooting: antialiased;
  -moz-osx-font-smooting: grayscale;
  text-align: center;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: rgb(230, 124, 32);
}
nav a.router-link-exact-active {
  color: rgb(24, 216, 126);
}
</style>