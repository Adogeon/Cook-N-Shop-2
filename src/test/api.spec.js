const { expect } = require("chai");

const UserApi = require("../graphql/localAPI/User");
const RecipeApi = require("../graphql/localAPI/Recipe");
const IngredientApi = require("../graphql/localAPI/Ingredient");

const bcrypt = require("bcryptjs");

const db = require("../database/models");

before(async function () {
  await db.sequelize.sync();
  console.log("Connecting to the database");
});

after(async function () {
  await db.sequelize.drop();
});

describe("UserApi", function () {
  describe("addNewUser", function () {
    let result;
    before(async function () {
      const password = bcrypt.hashSync("password", 10);
      const newUser = {
        username: "test",
        email: "test@email.com",
        password,
      };

      result = await UserApi.addNewUser(newUser);
    });

    after(async function () {
      const newUserInst = await db.User.findByPk(result.id);
      await newUserInst.destroy();
    });

    it("should add a new user to the database", async function () {
      newUserId = result.id;
      const dbRecord = await db.User.findByPk(newUserId);
      expect(dbRecord.username).to.equal("test");
      expect(dbRecord.password).to.not.equal("password");
    });
  });

  describe("getUserById", function () {
    let userInst;
    before(async function () {
      const password = bcrypt.hashSync("password", 10);
      const newUser = {
        username: "test",
        email: "test@email.com",
        password,
      };
      userInst = await db.User.create(newUser);
    });

    after(async function () {
      await userInst.destroy();
    });

    it("should return a user plain object", async function () {
      const result = await UserApi.getUserById(userInst.id);
      expect(result).to.be.an("Object");
      expect(result).to.not.equal(userInst);
      expect(result.username).to.equal(userInst.username);
    });
  });

  describe("updateUserById", function () {
    let userInst;
    before(async function () {
      const password = bcrypt.hashSync("password", 10);
      const newUser = {
        username: "test",
        email: "test@email.com",
        password,
      };
      userInst = await db.User.create(newUser);
    });

    after(async function () {
      await userInst.destroy();
    });

    it("should return a user plain object after update", async function () {
      const result = await UserApi.updateUserById(userInst.id, {
        email: "test@not-email.edu",
      });
      expect(result.email).to.equal("test@not-email.edu");
      await userInst.reload();
      expect(userInst.email).to.equal("test@not-email.edu");
      expect(result).to.not.equal(userInst);
    });
  });

  describe("deleteUserById", function () {
    let userInst;
    before(async function () {
      const password = bcrypt.hashSync("password", 10);
      const newUser = {
        username: "test",
        email: "test@email.com",
        password,
      };
      userInst = await db.User.create(newUser);
    });

    it("should delete a user plain object after update", async function () {
      await UserApi.deleteUserById(userInst.id);
      try {
        await userInst.reload();
      } catch (err) {
        expect(err.name).to.be.equal("SequelizeInstanceError");
      }
    });
  });
});

describe("#IngredientApi", function () {
  describe("getIngredientById", function () {
    before(async function () {
      ingredientInst = await db.Ingredient.create({
        name: "test-ingredient",
      });
    });
    after(async function () {
      await ingredientInst.destroy();
    });
    it("should get the ingredient by id", async function () {
      let ingredientInst;
      const result = await IngredientApi.getIngredientById(ingredientInst.id);
      expect(result.name).to.equal("test-ingredient");
      expect(result).to.be.an("Object");
    });
  });
  describe("getAllIngredient", function () {
    before(async function () {
      await db.Ingredient.bulkCreate([
        { name: "Onion" },
        { name: "Egg" },
        { name: "Food Colour" },
        { name: "Food Additive" },
      ]);
    });
    after(async function () {
      await db.Ingredient.bulkDestroy();
    });
    it("should return all ingredient when call without parameter", async function () {
      const result = await IngredientApi.getAllIngredient({});
      expect(result).to.be.an("Object");
      expect(result).to.haveOwnProperty("count", 4);
      expect(result).to.haveOwnProperty("ingredients");
      expect(result.ingredients).to.be.an("Array").with.lengthOf(4);
    });
    it("should return only ingredients that match with the parameter", async function () {
      const result = await IngredientApi.getAllIngredient("Food");
      expect(result).to.be.an("Object");
      expect(result).to.haveOwnProperty("count", 2);
      expect(result).to.haveOwnProperty("ingredients");
      expect(result.ingredients).to.be.an("Array").with.lengthOf(2);
    });
  });
  describe("findOrCreateIngredient", async function () {
    let preIngredientInst;
    before(async function () {
      preIngredientInst = await db.Ingredient.create({
        name: "ingredient-A",
      });
    });
    after(async function () {
      db.Ingredient.bulkDestroy();
    });
    it("should return a matching ingredient if already exist", async function () {
      const result = await IngredientApi.findOrCreateIngredientInst(
        "ingredient-A"
      );
      expect(result).to.deep.equal(preIngredientInst);
      expect(result.id).to.equal(preIngredientInst.id);
    });
    it("should return a new ingredient if there is not match", async function () {
      const result = await IngredientApi.findOrCreateIngredientInst(
        "Eye of Newt"
      );
      expect(result.id).to.not.equal(preIngredientInst.id);
    });
  });
});

// recipeAPI
//findRecipeById, createNewRecipe, updateRecipe, deleteRecipe
