<template>
  <navigation />
  <navigation-bar />
  <router-view />
</template>

<script>
import Navigation from "../src/components/Navigation.vue";
import NavigationBar from "../src/components/NavigationBar.vue";

export default {
  components: {
    Navigation, NavigationBar
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
}
</style>
