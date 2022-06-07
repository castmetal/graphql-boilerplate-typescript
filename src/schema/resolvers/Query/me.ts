export default {
  name: "me",
  typeDef: `
    type Query {
      me: User
    }

    type User {
      example: String!
    }
  `,
  query: `
    me: User
  `,
  resolver: async (_, args, { dataSources }) => {
    return dataSources.User.me();
  },
};
