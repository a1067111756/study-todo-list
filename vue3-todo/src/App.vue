<template>
  <Home></Home>
</template>

<script>
  import Home from '@/views/Home.vue'
  export default {
    components: { Home }
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    background: url('./assets/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
