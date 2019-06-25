import * as express from 'express';
import * as http from 'http';
import * as request from 'request-promise';
import { ApolloServer } from 'apollo-server-express';
import * as chai from 'chai';
import * as dirtyChai from 'dirty-chai';
import apolloServerConfig from '../src/apollo-server-config';

const TEST_SERVER_PORT = process.env.TEST_SERVER_PORT || 5555;


// Add here chai plugins / utilities
chai.use(dirtyChai);

export const startTestServer = () => new Promise((resolve) => {
  const app = express();
  const apolloServer = new ApolloServer(apolloServerConfig);
  apolloServer.applyMiddleware({ app });
  const httpServer = http.createServer(app);
  httpServer.listen(TEST_SERVER_PORT, () => {
    // console.log(`Test server is running at http://localhost:${TEST_SERVER_PORT}`);
    resolve(httpServer);
  });
});


export const requestGraphql = async (query, { logged }) => {
  const headers : any = {};
  if (logged) {
    headers.Authorization = 'Bearer iambatman';
  }
  const r = await request.post(`http://localhost:${TEST_SERVER_PORT}/graphql`, { json: true, body: { query }, headers });
  return Promise.resolve(r);
};
