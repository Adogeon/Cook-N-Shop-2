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

const IngredientModel = require("../../../src/database/models/ingredients");

describe("database/models/Ingredients", () => {
  const Model = IngredientModel(sequelize, dataTypes);
  const instance = new Model();

  checkModelName(Model)("Ingredient");

  context("properites", () => {
    ["name"].forEach(checkPropertyExists(instance));
  });

  context("association", () => {
    const Recipe = "some Recipe";

    before(() => {
      Model.associate({ Recipe });
    });

    it("defined a belongToMany association with Recipe through Measurement", () => {
      expect(Model.belongsToMany).to.have.been.calledWith(Recipe, {
        through: "Measurement",
      });
    });
  });
});
