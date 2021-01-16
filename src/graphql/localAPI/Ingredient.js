const { Ingredient } = require("../../database/models");

module.exports = {
  getIngredientById: async (id) => {
    try {
      const IngredientInst = await Ingredient.findByPk(id);
      return IngredientInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllIngredient: async (where = {}) => {
    try {
      const ingredientList = await Ingredient.findAll(where, { raw: true });
      return ingredientList;
    } catch (err) {
      throw new Error(err);
    }
  },

  searchOrAddIngredient: async (name) => {
    try {
      const IngredientInst = await Ingredient.findOrCreate({
        where: { name },
      });
      return IngredientInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
};
