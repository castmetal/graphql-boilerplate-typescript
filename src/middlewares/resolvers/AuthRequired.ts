import errors from '../../errors';

export default resolver => (parent, args, ctx) => {
  if (ctx.user) {
    return resolver(parent, args, ctx);
  }
  throw errors.AUTH_REQUIRED;
};
