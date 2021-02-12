<template>
  <div class="shadow bg-light py-5 my-3">
    <h1>This is the list of recipes</h1>
    <div>
      <h3>Note</h3>
      <p>Further component needed</p>
      <ul>
        - search bar - filter by tags - filter by main ingredient - create
        recipe
      </ul>
    </div>
    <div class="row">
      <search-bar />
    </div>
    <div class="card bg-transparent pt-3 px-3 mx-3 rounded-0 shadow container">
      <div class="row gx-2 gy-3">
        <recipe-card
          v-for="recipe in recipes"
          :key="recipe.id"
          v-bind="recipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import RecipeListVue from '../components/RecipeList.vue';
import SearchBarVue from "../components/SearchBar.vue";

const getAllRecipes = async () => {
  return Promise.resolve({
    recipes: [
      { name: "recipe-1", description: "this is recipe-1", link: "/recipe/1" },
      { name: "recipe-2", description: "this is recipe-2", link: "/recipe/2" },
      { name: "recipe-3", description: "this is recipe-3", link: "/recipe/3" }
    ]
  });
};

export default {
  components: {"search-bar": SearchBarVue, "recipe-list": RecipeListVue },
  name: "Recipes",
  setup() {
    const filter = ref("");
    const recipeList = ref([]);
    const loading = ref(null);
    return {filter, recipeList, loading}
  },
  created() {
    //fetch the recipes when the view is screated
    this.fetchRecipe();
  },
  methods: {
    async fetchRecipe() {
      loading.value = true;
      const result = await getAllRecipes();
      recipeList.value = result.recipes;
      loading.value = false;
    }
  }
};
</script>
