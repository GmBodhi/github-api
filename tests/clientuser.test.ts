import { expect } from "chai";
import { Client } from "../dist";

export default function (client: Client, getRandom: any) {
  describe("Test clientuser", function () {
    this.timeout(10000);
    expect(client.user, "user not null").not.to.be.equal(null);
    describe("changing user's profile details", function () {
      this.timeout(20000);
      it("change user's name to a random value", (done) => {
        client.user?.setName(getRandom()).then(() => done());
      });
      it("change user's bio to a random value", (done) => {
        client.user?.setBio(getRandom()).then(() => done());
      });
      it("change user's location to a random value", (done) => {
        client.user?.setLocation(getRandom()).then(() => done());
      });
      it("change user's twitter username to a random value", (done) => {
        client.user?.setTwitterUsername(getRandom()).then(() => done());
      });
      it("change user's blog url", (done) => {
        client.user?.setBlog("http://eximstudio.com").then(() => done());
      });
      it("set everything to expected values", (done) => {
        client.user?.setBlog("http://github.com/GmBodhi/github-api");
        client.user
          ?.setBio("This is a test account for testing GmBodhi/github-api")
          .then(() => done());
      });
    });
  });
}
