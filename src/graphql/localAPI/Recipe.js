const {
  Recipe,
  User,
  Ingredient,
  Instruction,
} = require("../../database/models");
const { findOrCreateIngredientInst } = require("./Ingredient.js");

module.exports = {
  async findRecipeById(recipeId) {
    try {
      const result = await Recipe.findByPk(recipeId, {
        include: [
          { model: User, as: "author", attributes: ["username", "id"] },
          { model: Instruction, attributes: ["order", "step"] },
          {
            model: Ingredient,
            through: {
              attributes: ["quantity", "unit"],
            },
          },
        ],
      });
      const plainResult = await result.get({ plain: true });
      return plainResult;
    } catch (err) {
      console.log(result);
      throw new Error(err);
    }
  },
  async createNewRecipe(userId, { ingredients, instructions, ...rest }) {
    try {
      const recipeInst = await Recipe.create(rest);
      const author = await User.findByPk(userId);
      const recipeId = recipeInst.id;
      await recipeInst.setAuthor(author);
      await Promise.all(
        ingredients.map(async ({ name, quantity, unit }) => {
          const IngredientInst = await findOrCreateIngredientInst(name);
          await recipeInst.addIngredient(IngredientInst, {
            through: { quantity, unit },
          });
        })
      );
      const instructionInstList = await Instruction.bulkCreate(
        instructions.map((step, index) => {
          return { step, order: index + 1 };
        })
      );
      await recipeInst.setInstructions(instructionInstList);
      const result = await this.findRecipeById(recipeId);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateRecipe(
    userId,
    recipeId,
    { ingredients, instructions, authorId, ...rest }
  ) {
    try {
      const recipeInst = await Recipe.findByPk(recipeId);
      const author = await recipeInst.getAuthor();
      if (authorId) throw new Error("Can't update authorId");
      if (userId !== author.id)
        throw new Error("User is not the Author of this Recipe");
      await recipeInst.update(rest);
      if (ingredients.length >= 0) {
        await Promise.all(
          ingredients.map(async ({ name, quantity, unit }) => {
            let IngredientInst = await findOrCreateIngredientInst(name);
            await recipeInst.removeIngredient(IngredientInst);
            await recipeInst.addIngredient(IngredientInst, {
              through: { quantity, unit },
            });
          })
        );
      }
      if (instructions.length >= 0) {
        await Instruction.destroy({ where: { RecipeId: recipeInst.id } });
        const InstructionInstList = await Instruction.bulkCreate(
          instructions.map((step, index) => {
            return { step, order: index + 1 };
          })
        );
        await recipeInst.setInstructions(InstructionInstList);
      }
      const result = await this.findRecipeById(recipeId);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteRecipe(userId, recipeId) {
    try {
      const recipeInst = await Recipe.findByPk(recipeId);
      const author = await recipeInst.getAuthor();

      if (userId !== author.id)
        throw new Error("User is not the Author of this Recipe");
      const result = await recipeInst.destroy();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
};
