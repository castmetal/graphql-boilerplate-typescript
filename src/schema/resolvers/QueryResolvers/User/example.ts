export default {
  name: "example",
  resolver: async (user, args, { dataSources }) => {
    return user.example + "_WithResolver";
  },
};
