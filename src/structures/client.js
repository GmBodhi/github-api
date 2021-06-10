//@ts-check
"use strict";
const rest = require("../utils/rest");
const User = require("./clientuser");
const Event = require("events");
const UserManager = require("../managers/usermanager");

class Client extends Event {
  constructor(options = {}) {
    super();
    this.token = options.token ?? null;
    this.ready = false;
    this.user = null;
    this.users = new UserManager({ client: this, url: null });
    if (this.token)
      this.api.user
        .post({})
        .then((r) => {
          this.user = new User(r, { client: this });
          this.ready = true;
          this.emit("ready");
        })
        .catch((e) => {
          throw new Error(e);
        });
    else {
      this.ready = true;
      this.emit("ready");
    }
  }

  get api() {
    return rest(this.token);
  }
}

module.exports = Client;
