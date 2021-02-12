<template>
  <div class="my-3">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="auth.isSignIn.value">
      <h2>Welcome back, User</h2>
      <div class="row">
        <button class="btn btn-primary">Create new Recipe</button>
      </div>
    </div>
    <recipe-list
      :listTitle="'new'"
      :recipeList="[
        { id: 1, name: 'Omelete' },
        { id: 2, name: 'Oatmeal' },
        { id: 3, name: 'Braised Pork' }
      ]"
    />
    <recipe-list
      :listTitle="'popular'"
      :recipeList="[
        { id: 1, name: 'Omelete' },
        { id: 2, name: 'Oatmeal' },
        { id: 3, name: 'Braised Pork' }
      ]"
    />
    <div v-if="auth.isSignIn.value">
      <recipe-list
        :listTitle="'saved'"
        :recipeList="[
          { id: 1, name: 'Omelete' },
          { id: 2, name: 'Oatmeal' },
          { id: 3, name: 'Braised Pork' }
        ]"
      />
      <recipe-list
        :listTitle="'created'"
        :recipeList="[
          { id: 1, name: 'Omelete' },
          { id: 2, name: 'Oatmeal' },
          { id: 3, name: 'Braised Pork' }
        ]"
      />
    </div>
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
