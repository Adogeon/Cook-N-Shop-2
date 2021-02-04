<template>
  <ul class="list-group list-group-horizontal">
    <li v-for="recipe in recipeList" :key="recipe.id">
      <div class="card">
        <div class="card-header">
          <h5>{{ recipe.name }}</h5>
        </div>
        <div class="card-body">
          <img
            src="https://picsum.photos/150"
            class="image-thumbnail"
            alt="recipe-thumbnail"
          />
        </div>
        <div class="card-footer">
          <div class="row justify-space-between">
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: recipe.id } }"
              >View Full Recipe</router-link
            >
            <button>Add to Grocery</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </li>
  </ul>
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
