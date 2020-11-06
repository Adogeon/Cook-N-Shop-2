module.exports = {
  recipe: (parent, args, context, info) => {
    return parent.getRecipes();
  },
};
