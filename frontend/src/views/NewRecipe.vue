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
  <component :is="currentTab.component" v-model="currentTab.model"></component>

</template>

<script>
import RecipeIntro from "../components/NewRecipeComponents/recipe-intro.vue";
import RecipeIngredients from "../components/NewRecipeComponents/recipe-ingredients.vue";
import RecipeInstructions from "../components/NewRecipeComponents/recipe-instructions.vue";
import RecipeReview from "../components/NewRecipeComponents/recipe-final.vue";

const tabs = [
  {
    name: "Intro",
    component: RecipeIntro
    model:[
      'name', 'description'
    ]
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

export default {
  name: "NewRecipe",
  data() {
    return {
      name: null,
      description: null,
      instructions: [],
      ingredients: [],
      tabs: tabs,
      currentTab: tabs[0],
    }
  },
  methods: {
    sendData() {
      //send data to the server
      console.log("This method send data to the server");
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