const { Ingredient } = require("../../../database/models");

module.exports = {
  Ingredient: {
    id: (parent) => {
      return parent.dataValues.id;
    },
    name: (parent) => {
      return parent.dataValues.name;
    },
    recipes: (parent) => {
      return Ingredient.findOne({
        where: { id: parent.id },
      }).then((IngInst) => {
        return IngInst.getRecipes().then((result) => {
          return result;
        });
      });
    },
  },
  Query: {
    allIngredient: (parent, args) => {
      let where = {};
      if (args.filter) {
        where = { name: { [Op.substring]: args.filter } };
      }

      return Ingredient.findAll({ where })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
