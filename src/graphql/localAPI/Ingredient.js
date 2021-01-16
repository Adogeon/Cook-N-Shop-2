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

  findOrCreateIngredientInst: async (name) => {
    try {
      const ingredientInst = await Ingredient.findOrCreate({ where: { name } });
      return ingredientInst;
    } catch (err) {
      throw new Error(err);
    }
  },
};
