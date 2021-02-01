<template>
  <div class="card" style="width: 18rem;">
    <img
      src="https://picsum.photos/200/300"
      class="card-img-top"
      alt="recipe-image"
    />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <a v-bind:href="link" class="btn btn-primary">Check it out</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["name", "description", "link"]
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
