<template>
  <section>
    <h3> Recipe Ingredients </h3>
    <input type="text" v-model="state.ingredient.name" />
    <input type="number" v-model.number="state.ingredient.quantity" />
    <input type="text" v-model="state.ingredient.unit" />
    <button @click="addIngredient"> Add Ingredient </button>
    <ul>
      <li v-for="(ingredient, i) in state.ingredientList" :key="i">
        {{ingredient.name}}
        <button @click="removeIngredient(i)">x</button>
      </li>
    </ul>
    <button @click="onNavigate('back')"> Back </button>
    <button @click="onNavigate('next')"> Next </button>
  </section>
  
</template>
<script>
  import { reactive, inject } from "vue";
  export default {
    setup() {
      const { state, addIngredient, removeIngredient, onNavigate} = useIngredient();

      return {
        state,
        addIngredient,
        removeIngredient,
        onNavigate
      }
    }
  };

  function useIngredient() {
    const state = reactive({
      ingredient: {
        name: "",
        quantity: 0,
        unit: null
      },
      ingredientList: []
    });

    const addIngredient = () => {
      state.ingredientList.push(state.ingredient);
      state.ingredient = {
        name: "",
        quantity: 0,
        unit: null
      };
    }

    const removeIngredient = (i) => {
      state.ingredientList.splice(i);
    }

    const changeRecipe = inject("changeRecipe");
    const moveNext = inject('moveNext');
    const moveBack = inject('moveBack')
    const onNavigate = (direction) => {
      changeRecipe("instructions", state.instructionList);
      //navigateTab("Review");
      if(direction === "next") {
        moveNext()
      } else if(direction === "back") {
        moveBack()
      }
    }

    return { state, addIngredient, removeIngredient, onNavigate }
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