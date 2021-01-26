<template>
  <div class="recipe-card">
    <div>{{ name }}</div>
    <div>{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["name", "description"]
};
</script>

<style scoped>
.recipe-card {
  display: flex;
  flex-flow: column;
  width: 10em;
  height: 15em;
  border: 2px solid black;
}
</style>
