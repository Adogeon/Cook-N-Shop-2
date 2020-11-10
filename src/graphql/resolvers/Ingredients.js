module.exports = {
  recipe: (parent, args, context, info) => {
    return context.Ingredients.findOne({
      where: { id: parent.id },
    }).getRecipes();
  },
};
