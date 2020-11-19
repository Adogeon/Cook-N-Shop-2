module.exports = {
  newRecipe: async (parent, args, context, info) => {
    try {
      const newRecipe = await context.Recipe.create(args.input);
      return newRecipe;
    } catch (err) {
      console.error(err);
    }
  },
  updateRecipe: async (parent, args, context, info) => {
    try {
      const recipeRecord = await context.Recipe.update(args.input, {
        where: { id: args.id },
      });
      return recipeRecord;
    } catch (err) {
      console.error(err);
    }
  },
};
