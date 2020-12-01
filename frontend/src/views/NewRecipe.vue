<template>
  <p> This is a page for creating new recipe </p>
  <form>
    <label for="recipe-name"> Recipe Name </label>
    <input id="recipe-name" v-model="name">
    <p>Recipe name is: {{ name}} </p>

    <label for="recipe-desc"> Description </label>
    <input id="recipe-desc" v-model="description">
    <p>Recipe description is: {{ description}} </p>
  </form>
</template>

<script>
export default {
  name: "NewRecipe",
  data() {
    return {
      name: null,
      description: null,
      instructions: [],
      ingredients: [],
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