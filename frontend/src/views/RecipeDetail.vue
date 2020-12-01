<template>
  <div> This is the detail page for recipe with id {{$route.params.id}}</div>
  <section class="recipe-intro">
    <h1>{{recipe.name}}</h1>
    <p>{{recipe.description}}</p>
  </section>

  <div class="recipe-main">
  <section id="ingr-sec">
    <h2>Ingredients</h2>
    <ul class="ingredient-list">
      <li v-for="(item,index) in recipe.ingredients" :key="index">
        {{`${item.quantity} ${item.unit} of ${item.ingredient.name}`}}
       </li> 
    </ul>
  </section>

  <section id="inst-sec">
    <h2>Instructions</h2>
    <p class="instructions">{{item.instructions}}</p>
  </section>
  <div>
</template>

<script>
import { getOneRecipeById } from '../utils/query'
export default {
  data() {
    return {
      loading: false,
      recipe: null,
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
      const result = await getOneRecipeById(this.$route.params.id)
      this.recipe = result
      console.log(this.recipe)
      console.log(this.recipe.ingredients)
      this.loading = false
    }
  },
}
</script>

<style scoped>
.recipe-main {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
}

#ingr-sec {
  border-right: 3px solid black;
}
</style>