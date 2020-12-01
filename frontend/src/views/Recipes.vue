<template>
  <div class="recipes-page">
    <h1>This is the list of recipes</h1>
    <ul id="recipe-list">
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="`/recipe/${recipe.id}`">
          <recipe-card v-bind = "recipe"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {getAllRecipes} from "../utils/query";
import RecipeCard from '../components/RecipeCard.vue';

export default {
  components: { RecipeCard },
  name:"Recipes",
  data() {
    return {
      loading: false,
      recipes: null,
      error: null
    }
  },
  created() {
    //fetch the recipes when the view is screated
    this.fetchRecipe()
  },
  methods: {
    async fetchRecipe() {
      this.error = this.post = null
      this.loading = true
      const result = await getAllRecipes()
      this.recipes = result.recipes
      this.loading = false
    }
  },
  
}
</script>

<style scoped>
#recipe-list {
  display: flex;
  flex-flow: row;
  list-style: none;
}

#recipe-list > li {
  margin: 0 2em;
  display: inline;
}
</style>