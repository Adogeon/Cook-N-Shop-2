<template>
  <input type="text" v-model="name" >
  <input type="text" v-model="description">
</template>

<script>
import { inject } from 'vue'
export default {
  setUp() {
    const recipe = inject('recipe');
    const setName = inject('setName');
    const setDescription = inject('setDescription');

    return ({
      recipe,
      setName,
      setDescription
    })
  },
  computed: {
    name: {
      get() {
        return recipe.name
      },
      set(value) {
        setName(value)
      }
    },
    description: {
      get() {
        return recipe.description
      },
      set(description) {
        setName(description)
      }
    }
  }

  
}
</script>