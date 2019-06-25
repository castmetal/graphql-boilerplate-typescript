import doLogin from './do-login';
import { DocumentNode } from 'graphql';

const mutations = [
  doLogin,
];

const rootMutation = `
  type Mutation {
    ${mutations.map(n => n.mutation).join('\n')}
  }
`;

export const mutationTypeDefs: Array<any> = [rootMutation];
export const mutationResolvers = { Mutation: {} };

mutations.forEach((m) => {
  mutationTypeDefs.push(m.typeDef);
  mutationResolvers.Mutation[m.name] = m.resolver;
});
