import Events from "events";
import UserManager from "../managers/usermanager";
import { Response } from "node-fetch";
import ClientUser from "./clientuser";
import { RestManager } from "../utils";

interface ClientOptions {
  token?: string | null;
  cache?: boolean;
}

class Client extends Events.EventEmitter {
  public readonly token?: string | null;
  public readonly cache?: boolean | null;
  public ready: boolean;
  public user: ClientUser | null;
  public readonly users: UserManager;
  public readonly api: RestManager;
  constructor(options: ClientOptions = {}) {
    super();
    this.token = options.token ?? null;
    this.cache = options.cache ?? true;
    this.user = null;
    this.api = new RestManager(this);
    this.ready = false;
    this.users = new UserManager({ client: this, url: null });
    if (this.token)
      this.api
        .req("user")
        .post()
        .then(async (r: Response) => {
          this.user = new ClientUser(await r.json(), { client: this });
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
}

export default Client;
