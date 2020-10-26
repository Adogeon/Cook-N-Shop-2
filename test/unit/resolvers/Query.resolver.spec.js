const { join } = require("path");
const { match, stub, resetHistory } = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const { expect } = chai;

const { makeMockModels } = require("sequelize-test-helpers");
const { recipe } = require("../../../src/database/graphql/resolvers/Query");

describe("/database/graphql/resolver/Query.js", () => {
  //setting mock for Recipe models
  const Recipe = { findAndCountAll: stub() };
  const mockModels = makeMockModels(
    { Recipe },
    join(__dirname, "../../../src/database/models")
  );
  const testContext = {
    db: mockModels,
  };

  let result;

  describe("Recipe", () => {
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
  });
});
