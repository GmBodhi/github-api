import { expect } from "chai";

const assert = require("chai").assert;
const { Client } = require("../dist");
require("dotenv").config();

const client = new Client({
  token: process.env.TEST,
});

const getRandom = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();

describe("Login client and fetch a user", function () {
  this.timeout(10000);
  it("fetch gmbodhi", (done) => {
    client.users.fetch("gmbodhi").then((user: any) => {
      assert(typeof user !== "undefined", "got one user");
      done();
    });
  });
  it("login the client", (done) => {
    client.on("ready", () => {
      expect(client.user, "user not null").not.to.be.equal(null);
      done();
      console.log(`Logged in as ${client.user.login}`);
    });
  });
});
