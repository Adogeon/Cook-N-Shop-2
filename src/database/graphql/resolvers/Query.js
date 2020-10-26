const { Op } = require("sequelize");

module.exports = {
  recipe: async (parent, args, context, info) => {
    const where = {
      [Op.or]: [
        args.filter,
        { name: { [Op.substring]: args.filter } },
        { description: { [Op.substring]: args.filter } },
        {},
      ],
    };
    const result = await context.db.Recipe.findAndCountAll(where);
    return {
      recipes: result.rows,
      count: result.count,
    };
  },
};
