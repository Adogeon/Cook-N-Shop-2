const { Op } = require("sequelize");

module.export = {
  recipe: (parent, args, context, info) => {
    const where = {
      [Op.or]: [
        args.filter,
        { name: { [Op.substring]: args.filter } },
        { description: { [Op.substring]: args.filter } },
        {},
      ],
    };
    return context.db.User.findAndCountAll(where).then((result) => {
      return {
        recipes: result.rows,
        count: result.count,
      };
    });
  },
};
