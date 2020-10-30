const { join } = require("path");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");

const schemaWithoutResolver = loadSchemaSync(
  join(__dirname, "./schema.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const resolvers = require("./resolvers")

const schema = addResolversToSchema({
  schema: schemaWithoutResolver,
  resolvers,
});

module.exports = schema;
