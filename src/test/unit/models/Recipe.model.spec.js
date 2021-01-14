const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const { expect } = chai;

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const RecipeModel = require("../../../src/database/models/recipes");

describe("database/models/Recipe", () => {
  const Model = RecipeModel(sequelize, dataTypes);
  const instance = new Model();

  checkModelName(Model)("Recipe");

  context("properties", () => {
    ["name", "description", "instructions", "imageURL"].forEach(
      checkPropertyExists(instance)
    );
  });

  context("association", () => {
    const Ingredient = "some Ingredient";

    before(() => {
      Model.associate({ Ingredient });
    });

    it("defined a belongToMany association with Ingredient through Measurement", () => {
      expect(Model.belongsToMany).to.have.been.calledWith(Ingredient, {
        through: "Measurement",
      });
    });
  });
});
