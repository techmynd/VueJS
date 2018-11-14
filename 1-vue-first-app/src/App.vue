<template>
  <div id="app">
    
    <!-- 
    router implemented so we wont need default component here so its commented
    <Skills /> 
    -->
    
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />

  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {
  text-align: center;
}
nav a {
  background-color: #eee;
  padding: 4px 10px;
  display: inline-block;
  margin: 10px;
  font-weight: bold;
}
</style>
