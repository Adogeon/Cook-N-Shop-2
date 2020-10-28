module.exports = {
  newRecipe: async (parent, args, context, info) => {
    const newRecipe = await context.db.Recipe.create(args.input);
    
  },
};
