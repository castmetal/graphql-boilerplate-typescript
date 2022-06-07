import * as chai from "chai";
import * as sinon from "sinon";

import doLogin from "../../../src/mutations/do-login";

const { expect } = chai;

describe("[resolver] Mutation { doLogin }", () => {
  it("Should login", async () => {
    const dataSources: Record<string, unknown> = {
      User: {
        login: sinon.stub().returns({ data: { user: { example: "Example" } } }),
      },
    };
    const session: Record<string, unknown> = {};
    const args = {
      input: {
        password: "string",
        email: "string",
      },
    };
    const response = await doLogin.resolver(null, args, {
      session,
      dataSources,
    });

    expect(response.data.user.example).to.be.equal("Example");
  });
});
