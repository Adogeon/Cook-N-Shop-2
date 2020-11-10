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
      const query = `
        query findRecipeById($id: ID!) {
          recipeById(id: $id) {
            __typename
            ... on ErrorResult {
                code
                message
            }
            ... on Recipe {
              id
              name
              ingredient { 
                name
                quantity
                unitOfMeasure
              }
            }
          }
        }`;

      it("should return data object if found", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "findRecipeById",
            variables: { id: "1" },
          })
          .then((response) => {
            console.log(response.body);
            expect(response.status).to.equal(200);
            data = response.body.data.recipeById;
            console.log(data);
            expect(data.id).to.be.equal("1");
            done();
          });
      });
      it("should return error code 'RECIPE_NOT_FOUND' if not found", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "findRecipeById",
            variables: { id: "4" },
          })
          .then((response) => {
            expect(response.status).to.equal(200);
            data = response.body.data.recipeById;
            expect(data.code).to.be.equal("RECIPE_NOT_FOUND");
            done();
          });
      });
    });

    context("Query search", () => {
      const query = `
        query search($filter: String!) {
          recipe(filter: $filter) {
            ... on Recipe {
              id
              name
            }
          }
        }`;
    });
  });
});
