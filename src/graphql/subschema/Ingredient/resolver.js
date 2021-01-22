const {
  getAllIngredient,
  getRecipesByIngredient,
  getIngredientById,
} = require("../../localAPI/Ingredient");

module.exports = {
  Ingredient: {
    recipes: async ({ id }) => {
      return await getRecipesByIngredient(id);
    },
  },
  Query: {
    allIngredient: async (_, { filter }) => {
      return await getAllIngredient(filter);
    },
    ingredientById: async (_, { id }) => {
      return await getIngredientById(id);
    },
  },
};
