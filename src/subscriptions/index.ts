const subscriptions = [
];

const rootSubscription = `
  type Subscription {
    ${subscriptions.map(n => n.subscription).join('\n')}
  }
`;

export const subscriptionTypeDefs = [rootSubscription];
export const subscriptionResolvers = { Subscription: {} };

subscriptions.forEach((m) => {
  subscriptionTypeDefs.push(m.typeDef);
  subscriptionResolvers.Subscription[m.name] = m.config;
});
