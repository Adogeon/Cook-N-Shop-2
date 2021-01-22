const { Ingredient, Sequelize } = require("../../database/models");
const { substring } = Sequelize.Op;

module.exports = {
  async getIngredientById(id) {
    try {
      const ingredientInst = await Ingredient.findByPk(id);
      return ingredientInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },

  async getAllIngredient(search) {
    let where = {};
    if (search) where = { name: { [substring]: search } };
    try {
      const { rows, count } = await Ingredient.findAndCountAll({
        where,
        raw: true,
      });
      return {
        ingredients: [...rows],
        count,
      };
    } catch (err) {
      throw new Error(err);
    }
  },

  async getRecipesByIngredient(ingredientId) {
    try {
      const ingredientInst = await Ingredient.findByPk(ingredientId);
      const recipeList = await ingredientInst.getRecipes();
      const resultList = await Promise.all(
        recipeList.map(async (recipe) => recipe.get({ plain: true }))
      );
      return resultList;
    } catch (error) {
      throw new Error(err);
    }
  },

  async findOrCreateIngredientInst(name) {
    try {
      const ingredientInst = await Ingredient.findOrCreate({ where: { name } });
      return ingredientInst[0];
    } catch (err) {
      throw new Error(err);
    }
  },
};
