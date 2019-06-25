import { startTestServer, requestGraphql } from '..';
import chai from 'chai';

const { expect } = chai;

describe('[query] me', () => {
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
  it('Should return the correct user from context', async () => {
    const response = await requestGraphql(`
      query {
        me {
          example
        }
      }
    `, {
      logged: true,
    });
    const { data } = response;
    expect(data.me).to.exist();
    expect(data.me).to.deep.equals({
      example: 'example'
    });
  });
});
