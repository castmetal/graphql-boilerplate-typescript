import { GraphQLScalarType, Kind } from "graphql";

import * as glob from "glob";
import * as path from "path";

const queries = [];

let queryFiles = glob
  .sync(path.resolve(__dirname, "./Query/*.ts"))
  .map((p) => path.basename(p));

queryFiles.forEach((queryFile) => {
  const Query = require(`./Query/${queryFile}`).default; // eslint-disable-line global-require,import/no-dynamic-require
  queries.push(Query);
});

const queryResolvers = [];

let queryResolverFiles = glob
  .sync(path.resolve(__dirname, "./QueryResolvers/**/*.ts"))
  .map((p) => p);

queryResolverFiles.forEach((queryResolverFile) => {
  const name = path.basename(queryResolverFile);
  const splitName = queryResolverFile.split("/QueryResolvers/");

  const nameFolder = splitName[1].replace("/" + name, "");

  const QueryResolver = require(`${queryResolverFile}`).default; // eslint-disable-line global-require,import/no-dynamic-require
  queryResolvers.push({ name: nameFolder, resObj: QueryResolver });
});

export const allQueryResolvers = { Query: {} };

queries.forEach((q) => {
  allQueryResolvers.Query[q.name] = q.resolver;
});

export const resolvers = {};

for (const item of queryResolvers) {
  let obj = {};

  obj[item.resObj.name] = item.resObj.resolver;
  resolvers[item.name] = obj;
}

export default {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
  ...allQueryResolvers,
  ...resolvers,
};
