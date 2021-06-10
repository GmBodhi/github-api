//@ts-check
"use strict";
const Collection = require("@discordjs/collection");

class BaseManager {
  constructor({ client, url }) {
    this.client = client;
    this.url = url;
    this.cache = new Collection();
  }

  add(id, data) {
    this.cache.set(id, data);
    return data;
  }

  resolve(id) {
    return this.cache.get(id) ?? null;
  }
}

module.exports = BaseManager;
