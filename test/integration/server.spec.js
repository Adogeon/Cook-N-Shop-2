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
const { ingredients } = require("../../src/graphql/resolvers/Recipe");

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
      //await db.sequelize.sync({ logging: false });
      //letting sequelize to log as needed
      await db.sequelize.sync();
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
              ingredients {
                ingredient {
                  name
                }
                quantity
                unit
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
            expect(response.status).to.equal(200);
            const data = response.body.data.recipeById;
            expect(data.id).to.be.equal("1");
            expect(data.ingredients).to.be.an("array").with.length(2);
            done();
          });
      });
      it("should return error code 'RECIPE_NOT_FOUND' if not found", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "findRecipeById",
            variables: { id: "99" },
          })
          .then((response) => {
            expect(response.status).to.equal(200);
            const data = response.body.data.recipeById;
            expect(data.code).to.be.equal("RECIPE_NOT_FOUND");
            done();
          });
      });
    });

    context("Query search", () => {
      const query = `
        query search($filter: String!) {
          allRecipe(filter: $filter) {
            recipes {
              id
              name
            }
            count
          }
        }`;
      it("should return an array of result", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "search",
            variables: { filter: "Recipe" },
          })
          .then((response) => {
            expect(response.status).to.equal(200);
            const data = response.body.data.allRecipe;
            expect(data.count).to.be.equal(2);
            expect(data.recipes).to.be.an("array").with.length(2);
            done();
          });
      });
      it("should return empty array if there is no result", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "search",
            variables: { filter: "asdfed" },
          })
          .then((response) => {
            expect(response.status).to.be.equal(200);
            const data = response.body.data.allRecipe;
            expect(data.count).to.be.equal(0);
            expect(data.recipes).to.be.an("array").with.length(0);
            done();
          });
      });
    });

    context("Mutation newRecipe", () => {
      const query = ` mutation createRecipe ($newRecipe: RecipeInput) {
        newRecipe(input: $newRecipe) {
          id
          name
        }
      }`;

      it("should return a new recipe when sucessful", () => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "createRecipe",
            variables: {
              newRecipe: {
                name: "Omellete",
                ingredients: [],
              },
            },
          })
          .then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body.newRecipe.name).to.be.equal("Omellete");
          });
      });
    });
  });
});
