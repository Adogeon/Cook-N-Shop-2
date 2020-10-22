require("dotenv").config();

//const db = require("./database/models");
const PORT = process.env.PORT || 3000;
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

//setting up graphQLServer

const app = express();
const schema = require("./database/graphql/index");
/*const context = {
  db,
};*/

const graphqlMiddleware = (options = {}) =>
  graphqlHTTP({
    schema: schema,
    context: {},
    ...options,
  });

//setting db sync options
let syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.use("/", graphqlMiddleware());

app.use("/playground", graphqlMiddleware({ graphiql: true }));
//syncing out server before starting server
/*db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
});*/

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
