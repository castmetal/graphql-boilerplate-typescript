import * as chai from "chai";
import * as sinon from "sinon";

import meResolver from "../../../src/schema/resolvers/Query/me";

const { expect } = chai;

describe("[resolver] Query { me() }", () => {
  it("Should pass me", async () => {
    const dataSources = {
      User: {
        me: sinon.stub().returns({ data: { user: { example: "example" } } }),
      },
    };
    const args = null;

    const spyCall = await meResolver.resolver(null, args, { dataSources });
    expect(JSON.stringify(spyCall)).to.be.equals(
      JSON.stringify({ data: { user: { example: "example" } } })
    );
  });
});
