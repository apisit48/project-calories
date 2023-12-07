<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id ="layout">
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
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
  color: #2c3e50;
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