<template>
  <section>
    <div>
      <label for="recipe-name"> Recipe Name </label>
      <input type="text" v-model="name" id="recipe-name">
    </div>
    <div>
      <label for='recipe-desc'> Description </label>
      <input type="text" v-model="description" id="recipe-name">
    </div>
    <button @click="onSubmit"> Next </button>
  </section>
</template>

<script>
import { inject, ref } from 'vue'
export default {
  setup() {
    const { name, description, onSubmit} = useIntro()

    return {
      name,
      description,
      onSubmit
    }
  }
}

function useIntro() {
  const recipe = inject("recipe")
  const name = ref(recipe.name)
  const description = ref(recipe.description)
  const setName = inject("setName");
  const setDescription = inject("setDescription");
  const changeTabIndex = inject("changeTabIndex")

  const onSubmit = () => {
    setName(name.value);
    setDescription(description.value);
    // move to new page
    changeTabIndex(1)
  }

  return {name, description, onSubmit}
}
</script>

<style scoped>
  section {
    display: flex;
    flex-flow: column;
    width: 80vw;
    max-width: 504px;
    margin: 2em auto;
  }

  div {
    width: 100%;
    display: flex;
    flex-flow: column;
    margin: 1em 0;
  }

  label {
    text-align: center;
  }

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