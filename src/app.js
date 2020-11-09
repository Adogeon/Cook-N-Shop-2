const db = require("../models");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

//setting up graphQLServer

const app = express();
const { schema } = require("./graphql");
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

app.use("/playground", graphqlMiddleware({ graphiql: true }));

module.exports = {
  app,
  db,
};
