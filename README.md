### graphql-boilerplate-typescript

See more details at [their repository on GitLab](https://github.com/castmetal/graphql-boilerplate-typescript)



## Developer Guide

### Setup and Run

1 - Installing Dependencies

```bash
$ npm install
```

2 - Run development server

```bash
$ npm run build
$ npm run start
🚀 Server ready at http://localhost:4000/graphql
🚀 Subscriptions ready at ws://localhost:4000/graphql
```


### Creating Schema

To create a schema, follow the steps below:

1 - Go to `src/schema/index.js` and create the schema typeDef.

2 - Now it's time to create the Schema resolver. Create a resolver file in `src/schema/resolvers`.


### Creating Mutations

To create a schema, follow the steps below:

1 - Go to `src/mutations` folder.

2 - Create a mutation file like below:

```js
export default {
  name: 'myMutation',
  typeDef: `
    input MyMutationInput {
      email: String!
    }
    type MyMutationPayload {
      user: User
    }
  `,
  mutation: `
    myMutation(input: MyMutationInput): MyMutationPayload
  `,
  resolver: async (_, args, { user }) => {
    // Add mutation resolver here
  },
};
```

### Mock & Playground

We have a mock data that follows the real use case of the project. All mock resolvers are located on folder: `src/mocks`

To enable mocks, just set the environment variable: `MOCKS=true`

#### Available Mocks

##### Queries (Root)

- [X] me: User

##### Mutations
- [X] DoLogin


#### Private Queries & Mutations (Auth required)

We can make queires and mutations as a user. See the mock user data below:

##### Login

Email: bruce.wayne@gmail.com

Password: batpassword

##### Auth Token

Token: iambatman


```json
{
  "Authorization": "Bearer iambatman"
}
```

> Tip: use the JSON above to test as user in GraphQL Playground.
