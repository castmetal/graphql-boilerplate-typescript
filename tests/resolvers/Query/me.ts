import chai from 'chai';
import sinon from 'sinon';

import meResolver from '../../../src/schema/resolvers/Query/me';

const { expect } = chai;

describe('[resolver] Query { question(id: ID!) }', () => {
  it('Should pass through question id to datasource as url param', async () => {
    const dataSources = {
      User: {
        me: sinon.stub().returns({ data: { user: {} } }),
      },
    };
    const args = {
      id: 'fake-id',
    };
    meResolver(null, args, { dataSources });
    const spyCall = dataSources.User.me.getCall(0);
    expect(spyCall).to.exist();
    expect(spyCall.args).to.have.length(1);
    expect(spyCall.args[0]).to.deep.equal('fake-id');
  });
});
