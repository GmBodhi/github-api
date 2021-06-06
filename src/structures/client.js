//@ts-check
"use strict";
const rest = require("../utils/rest");
const User = require("./user");
const Event = require("events");
const UserManager = require("../managers/usermanager");

class Client extends Event {
  constructor(options = {}) {
    super();
    this.token = options.token ?? null;
    this.ready = false;
    this.user = null;
    this.users = new UserManager();
    if (this.token)
      this.api.user
        .post({})
        .then((r) => {
          this.user = new User(r, { client: this });
          this.ready = true;
        })
        .catch((e) => {
          throw new Error(e);
        });
  }

  get api() {
    return rest(this.token);
  }
}

module.exports = Client;
