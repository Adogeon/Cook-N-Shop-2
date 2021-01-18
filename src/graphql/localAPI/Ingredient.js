const { Ingredient } = require("../../database/models");

module.exports = {
  async getIngredientById(id) {
    try {
      const IngredientInst = await Ingredient.findByPk(id);
      return IngredientInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },

  async getAllIngredient(where = {}) {
    try {
      const ingredientList = await Ingredient.findAll(where, { raw: true });
      return ingredientList;
    } catch (err) {
      throw new Error(err);
    }
  },

  async findOrCreateIngredientInst(name) {
    try {
      const ingredientInst = await Ingredient.findOrCreate({ where: { name } });
      return ingredientInst;
    } catch (err) {
      throw new Error(err);
    }
  },
};
