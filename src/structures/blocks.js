//@ts-check
"use strict";
const User = require("./user");

class Blocks {
  constructor(client) {
    this.client = client;
  }

  async list() {
    return this.client.api.user.blocks.get().then(({ r }) => {
      r.forEach((u) => (u = new User(r, { client: this.client })));
      return r;
    });
  }

  async has(username) {
    return this.client.api.user
      .blocks(username)
      .get({ _: true })
      .then(({ r, res }) => {
        if ([204, 404].includes(res.status))
          return res.status === 204 ? true : false;
        throw new Error(res.statusText);
      });
  }

  async unBlock(username) {
    return await this.client.api.user.blocks(username).put();
  }

  async block(username) {
    return await this.client.api.user.blocks(username).delete();
  }
}

module.exports = Blocks;
