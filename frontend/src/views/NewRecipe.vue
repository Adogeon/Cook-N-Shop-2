<template>
  <p> This is a page for creating new recipe </p>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab.name"
      v-bind:class="['tab-button', {active:currentTab.name}]"
      v-on:click="currentTab = tab"
    >
      {{ tab.name}}
    </button>
  </div>
  <p>{{name}}</p>
  <p>{{instructions}}</p>
  <component :is="tabs[currentTab.value].component" v-model="tabs[currentTab.value].model"></component>

</template>

<script>
import RecipeIntro from "../components/NewRecipeComponents/recipe-intro.vue";
import RecipeIngredients from "../components/NewRecipeComponents/recipe-ingredients.vue";
import RecipeInstructions from "../components/NewRecipeComponents/recipe-instructions.vue";
import RecipeReview from "../components/NewRecipeComponents/recipe-final.vue";
import {reactive, readonly, provide} from "vue";

export default {
  components: { RecipeIntro, RecipeIngredients, RecipeInstructions, RecipeReview},
  // props will store user information later down the line
  setup() {
    const newRecipe = reactive({
      name: "",
      description: "",
      ingredients:[],
      instructions:[]
    })

    const tabs = [
      {
      name: "Intro",
      component: RecipeIntro
      },
      {
        name: "Ingredients",
        component: RecipeIngredients
      },
      {
        name: "Instructions",
        component: RecipeInstructions
      },
      {
        name: "Final",
        component: RecipeReview
      }
    ]

    const currentTabIndex = ref(0)

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

    const changeTabIndex = (move) => {
      currenttabIndex += value
    }

    provide('recipe', readonly(newRecipe))
    provide('setName', setName);
    provide('setDescription', setDescription);
    provide('setIngredients', setIngredients);
    provide('setInstructions', setInstructions);
    provide('changeTabIndex', changeTabIndex)

    return {
      tabs,
      currentTab
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