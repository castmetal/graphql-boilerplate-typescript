import errors from '../../errors';
import mockData from '../data';


export default (_, args) => {
  const {
    email,
    password,
  } = args.input;

  if (email !== 'bruce.wayne@editorasanar.com' || password !== 'batpassword') {
    throw errors.INCORRECT_EMAIL_OR_PASSWORD;
  }

  return {
    user: mockData.users['id-user-bruce-wayne'],
    token: 'iambatman',
  };
};
