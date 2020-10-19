require("dotenv").config();

const db = require("./database/models");
const PORT = process.env.PORT || 3000;

//setting up graphQLServer
const {GraphQLServer} = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
  },
}
const context = {
  db
}

const server = new GraphQLServer({typeDefs, resolvers, context})

//setting db sync options
let syncOptions = {force: true};

if(process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//syncing out server before starting server
db.sequelize.sync(syncOptions).then (() => {
  server.start({port: PORT},({port}) => console.log('Server is running on localhost:$s', port))
})


