// With this function we can generate the context based on request for Mock

import data from './data';

export default async ({ req, connection }) => {
  if (connection) {
    return {};
  }

  let user = null;

  if (req.headers.authorization === 'Bearer iambatman') {
    user = data.users['id-user-bruce-wayne'];
  }

  return {
    user,
  };
};
