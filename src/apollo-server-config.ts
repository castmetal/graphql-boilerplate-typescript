// Schema typeDefs and Resolvers
import schemaTypeDefs from "./schema";
import schemaResolvers from "./schema/resolvers";
import dataSources from "./datasources";
import mocksResolvers from "./mocks";
import mockContext from "./mocks/context";
import { mutationTypeDefs, mutationResolvers } from "./mutations";

// import { subscriptionTypeDefs, subscriptionResolvers } from './subscriptions';

const typeDefs = schemaTypeDefs.concat(mutationTypeDefs as any);
const resolvers = Object.assign(
  schemaResolvers,
  mutationResolvers /* , subscriptionResolvers */
);

const isMockEnabled = process.env.MOCKS === "true";

// Generate context based on request
const context = async ({ req, connection }) => {
  if (connection) {
    return {};
  }
  const token = req.headers.Authorization;
  return {
    token,
  };
};

const generateDatasources = (datasourcesArray) => {
  const datasources = {};

  for (const DataSource of datasourcesArray) {
    datasources[DataSource.name] = new DataSource();
  }

  return datasources;
};

export default {
  typeDefs,
  resolvers,
  mocks: isMockEnabled ? mocksResolvers : null,
  context: isMockEnabled ? mockContext : context,
  csrfPrevention: true,
  dataSources: () => generateDatasources(dataSources),
  subscriptionsPath: "/subscriptions",
  playground: {
    settings: {
      "editor.cursorShape": "line",
      "request.credentials": "include", // This is not working: https://github.com/prisma/graphql-playground/issues/748#issuecomment-412524510
    },
  },
};
