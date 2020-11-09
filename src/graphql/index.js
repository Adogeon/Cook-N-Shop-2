const { join } = require("path");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");

// Load schema from the file
const schemaWithoutResolver = loadSchemaSync(
  join(__dirname, "./schema.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

// Write some resolvers
const resolvers = require("./resolvers");

// Add resolvers to the schema
const schema = addResolversToSchema({
  schema: schemaWithoutResolver,
  resolvers,
});

module.exports = {
  schema,
};
