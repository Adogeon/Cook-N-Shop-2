<template>
  <div class="home ">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="auth.isSignIn.value">
      Welcome back, User
    </div>
    <recipe-list
      :listTitle="'new'"
      :recipeList="[
        { id: 1, name: 'Omelete' },
        { id: 2, name: 'Oatmeal' },
        { id: 3, name: 'Braised Pork' }
      ]"
    />
  </div>
</template>

<script>
import RecipeListVue from "../components/RecipeList.vue";

export default {
  name: "Home",
  components: { "recipe-list": RecipeListVue },
  inject: ["auth"]
};
</script>

<style scoped></style>
