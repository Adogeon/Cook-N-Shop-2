<template>
  <div class="card bg-light rounded-0 bd-2 my-3 shadow">
    <h4 class="card-header bg-primary text-white">
      {{ listTitle.toUpperCase() }}
    </h4>
    <div class="card-body">
      <div class="card-group">
        <div
          class="card me-3"
          style="max-width:150px"
          v-for="recipe in recipeList"
          :key="recipe.id"
        >
          <router-link
            :to="{ name: 'RecipeDetail', params: { id: recipe.id } }"
          >
            <img
              src="https://picsum.photos/150"
              class="card-img-top"
              alt="recipe-thumbnail"
            />
            <div class="card-body">
              <h5 class="card-title">{{ recipe.name }}</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipeList: {
      type: Array,
      required: true
    },
    listTitle: {
      type: String,
      required: true,
      validator: function(value) {
        return ["new", "popular", "created", "saved"].indexOf(value) !== -1;
      }
    }
  }
};
</script>
