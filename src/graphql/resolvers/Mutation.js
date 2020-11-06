module.exports = {
  newRecipe: async (parent, args, context, info) => {
    try {
      const newRecipe = await context.Recipe.create({ name: "test" });
      console.log(newRecipe.toJSON());
      return newRecipe;
    } catch (err) {
      console.error(err);
    }
  },
};
