const { expect } = require("chai");
const { match, stub, resetHistory } = require("sinon");
const proxyquire = require("proxyquire");

const { makeMockModels } = require("sequelize-test-helpers");

describe("/database/graphql/resolver/Query.js", () => {
  //setting mock for Recipe models
  const Recipe = { findAndCountAll: stub() };
  const mockModels = makeMockModels({ Recipe });
  //
  const recipe = proxyquire("../../../src/database/graphql/resolvers/Query", {
    "../../models": mockModels,
  });

  let result;

  describe("Recipe", () => {
    before(async () => {
      Recipe.findAllAndCountAll.resolves({ count: 0, rows: [] });
      result = await recipe(parent, args, context, info);
    });

    after(resetHistory);

    context("it found nothing", () => {
      it("should called Recipe.findAndCountAll", () => {
        expect(Recipe.findAllAndCountAll).to.have.been.calledWith(
          match({ where: { id } })
        );
      });
      it("should return empty array"),
        () => {
          expect(result.recipe).to.be.an("array").that.is.empty;
          expect(result.count).to.be.equal(0);
        };
    });
  });
});
