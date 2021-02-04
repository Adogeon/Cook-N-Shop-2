<template>
  <navigation-bar />
  <router-view />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import global from "@/modules/global.js";
import { provide } from "vue";

export default {
  components: {
    NavigationBar
  },
  setup() {
    provide("global", global);
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
