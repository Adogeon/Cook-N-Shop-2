<template>
  <div class="bg-light my-3">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card rounded-0 bd-2 border-0">
          <h4 class="card-header bg-light text-black">
            {{ listTitle.toUpperCase() }}
          </h4>
          <div class="card-body bg-light">
            <div class="card-group">
              <recipe-card
                class="card mx-2"
                style="max-width:150px"
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
import RecipeCardVue from './RecipeCard.vue';
export default {
  props: {
    recipeList: {
      type: Array,
      required: true
    },
    listTitle: {
      type: String,
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
