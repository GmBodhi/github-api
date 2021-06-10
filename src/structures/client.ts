const rest = require("../utils/rest");
const Events = require("events");
const UserManager = require("../managers/usermanager");

interface ClientOptions {
  token?: string | null,
  cache?: boolean
}

class Client extends Events {
  token?: string|null;
  cache?: boolean|null;
  constructor(options: ClientOptions = {}) {
    super();
    this.token = options.token ?? null;
    this.cache =  options.cache ?? true;
    this.ready = false;
    this.user = null;
    this.users = new UserManager({ client: this, url: null });
    if (this.token)
      this.api.user
        .post({})
        .then((r: Object) => {
          this.user = new User(r, { client: this });
          this.ready = true;
          this.emit("ready");
        })
        .catch((e: any) => {
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
