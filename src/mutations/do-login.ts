import errors from '../errors';

export default {
  name: 'doLogin',
  typeDef: `
    input DoLoginInput {
      email: String!
      password: String!
    }
    type DoLoginPayload {
      user: User
    }
  `,
  mutation: `
    doLogin(input: DoLoginInput): DoLoginPayload
  `,
  resolver: async (_, args, { session, dataSources }) => {
    const {
      email,
      password,
    } = args.input;
    try {
      if (!email || email.length === 0) {
        return Promise.reject(errors.INCORRECT_EMAIL_OR_PASSWORD);
      }

      return dataSources.User.login(email, password);

      return Promise.reject(errors.INCORRECT_EMAIL_OR_PASSWORD);
    } catch (e) {
      console.log(e);
      return Promise.reject(errors.INTERNAL_SERVER_ERROR);
    } 
  },
};
