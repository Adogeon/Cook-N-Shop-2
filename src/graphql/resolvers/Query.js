const { Op } = require("sequelize");

module.exports = {
  hello: (parent, args, context, info) => {
    return args.name ? `Hello ${args.name}` : `Hello World!`;
  },
  allRecipe: (parent, args, context, info) => {
    let where = {};
    if (args.filter) {
      where = {
        [Op.or]: [
          { name: { [Op.substring]: args.filter } },
          { description: { [Op.substring]: args.filter } },
        ],
      };
    }
    return context.Recipe.findAndCountAll({ where })
      .then((result) => {
        return {
          recipes: result.rows,
          count: result.count,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  },
  allIngredient: (parent, args, context, info) => {
    let where = {};
    if (args.filter) {
      where = { name: { [Op.substring]: args.filter } };
    }

    return context.Ingredient.findAndCountAll({ where })
      .then((result) => {
        return {
          Ingredients: result.rows,
          count: result.count,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  },
  recipeById: (parent, args, context, info) => {
    return context.Recipe.findOne({
      where: { id: args.id },
    }).then(async (result) => {
      if (result) {
        return {
          __typename: "Recipe",
          ...result,
        };
      } else {
        return {
          __typename: "ErrorResult",
          code: "RECIPE_NOT_FOUND",
          message: `The recipe with id ${args.id} does not exist.`,
        };
      }
    });
  },
};
