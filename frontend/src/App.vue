<template>
  <navigation-bar />
  <router-view />
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar
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
