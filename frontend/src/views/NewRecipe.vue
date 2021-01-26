<template>
  <div class="new-recipe-form">
    <progress-bar
      :stepList="tabs"
      :doneList="doneList"
      :currentStep="currentTab"
    ></progress-bar>
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
//in case
/*
*
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button',{active: currentTab === tab}]"
      v-on:click="currentTab = tab"
    >
      {{ tab}}
    </button>
  </div>
*
*/
import RecipeIntro from "../components/NewRecipeComponents/recipe-intro.vue";
import RecipeIngredients from "../components/NewRecipeComponents/recipe-ingredients.vue";
import RecipeInstructions from "../components/NewRecipeComponents/recipe-instructions.vue";
import RecipeReview from "../components/NewRecipeComponents/recipe-final.vue";
import ProgressBar from "../components/ProgressBar.vue";
import { createNewRecipe } from "../utils/api.js";
import { reactive, ref, readonly, provide, computed } from "vue";

export default {
  components: {
    "recipe-introduction": RecipeIntro,
    "recipe-ingredient": RecipeIngredients,
    "recipe-instruction": RecipeInstructions,
    "recipe-review": RecipeReview,
    "progress-bar": ProgressBar
  },
  // props will store user information later down the line
  setup() {
    const newRecipe = reactive({
      name: "",
      description: "",
      ingredients: [],
      instructions: []
    });
    const tabs = ["Introduction", "Ingredient", "Instruction", "Review"];
    const currentIndex = ref(0);
    const currentTab = computed(() => tabs[currentIndex.value]);
    const doneList = computed(() => {
      if (currentIndex.value === 0) {
        return [];
      } else {
        return tabs.slice(0, currentIndex.value);
      }
    });
    const currentTabComponent = computed(
      () => "recipe-" + currentTab.value.toLowerCase()
    );

    const moveNext = () => {
      currentIndex.value++;
    };

    const moveBack = () => {
      currentIndex.value--;
    };

    const changeRecipe = (field, value) => {
      newRecipe[field] = value;
    };

    /*const navigateTab = (tabName) => {
      currentTab.value = tabName;
    }*/

    const submitNewRecipe = async () => {
      const reconstructObject = {
        name: newRecipe.name,
        description: newRecipe.description,
        ingredients: newRecipe.ingredients,
        instructions: null
      };

      const result = await createNewRecipe(reconstructObject);

      console.log(result);
    };

    provide("recipe", readonly(newRecipe));
    provide("changeRecipe", changeRecipe);
    provide("submitNewRecipe", submitNewRecipe);
    //provide('navigateTab', navigateTab);
    provide("moveNext", moveNext);
    provide("moveBack", moveBack);

    return {
      tabs,
      currentTab,
      currentTabComponent,
      doneList
    };
  }
};
</script>

<style scoped>
.new-recipe-form {
  margin: auto;
  width: 80vw;
  max-width: 1008px;
}

input {
  background-color: #fafafa;
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #111;
  transition: 0.3s background-color;
}

input:hover {
  background-color: #fafafa;
}

.ingredient-input {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

.ingredient-input > div {
  margin: 0.25em 0;
  text-align: left;
}
</style>
