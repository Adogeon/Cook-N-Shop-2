<template>
  <div class="recipe card">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="recipe" class="content">
      <section class=" recipe-intro my-5">
        <h1>{{ recipe.name }}</h1>
        <div>{{ recipe.description }}</div>
        <img :src="recipe.imageLink" class="img-fluid" alt="recipe-image" />
      </section>
      <div class="recipe-main my-5">
        <section id="ingr-sec">
          <h2>Ingredients</h2>
          <ul class="ingredient-list">
            <li
              v-for="(item, index) in recipe.ingredients"
              :key="`ingredient-${index}`"
            >
              {{ `${item.quantity} ${item.unit} ${item.ingredient.name}` }}
            </li>
          </ul>
        </section>
        <vr />
        <section id="inst-sec">
          <h2>Instructions</h2>
          <ol class="instructions-list">
            <li
              v-for="(step, index) in recipe.instructions"
              :key="`step-${index}`"
            >
              {{ `${step}` }}
            </li>
          </ol>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
//import { getOneRecipeById } from "../utils/query";

const getOneRecipeById = async id => {
  return Promise.resolve({
    id: id,
    name: `French Omelette With Cheese`,
    description: `A classic French omelette has a smooth, silky exterior with little to no browning that cradles a tender, moist, soft-scrambled interior. The technique for making one is something every cook should learn—as long as you know these key steps, it's easy. This version is stuffed with your choice of cheese.`,
    imageLink:
      "https://www.seriouseats.com/recipes/images/2016/04/20160323-french-omelet-vicky-wasik--31.jpg",
    ingredients: [
      {
        ingredient: { name: "large eggs" },
        quantity: "3",
        unit: ""
      },
      {
        ingredient: { name: "grated cheese" },
        quantity: "1",
        unit: "ounce"
      },
      {
        ingredient: { name: "unsalted butter" },
        quantity: "1",
        unit: "tablespoon"
      },
      {
        ingredient: {
          name: "Kosher salt and freshly ground white or black pepper"
        },
        quantity: "",
        unit: ""
      }
    ],
    instructions: [
      "In a medium bowl, beat eggs with a disposable plastic or reusable wooden fork just until last traces of white are mixed in; season with salt and pepper.",
      "In a perfectly unscratched 8-inch nonstick skillet, melt butter, swirling over moderate heat, until fully melted and foamy but not browned. Add eggs and stir rapidly with fork, tines up, while shaking pan to agitate eggs; make sure to move fork all around pan to break up curds and scrape them from bottom of skillet as they form. Stop stirring as soon as eggs are very softly scrambled and creamy (but still loose enough to come together into a single mass), 1 to 2 minutes.",
      "Using fork, gently spread egg in an even layer around skillet and scrape down any wispy bits around the edges. Scatter cheese all over egg. The top surface should be loose and creamy, but if it looks too liquid and raw, cook undisturbed for another few seconds. (If it still flows, you can swirl skillet to send loose egg to the edges, where it will set more quickly.)",
      "Remove from heat, tilt skillet up by its handle, and, using fork, gently roll omelette down over itself until it is nearly folded in half. Using fork, push omelette to edge of skillet so that lower edge of egg begins to just barely overhang; use fork to fold overhanging edge of egg up, closing the omelette.",
      "Hold skillet right over plate and turn omelette out onto it. It should be almond- or cigar-shaped, with the seam on bottom; if it's not, lay a clean kitchen towel over it and use your hands to adjust its shape and position, then remove towel. Serve. (To make another omelette, wipe any eggy bits out of skillet and repeat.)"
    ]
  });
};

export default {
  data() {
    return {
      loading: false,
      recipe: null,
      error: null
    };
  },
  created() {
    //fetch the recipes when the view is screated
    this.fetchRecipe();
  },
  methods: {
    async fetchRecipe() {
      this.error = this.post = null;
      this.loading = true;
      const result = await getOneRecipeById(this.$route.params.id);
      this.recipe = result;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.content {
  max-width: 780px;
  margin: auto;
}

.recipe-main {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}

vr {
  margin: 2em;
}
.ingr-sec {
  flex-grow: 1;
  flex-shrink: 2;
}

li {
  text-align: left;
  margin: 0.5em 0;
}

.inst-sec {
  flex-grow: 2;
}
</style>
