import errors from '../../../errors';

export default async (_, args, { dataSources }) => {
  
  return dataSources.User.me();
};
