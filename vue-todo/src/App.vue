<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  color: rgb(77, 77, 77);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: url('./assets/bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
