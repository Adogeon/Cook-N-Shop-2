<template>
  <div class="container shadow bg-light py-5 my-3">
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
      <search-bar @update:filter="setFilter" />
    </div>
    <div>
      Search text is:
      <a>{{ filter }}</a>
    </div>
    <div class="row">
      <div v-if="loading">Loading ...</div>
      <recipe-list v-else :recipeList="recipeList" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import RecipeListVue from "../components/RecipeList.vue";
import SearchBarVue from "../components/SearchBar.vue";

const getAllRecipes = async () => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, {
      recipes: [
        {
          name: "recipe-1",
          description: "this is recipe-1",
          link: "/recipe/1"
        },
        {
          name: "recipe-2",
          description: "this is recipe-2",
          link: "/recipe/2"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-4",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-5",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-6",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        {
          name: "recipe-3",
          description: "this is recipe-3",
          link: "/recipe/3"
        },
        { name: "recipe-3", description: "this is recipe-3", link: "/recipe/3" }
      ]
    });
  });
};

export default {
  components: { "search-bar": SearchBarVue, "recipe-list": RecipeListVue },
  name: "Recipes",
  setup() {
    const filter = ref("");
    const recipeList = ref([]);
    const loading = ref(null);

    const fetchRecipe = async () => {
      loading.value = true;
      const result = await getAllRecipes();
      recipeList.value = result.recipes;
      loading.value = false;
    };

    let timeoutRef = null;
    const setFilter = text => {
      if(timeoutRef !== null) {
        clearTimeout(timeoutRef);
      }
      timeoutRef = setTimeout(() => {
        filter.value = text;
      }, 800)
    };

    onMounted(async () => {
      await fetchRecipe();
    });

    watch(filter, () => {
      fetchRecipe(filter);
    });

    return { filter, recipeList, loading, setFilter, fetchRecipe };
  }
};
</script>
