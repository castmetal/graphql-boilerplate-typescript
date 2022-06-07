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
    const meResponse = await dataSources.Users.me();
    return meResponse.user;
  },
};
