const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

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
  registerUser: async (_, { username, email, password }, { User }) => {
    try {
      const user = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, 10),
      });

      const token = jsonwebtoken.sign(
        { id: user.id, username: user.username, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1w" }
      );

      return {
        token,
        userId: user.id,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  login: async (_, { username, password }, { User }) => {
    try {
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        throw new Error("No user with that username");
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Incorrect password");
      }

      const token = jsonwebtoken.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1w" }
      );
      return {
        token,
        userId: user.id,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
