const { join } = require("path");
const { match, stub, resetHistory } = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const { expect } = chai;

const { makeMockModels } = require("sequelize-test-helpers");
const { recipe } = require("../../../src/database/graphql/resolvers/Query");

const SequelizeMock = require("sequelize-mock");

describe("/database/graphql/resolver/Query.js", () => {
  //setting mock for Recipe models
  const Recipe = { findAndCountAll: stub() };
  const mockModels = makeMockModels(
    { Recipe },
    join(__dirname, "../../../src/database/models")
  );

  const dbMock = new SequelizeMock();
  const RecipeMock = dbMock.define("Recipe", {
    name: "Test recipe",
    description: "This is a test recipe",
    instruction: "Take your alphabet soup and spell out T-E-S-T",
  });

  const testContext = {
    db: mockModels,
  };

  let result;

  /*describe("Recipe", () => {
    before(async () => {
      Recipe.findAndCountAll.resolves({ count: 0, rows: [] });
      result = await recipe({}, { filter: "test" }, testContext, {});
    });

    after(resetHistory);

    context("it found nothing", () => {
      it("should called Recipe.findAndCountAll", () => {
        expect(Recipe.findAndCountAll).to.have.been.calledOnce;
      });

      it("should return empty array", () => {
        expect(result.recipes).to.be.an("array").that.is.empty;
        expect(result.count).to.be.equal(0);
      });
    });
  });*/

  describe("Recipe with sequelize-mock", () => {
    before(async () => {
      RecipeMock.$queueResult({
        rows: [
          RecipeMock.build({ name: "test 1" }),
          RecipeMock.build({ name: "test 2" }),
        ],
        count: 2,
      });

      result = await recipe(
        {},
        { filter: "test" },
        { db: { Recipe: dbMock.models.Recipe } },
        {}
      );
    });

    after(() => {
      RecipeMock.$clearQueue();
    });

    context("it found and count all recipe", () => {
      it("should return an array with length two and count of two", () => {
        expect(result.recipes).to.be.an("array").that.have.lengthOf(2);
        expect(result.count).to.be.equal(2);
      });
    });
  });
});
