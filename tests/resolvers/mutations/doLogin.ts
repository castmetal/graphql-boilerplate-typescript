import chai from 'chai';
import sinon from 'sinon';

import doLogin from '../../../src/mutations/do-login';

const { expect } = chai;

describe('[resolver] Mutation { userAnswer }', () => {
  it('Should parse question answer by user and get success response', async () => {
    const datasources : any = {
      User: {
        login: sinon.stub().returns({ data: { answer: [] } }),
      },
    };
    const session : any = {};
    const args = {
      input: {
        alternative_ids: ['id-alternative-1'],
        correct: true,
        question_id: 'id-question1',
        user_id: 'user-1',
      },
    };
    await doLogin.resolver(null, args, { session, datasources });
    const spyCall = datasources.User.login.getCall(0);
    expect(spyCall).to.exist();
    expect(spyCall.args).to.have.length(1);
    expect(datasources.User.login.getCall(0).args[0]).to.be.equal('id-question1');
  });
});
