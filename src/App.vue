<template>
  <body>
    <div id="app">
      <router-link style="color: white" to="/">Search</router-link> ||
      <router-link style="color: white" to="Playlist">Playlist</router-link>
      <router-view/>
    </div>
  </body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/41294/hero.jpg) no-repeat center center fixed;
  background-size: cover;
}

</style>
