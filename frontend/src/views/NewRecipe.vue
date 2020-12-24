<template>
  <p> This is a page for creating new recipe </p>
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

  <component :is="currentTabComponent"></component>

</template>

<script>
import RecipeIntro from "../components/NewRecipeComponents/recipe-intro.vue";
import RecipeIngredients from "../components/NewRecipeComponents/recipe-ingredients.vue";
import RecipeInstructions from "../components/NewRecipeComponents/recipe-instructions.vue";
import RecipeReview from "../components/NewRecipeComponents/recipe-final.vue";
import { createNewRecipe} from "../utils/api.js"
import {reactive, ref, readonly, provide, computed} from "vue";

export default {
  components: { "recipe-introduction": RecipeIntro, "recipe-ingredient": RecipeIngredients, "recipe-instruction": RecipeInstructions, "recipe-review":RecipeReview},
  // props will store user information later down the line
  setup() {
    const newRecipe = reactive({
      name: "",
      description: "",
      ingredients:[],
      instructions:[]
    })
    const currentTab = ref('Introduction');
    const tabs = ["Introduction", "Ingredient", "Instruction", "Review"]
    const currentTabComponent = computed(() => 'recipe-' + currentTab.value.toLowerCase())

    const setName = (value) => {
      newRecipe.name = value
    }

    const setDescription = (value) => {
      newRecipe.description = value
    }

    const setIngredients = (value) => {
      newRecipe.ingredients = value
    }

    const setInstructions = (value) => {
      newRecipe.instructions = value
    }

    const submitNewRecipe = async () => {

      const reconstructObject = {
        name: newRecipe.name,
        description: newRecipe.description,
        ingredients: newRecipe.ingredients,
        instructions: null,
      }
      console.log(reconstructObject);
      const result = await createNewRecipe(reconstructObject)

      console.log(result)
    }

    provide('recipe', readonly(newRecipe))
    provide('setName', setName);
    provide('setDescription', setDescription);
    provide('setIngredients', setIngredients);
    provide('setInstructions', setInstructions);
    provide('submitNewRecipe', submitNewRecipe);

    return {
      tabs,
      currentTab,
      currentTabComponent
    }
  }
}
</script>

<style scoped>
#new-recipe-form {
  margin:auto;
  width: 80vw;
  max-width: 1008px;
}

input {
  background-color: #fafafa;
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  border:1px solid #111;
  transition: .3s background-color;
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