<template>
  <section>
    <input type="text" v-model="name" >
    <input type="text" v-model="description">
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

  const onSubmit = () => {
    setName(name.value);
    setDescription(description.value);
    // move to new page
  }

  return {name, description, onSubmit}
}
</script>