const db = require("../database/models");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

//setting up graphQLServer

const app = express();
app.use(express.json());
const { schema } = require("./graphql");
const context = {
  Ingredient: db.Ingredient,
  Recipe: db.Recipe,
  Measurement: db.Measurement,
  Instruction: db.Instruction,
};

const graphqlMiddleware = (options = {}) =>
  graphqlHTTP({
    schema: schema,
    context,
    ...options,
  });

middleLog = (req, res, next) => {
  console.log("Req:", req.body);
  console.log("Res", res.body);
  next();
};

//app.use(middleLog);

app.use("/playground", graphqlMiddleware({ graphiql: true }));

module.exports = {
  app,
  db,
};
