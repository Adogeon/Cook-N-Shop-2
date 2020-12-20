<template>
  <section>
    <h3> Recipe Ingredients </h3>
    <input type="text" v-model="state.ingredient.name" />
    <input type="text" v-model="state.ingredient.quantity" />
    <input type="text" v-model="state.ingredient.measurement" />
    <button @click="addIngredient"> Add Ingredient </button>
    <ul>
      <li v-for="(ingredient, i) in state.ingredientList" :key="i">
        {{ingredient.name}}
        <button @click="removeIngredient(i)">x</button>
      </li>
    </ul>
    <button @click="onSubmit">Next</button>
  </section>
  
</template>
<script>
  import { reactive, inject } from "vue";
  export default {
    setup() {
      const { state, addIngredient, removeIngredient, onSubmit} = useIngredient();

      return {
        state,
        addIngredient,
        removeIngredient,
        onSubmit
      }
    }
  };

  function useIngredient() {
    const state = reactive({
      ingredient: {
        name: "",
        quantity: 0,
        measurement: null
      },
      ingredientList: []
    });

    const addIngredient = () => {
      state.ingredientList.push(state.ingredient);
      state.ingredient = {
        name: "",
        quantity: 0,
        measurement: null
      };
    }

    const removeIngredient = (i) => {
      state.ingredientList.splice(i);
    }

    const setIngredients = inject("setIngredients");
    const changeTabIndex = inject("changeTabIndex");
    const onSubmit= () => {
      setIngredients(state.ingredientList);
      changeTabIndex(1);
    }

    return { state, addIngredient, removeIngredient, onSubmit }
  }
</script>

<style scoped>
input {
  width: 100%;
  margin: 0.25px 0;
  padding: 5px 10px;
  border: 0;
  border-bottom: 1px solid black;
  text-align: center;
}

input:focus {
  outline: none;
}
</style>