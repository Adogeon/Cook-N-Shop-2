const { ingredients } = require("./Recipe");

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
      const recipeRecord = await context.Recipe.findOne({
        where: { id: args.id },
        include: context.Ingredient,
      });

      if (args.input.ingredients) {
        args.input.ingredients.map(async (ingredient) => {
          const { name, ...measurement } = ingredient;
          const ingredientRecord = await context.Ingredient.findOrCreate({
            where: { name: name },
          });
          const measurementRecord = await context.Measurement.findOrCreate({
            where: {
              RecipeId: recipeRecord.id,
              IngredientId: ingredientRecord[0].id,
            },
          });
          await measurementRecord[0].update(measurement);
        });
      }
      await recipeRecord.update(args.input);
      return recipeRecord;
    } catch (err) {
      console.error(err);
    }
  },
};
