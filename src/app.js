const db = require("../database/models");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const jwt = require("jsonwebtoken");

//setting up graphQLServer

const app = express();
app.use(express.json());
const { schema } = require("./graphql");

const JWT_SECRET = process.env.JWT_SECRET;
const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const authorizeMiddleWare = (req, res, next) => {
  const token = req.get("Authorization") || "";
  req.user = getUser(token.replace("Bearer ", ""));
  next();
};
app.use(authorizeMiddleWare);

const context = {
  Ingredient: db.Ingredient,
  Recipe: db.Recipe,
  Measurement: db.Measurement,
  Instruction: db.Instruction,
  User: db.User,
};

const graphqlMiddleware = (req, options = {}) =>
  graphqlHTTP({
    schema: schema,
    context: {
      ...context,
      currentUser: req.user.id || null,
    },
    ...options,
  });

app.use("/playground", graphqlMiddleware(req, { graphiql: true }));

module.exports = {
  app,
  db,
};
