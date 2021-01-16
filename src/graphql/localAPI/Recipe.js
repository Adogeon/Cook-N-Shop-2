const { Recipe, User, Ingredient } = require("../../database/models");
const { findOrCreateIngredientInst } = require("./Ingredient.js");

module.exports = {
  findRecipeById: async (recipeId) => {
    try {
      const result = await Recipe.findByPk(recipeId, {
        include: [
          { model: User, as: "author" },
          {
            model: Ingredient,
            through: {
              attributes: ["quantity", "unit"],
            },
          },
        ],
        raw: true,
      });
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  createNewRecipe: async (userId, { ingredients, ...rest }) => {
    try {
      const RecipeInst = await Recipe.create(rest);
      const recipeId = RecipeInst.id;
      await RecipeInst.addAuthor(userId);
      await Promise.all(
        ingredients.map(async ({ name, quantity, unit }) => {
          let IngredientInst = await findOrCreateIngredientInst(name);
          RecipeInst.addIngredient(IngredientInst, {
            through: { quantity, unit },
          });
        })
      );
      const result = await this.findRecipeById(recipeId);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  updateRecipe: async (userId, recipeId, { ingredients, ...rest }) => {
    try {
      const RecipeInst = await Recipe.findByPk(recipeId);
      const authorId = await RecipeInst.getAuthor().id;
      if (userId !== authorId)
        throw new Error("User is not the Author of this Recipe");
      await RecipeInst.update(rest);
      await RecipeInst.setIngredients([]);
      await Promise.all(
        ingredients.map(async ({ name, quantity, unit }) => {
          let IngredientInst = await findOrCreateIngredientInst(name);
          RecipeInst.addIngredient(IngredientInst, {
            through: { quantity, unit },
          });
        })
      );
      const result = await this.findRecipeById(recipeId);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteRecipe: async (userId, recipeId) => {
    try {
      const RecipeInst = await Recipe.findByPk(recipeId);
      const authorId = await RecipeInst.getAuthor().id;
      if (userId !== authorId)
        throw new Error("User is not the Author of this Recipe");
      const result = await RecipeInst.destroy();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
};
