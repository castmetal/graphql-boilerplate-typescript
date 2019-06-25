import { startTestServer, requestGraphql } from '..';
import chai from 'chai';

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
          example
        }
      }
    `, {
      logged: false,
    });
    const { data } = response;
    expect(data.doLogin.example).to.exist();
    expect(data.doLogin.example).to.be.equals('iambatman');
  });
});
