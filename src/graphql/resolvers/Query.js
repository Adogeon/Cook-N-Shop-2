const { Op } = require("sequelize");

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
    return context.Recipe.findOne({ where: { id: args.id } }).then((result) => {
      return result;
    });
  },
};
