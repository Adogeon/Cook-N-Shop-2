<template>
  <div class="bg-light my-3">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-8">
        <div class="card rounded-0 bd-2 border-0">
          <h4 v-if="listTitle" class="card-header bg-light text-black">
            {{ listTitle.toUpperCase() }}
          </h4>
          <div class="card-body bg-light px-0">
            <div class="d-flex flex-wrap ">
              <recipe-card
                class="me-2 mb-2"
                v-for="recipe in recipeList"
                :key="recipe.id"
                :recipeDetail="recipe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCardVue from "./RecipeCard.vue";
export default {
  props: {
    recipeList: {
      type: Array,
      required: true
    },
    listTitle: {
      type: String,
      default: null,
      validator: function(value) {
        return ["new", "popular", "created", "saved"].indexOf(value) !== -1;
      }
    }
  },
  components: {
    "recipe-card": RecipeCardVue
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .recipe-card {
    width: 32%;
  }
}
</style>
