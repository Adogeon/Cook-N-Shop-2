<template>
  <div
    class="card p-0 rounded-0 shadow-sm col-sm-6 col-md-3"
  >
    <img
      src="http://lorempixel.com/200/150/food"
      class="card-img-top img-fluid"
      alt="recipe-image"
    />
    <div class="card-body">
      <h5 class="card-title">{{ recipeDetail.name }}</h5>
      <a :href="recipeDetail.link" class="btn btn-link">Check it out</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipeDetail"]
};
</script>

