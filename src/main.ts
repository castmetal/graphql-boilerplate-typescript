import * as express from 'express';
import * as session from 'express-session';
import * as http from 'http';
import { ApolloServer } from 'apollo-server-express';
import apolloServerConfig from './apollo-server-config';

// Import and init all models
// import './models';


const app = express();

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'YOUR_VERY_SECRET_KEY_HERE',
  cookie: {
    secure: false,
  },
}));

const apolloServer = new ApolloServer(apolloServerConfig);

apolloServer.applyMiddleware({
  app,
  cors: {
    origin: (origin, cb) => {
      // TODO: Check if origin is allowed
      cb(null, true);
    },
    credentials: true,
  },
});


const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`);
});
