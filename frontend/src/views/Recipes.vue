<template>
  <div class="recipes-page">
    <h1>This is the list of recipes</h1>
    <ul id="recipe-list">
      <li v-for="recipe in recipes" :key="recipe.id">
        <recipe-card v-bind="recipe" />
      </li>
    </ul>
  </div>
</template>

<script>
//import { getAllRecipes } from "../utils/query";
import RecipeCard from "../components/RecipeCard.vue";

const getAllRecipes = async () => {
  return Promise.resolve({recipes:[
    {name: "recipe-1", description: "this is recipe-1", link: "/recipe/1"},
    {name: "recipe-2", description: "this is recipe-2", link: "/recipe/2"},
    {name: "recipe-3", description: "this is recipe-3", link: "/recipe/3"},
  ]})
}

export default {
  components: { RecipeCard },
  name: "Recipes",
  data() {
    return {
      loading: false,
      recipes: null,
      error: null
    };
  },
  created() {
    //fetch the recipes when the view is screated
    this.fetchRecipe();
  },
  methods: {
    async fetchRecipe() {
      this.error = this.post = null;
      this.loading = true;
      const result = await getAllRecipes();
      this.recipes = result.recipes;
      this.loading = false;
    }
  }
};
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
