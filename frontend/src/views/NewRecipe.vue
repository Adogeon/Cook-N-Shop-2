<template>
  <p> This is a page for creating new recipe </p>
  <div id="new-recipe-form">
    <form>
      <label for="recipe-name"> Recipe Name </label>
      <input id="recipe-name" v-model="name" type="text">
      <p>Recipe name is: {{ name}} </p>

      <label for="recipe-desc"> Description </label>
      <input id="recipe-desc" v-model="description" type="text">
      <p>Recipe description is: {{ description}} </p>

      <hr/>

      <div class="ingredients">
        <h3>Ingredients</h2>
        <div class="ingredient-input">
          <div>
            <label for="ingredient-name"> Name </label>
            <input id="ingredient-name" type="text"/>
          </div>
          <div>
            <label for="ingredient-quantity"> Quantity </label>
            <input id="ingredient-quantity" type="text"/>
          </div>
          <div>
            <label for="ingredient-unit"> Unit </label>
            <input id="ingredient-unit" type="text"/>
          </div> 
        </div>
      </div>

      <div class="instructions">
        <h3>Steps</h2>
        <div class="ingruction-input">
          <div>
            <label for="steps"> Step 1 </label>
            <input id="steps" type="text"/>
          </div> 
        </div>
      </div>

    </form>
  </div>
  <router-view></router-view>
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