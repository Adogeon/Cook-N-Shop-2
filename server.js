require("dontevn").config();

const db = require("./models");
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

const server = new GraphQLServer({typeDefs, resolvers})

//setting db sync options
let syncOptions = {force: true};

if(process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//syncing out server before starting server
db.sequelize.sync(syncOptions).then (() => {
  server.start(() => console.log('Server is running on localhost:4000'))
})


