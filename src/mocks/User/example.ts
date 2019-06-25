import { values, filter } from 'lodash';
import AuthRequired from '../../middlewares/resolvers/AuthRequired';

import mockData from '../data';

const users = values(mockData.users);

export default AuthRequired((users) => {
  
  return {
    example: 'Example'
  };
});
