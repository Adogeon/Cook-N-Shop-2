//intended for server test

//Steps:
// - set up mocking sequelize database
// - adding mock data
// - send in graphql query for
//   - query recipe
//   - create new recipe
//   - query ingredients
const { expect } = require("chai");
const request = require("supertest");
const { app, db } = require("../../src/app");

describe("POST functionality", () => {
  context("connection test prior to connecting to database", () => {
    it("allow POST with JSON encoding", (done) => {
      request(app)
        .post("/playground")
        .send({ query: "{hello}" })
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.text).to.equal('{"data":{"hello":"Hello World!"}}');
          done();
        });
    });

    it("accept variables via POST", (done) => {
      request(app)
        .post("/playground")
        .send({
          query: `{hello(name: "testBot")}`,
        })
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.text).to.equal('{"data":{"hello":"Hello testBot"}}');
          done();
        });
    });
  });

  context("connection test with the test database", () => {
    before(async () => {
      await db.sequelize.sync({ logging: false });
      //letting sequelize to log as needed
      //await db.sequelize.sync();
    });

    context("Query recipeById", () => {
      it("should return data object if found", (done) => {
        request(app)
          .post("/playground")
          .send({
            query: `{
            recipeById(id: 1) {
              id
              name
            }
          }`,
          })
          .then((response) => {
            expect(response.status).to.equal(200);
            data = response.body.data.recipeById;
            expect(data.id).to.be.equal("1");
            done();
          });
      });
      it("should return error object if not found");
    });

    it("return correct result when query for the recipe with id 1", (done) => {
      request(app)
        .post("/playground")
        .send({
          query: `{recipe(filter: "Recipe A") {
            recipes {
              id
              name
            }
            count
          }}`,
        })
        .then((response) => {
          expect(response.status).to.equal(200);
          data = response.body.data.recipe;
          expect(data.recipes[0].id).to.be.equal("1");
          done();
        });
    });
  });
});
