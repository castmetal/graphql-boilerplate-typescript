import * as glob from "glob";
import * as path from "path";
import { pull } from "lodash";

const mutations = [];

let mutationFiles = glob
  .sync(path.resolve(__dirname, "./*.ts"))
  .map((p) => path.basename(p));

mutationFiles = pull(mutationFiles, "index.ts");

mutationFiles.forEach((mutationFileFile) => {
  const Mutation = require(`./${mutationFileFile}`).default; // eslint-disable-line global-require,import/no-dynamic-require
  mutations.push(Mutation);
});

const rootMutation = `
  type Mutation {
    ${mutations.map((n) => n.mutation).join("\n")}
  }
`;

export const mutationTypeDefs: Array<string> = [rootMutation];
export const mutationResolvers = { Mutation: {} };

mutations.forEach((m) => {
  mutationTypeDefs.push(m.typeDef);
  mutationResolvers.Mutation[m.name] = m.resolver;
});
