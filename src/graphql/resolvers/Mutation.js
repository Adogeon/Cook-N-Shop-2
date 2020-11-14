module.exports = {
  newRecipe: async (parent, args, context, info) => {
    try {
      const newRecipe = await context.Recipe.create(args.input);
      return newRecipe;
    } catch (err) {
      console.error(err);
    }
  },
};
