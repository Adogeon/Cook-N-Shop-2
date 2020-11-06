const db = require("./database/models");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

//setting up graphQLServer

const app = express();
const schema = require("./database/graphql/index");
const context = {
  Ingredient: db.Ingredient,
  Recipe: db.Recipe,
  Measurement: db.Measurement,
};

const graphqlMiddleware = (options = {}) =>
  graphqlHTTP({
    schema: schema,
    context,
    ...options,
  });

//setting db sync options
let syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.use("/playground", graphqlMiddleware({ graphiql: true }));

module.exports = {
  default: app,
  db,
};
