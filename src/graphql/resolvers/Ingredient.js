module.exports = {
  id: (parent, args, context, info) => {
    if (parent.dataValues) return parent.dataValues.id;
    return parent.id;
  },
  name: (parent, args, context, info) => {
    if (parent.dataValues) return parent.dataValues.name;
    return parent.name;
  },
  recipes: (parent, args, context, info) => {
    return context.Ingredient.findOne({
      where: { id: parent.id },
    }).then((IngInst) => {
      return IngInst.getRecipes().then((result) => {
        return result;
      });
    });
  },
};
