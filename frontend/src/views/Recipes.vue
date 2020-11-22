<template>
  <div class="recipes-page">
    <h1>This is the list of recipes</h1>
  </div>
</template>

<script>
import getAllRecipes from "../utils/query"

export default {
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
      const result = await getAllRecipe()
      this.post = result.data
      this.loading = false
    }
  }
}
</script>