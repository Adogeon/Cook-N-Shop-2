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

const addingInstructions = async (instructionList, context, newRecipeInst) => {
  return instructionList.map(async (instruction, index) => {
    const newInstruction = await context.Instruction.create({
      order: index,
      step: instruction,
    });
    await newRecipeInst.addInstructions(newInstruction);
  });
};

module.exports = {
  newRecipe: async (parent, args, context, info) => {
    try {
      let newRecipe = await context.Recipe.create(args.input);
      let promiseArr = [];
      if (args.input.ingredients) {
        promiseArr.push(
          addingIngredients(args.input.ingredients, context, newRecipe.id)
        );
      }

      if (args.input.instructions) {
        await addingInstructions(args.input.instructions, context, newRecipe);
      }

      return newRecipe.dataValues.id;
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
