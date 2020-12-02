const { ingredients } = require("./Recipe");

const addingIngredients = async (ingredientList, context, recipeId) => {
  ingredientList.map(async (ingredient) => {
    const { name, ...measurement } = ingredient;
    const ingredientRecord = await context.Ingredient.findOrCreate({
      where: { name: name },
    });
    const measurementRecord = await context.Measurement.findOrCreate({
      where: {
        RecipeId: recipeId,
        IngredientId: ingredientRecord[0].id,
      },
    });
    await measurementRecord[0].update(measurement);
  });
};

module.exports = {
  newRecipe: async (parent, args, context, info) => {
    try {
      const newRecipe = await context.Recipe.create(args.input);

      if (args.input.ingredients) {
        await addingIngredients(args.input.ingredients, context, newRecipe.id);
      }

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
        await addingIngredients(
          args.input.ingredients,
          context,
          recipeRecord.id
        );
      }

      await recipeRecord.update(args.input);
      return recipeRecord;
    } catch (err) {
      console.error(err);
    }
  },
};
