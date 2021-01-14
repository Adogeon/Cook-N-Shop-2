const { join } = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadSchema } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

const typeDefs = await loadSchema(join(__dirname, "./User.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const resolvers = require("./resolver.js");

const userSchema = makeExecutableSchema(typeDefs, resolvers);

module.exports = {
  schema: userSchema,
};
