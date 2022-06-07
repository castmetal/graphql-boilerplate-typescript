import { DocumentNode } from "graphql";

import * as glob from "glob";
import * as path from "path";
import { gql } from "apollo-server-express";

const queries = [];

let queryFiles = glob
  .sync(path.resolve(__dirname, "./resolvers/Query/*.ts"))
  .map((p) => path.basename(p));

queryFiles.forEach((queryFile) => {
  const Query = require(`./resolvers/Query/${queryFile}`).default; // eslint-disable-line global-require,import/no-dynamic-require
  queries.push(Query);
});

const rootQuery = gql`
  scalar Date
`;

export const queryTypeDefs: Array<DocumentNode> = [rootQuery];

queries.forEach((q) => {
  queryTypeDefs.push(q.typeDef);
});

export default queryTypeDefs;
