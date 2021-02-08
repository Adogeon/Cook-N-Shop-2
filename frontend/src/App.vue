<template>
  <navigation-bar />
  <router-view class="container" />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import global from "@/modules/global.js";

export default {
  components: {
    NavigationBar
  },
  provide: {
    auth: global.auth
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/hotel-wallpaper.png") repeat 0 0;
}
</style>
