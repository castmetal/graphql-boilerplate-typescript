import { startTestServer, requestGraphql } from '../index';
import * as chai from 'chai';
import { before, after } from 'mocha';

const { expect } = chai;

describe('[mutation] doLogin', () => {
  let server;
  before(async () => {
    try {
      server = await startTestServer();
    } catch (e) {
      console.error(e);
    }
  });
  after(async () => {
    server.close();
  });
  it('Should logIn successfully with correct email and password', async () => {
    const response = await requestGraphql(`
      mutation {
        doLogin(input: {
          email: "bruce.wayne@editorasanar.com",
          password: "batpassword",
        }) {
          user {
            example
          }
        }
      }
    `, {
      logged: false,
    });
    const { data } = response;
    expect(data.doLogin.user.example).to.be.equals('string');
  });
});
