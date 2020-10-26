module.exports = {
  ingredient: (parent, args, context, info) => {
    return parent.getIngredients();
  },
};
