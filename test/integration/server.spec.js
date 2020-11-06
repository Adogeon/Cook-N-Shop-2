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
const app = require("../../src/app");

describe("POST functionality", () => {
  context("connection test prior to connecting to database", () => {
     it("allow POST with JSON encoding", (done) => {
      request(app).post('/graphql').send({query: '{test}'}).then(response => {
        expect(response.status).to.equal(200);
        expect(response.text).to.equal('{"data": "Hello World!"}')
      })
    }),
  })
});
