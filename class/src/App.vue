<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <router-link to="/first">first</router-link>,
      <router-link to="/second">second</router-link>,
      <router-link to="/second/newPd">second</router-link>,
      <router-link to="/third">third</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>


export default{
  name:'App',
  component:{

  }
}
</script>



<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
