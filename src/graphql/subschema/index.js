const { join } = require("path");
const fs = require("fs");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadSchema } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const {stitchSchemas} = require("@graph-tools/stitch")

let subSchema = [];

fs.readdirSync(__dirname)
  .filter((file) => {
    file.isDirectory();
  })
  .map((file) => {
    const directoryPath = join(__dirname,file);
    const typeDefs = await loadSchema(join(directoryPath,"schema.graphql"), {
      loaders: [ new GraphQLFileLoader()]
    });
    const resolvers = require(join(directoryPath,"resolver.js"))
    const executableSchema = makeExecutableSchema(typeDefs, resolvers);

    subSchemaList.push({
      [`${file.name}Schema`]: executableSchema
    })
  });

const gatewaySchema = stitchSchemas({subSchema});

module.exports = {
  schema: gatewaySchema
}

