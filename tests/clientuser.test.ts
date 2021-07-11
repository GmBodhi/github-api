import { expect } from "chai";

const assert = require("chai").assert;
const { Client } = require("../dist");
require("dotenv").config();

const client = new Client({
  token: process.env.TEST,
});

const getRandom = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();

describe("Login client and test clientuser", function () {
  this.timeout(10000);
  it("login the client", (done) => {
    client.on("ready", () => {
      expect(client.user, "user not null").not.to.be.equal(null);
      done();
      describe("changing user's profile details", function () {
        this.timeout(20000);
        it("change user's name to a random value", (done) => {
          client.user.setName(getRandom()).then(() => done());
        });
        it("change user's bio to a random value", (done) => {
          client.user.setBio(getRandom()).then(() => done());
        });
        it("change user's location to a random value", (done) => {
          client.user.setLocation(getRandom()).then(() => done());
        });
      });
    });
  });
});
