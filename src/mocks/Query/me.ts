import AuthRequired from '../../middlewares/resolvers/AuthRequired';


export default AuthRequired((_, args, ctx) => ctx.user);
