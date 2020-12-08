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
      //await db.sequelize.sync({ logging: false });
      //letting sequelize to log as needed
      await db.sequelize.sync();
    });

    describe("Query recipeById", () => {
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

    describe("Query search", () => {
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

    describe("Mutation newRecipe", () => {
      const query = ` mutation createRecipe ($newRecipe: RecipeInput) {
        newRecipe(input: $newRecipe) {
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
      }`;

      it("should return a new recipe when sucessful", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "createRecipe",
            variables: {
              newRecipe: {
                name: "Omellete",
                ingredients: [
                  {
                    name: "Eggs",
                    quantity: 4,
                    unit: null,
                  },
                  {
                    name: "Butter",
                    quantity: 2,
                    unit: "tablespoons",
                  },
                ],
              },
            },
          })
          .then((response) => {
            console.log(response.body);
            console.log(response.body.data.newRecipe);
            expect(response.status).to.be.equal(200);
            expect(response.body.data.newRecipe.name).to.be.equal("Omellete");
            expect(response.body.data.newRecipe.ingredients)
              .to.be.an("array")
              .with.lengthOf(2);
            done();
          });
      });
    });

    describe("Mutation updateRecipe", () => {
      const query = ` mutation updateRecipe ($id: ID, $updateRecipe: RecipeInput) {
        updateRecipe(id: $id, input: $updateRecipe) {
          name
          ingredients {
            ingredient {
              name
            }
            quantity
            unit
          }
        }
      }`;

      it("should return a new recipe when sucessful", (done) => {
        request(app)
          .post("/playground")
          .send({
            query,
            operationName: "updateRecipe",
            variables: {
              id: "3",
              updateRecipe: {
                name: "Omellete au fromage",
                ingredients: [
                  {
                    name: "Eggs",
                    quantity: 4,
                    unit: null,
                  },
                  {
                    name: "Butter",
                    quantity: 2,
                    unit: "tablespoons",
                  },
                  {
                    name: "Parmesan Cheese",
                    quantity: 1,
                    unit: "ounce",
                  },
                  {
                    name: "Gruyere Cheese",
                    quantity: 2,
                    unit: "ounces",
                  },
                ],
              },
            },
          })
          .then((response) => {
            expect(response.status).to.be.equal(200);
            const data = response.body.data.updateRecipe;
            expect(data.name).to.be.equal("Omellete au fromage");
            expect(data.ingredients).to.be.an("array");
            done();
          });
      });
    });
  });
});
