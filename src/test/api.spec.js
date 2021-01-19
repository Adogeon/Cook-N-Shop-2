const { expect } = require("chai");

const UserApi = require("../graphql/localAPI/User");
const RecipeApi = require("../graphql/localAPI/Recipe");
const IngredientApi = require("../graphql/localAPI/Ingredient");

const bcrypt = require("bcryptjs");

const db = require("../database/models");
const User = require("../graphql/localAPI/User");

before(async function () {
  await db.sequelize.sync();
  console.log("Connecting to the database");
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
