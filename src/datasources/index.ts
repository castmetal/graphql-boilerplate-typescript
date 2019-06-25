/*

Auto export all datasources

*/

import * as glob from 'glob';
import * as path from 'path';
import { pull } from 'lodash';

let datasourceFiles = glob.sync(path.resolve(__dirname, './*.js'))
  .map(p => path.basename(p));


datasourceFiles = pull(datasourceFiles, 'index.js');

const dataSources = [];

datasourceFiles.forEach((datasourceFile) => {
  const DataSource = require(`./${datasourceFile}`).default; // eslint-disable-line global-require,import/no-dynamic-require
  dataSources.push(DataSource);
});

export default dataSources;
