import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Query {
    me: User
  }

  type User {
    example: String!
  }
`;

export default [typeDefs];
