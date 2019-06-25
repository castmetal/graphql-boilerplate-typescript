import { values, filter } from 'lodash';
import AuthRequired from '../../middlewares/resolvers/AuthRequired';

import mockData from '../data';

const alternatives = values(mockData.alternatives);

export default AuthRequired((question) => {
  const data = question.alternativesId.map(
    alternative => filter(alternatives, alt => alt.id === alternative)[0],
  );
  const count = data.length;
  return {
    data,
    count,
  };
});
