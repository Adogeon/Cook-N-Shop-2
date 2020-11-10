const { Op } = require("sequelize");
const Ingredients = require("./Ingredients");

module.exports = {
  hello: (parent, args, context, info) => {
    return args.name ? `Hello ${args.name}` : `Hello World!`;
  },
  recipe: (parent, args, context, info) => {
    const where = {
      [Op.or]: [
        args.filter,
        { name: { [Op.substring]: args.filter } },
        { description: { [Op.substring]: args.filter } },
        {},
      ],
    };
    return context.Recipe.findAndCountAll(where).then((result) => {
      return {
        recipes: result.rows,
        count: result.count,
      };
    });
  },
  recipeById: (parent, args, context, info) => {
    return context.Recipe.findOne({
      where: { id: args.id },
      include: Ingredient,
    }).then((result) => {
      console.log(result);
      if (result) {
        return {
          __typename: "Recipe",
          ...result.dataValues,
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
