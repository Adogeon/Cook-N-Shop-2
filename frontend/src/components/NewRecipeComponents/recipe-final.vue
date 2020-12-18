<template>
  <p> this is to review the recipe </p>
  <section>
    <h3>Name </h3>
    <p>{{name}} </p>
    <h3>Description </h3>
    <p>{{description}}</p>
    <h3>Ingredient </h3>
    <ul>
      <li v-for="(ingredient,i) in ingredients" :key="`ingredient-${i}`">
        {{ingredient.name}}
      </li>
    </ul>
    <h3>Instruction </h3>
    <ol>
      <li v-for="(instruction,i) in instructions" :key="`instruction-${i}`">
        {{instruction}}
      </li>
    </ol>
  </section>
  <button @click="onDone">Submit</button>
</template>

<script>
import {inject} from "vue";

export default {
  setup() {
    const { name, description, ingredients, instructions, onDone} = useReview();

    return {
      name,
      description,
      ingredients,
      instructions,
      onDone
    }
  }
}

function useReview() {
  const recipe = inject("recipe");
  const {name, description, ingredients, instructions} = recipe;

  function onDone() {
    console.log(recipe)
  }

  return {name, description, ingredients, instructions, onDone}
}
</script>