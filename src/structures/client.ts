import Events from "events";
import UserManager from "../managers/usermanager";
import { Response } from "node-fetch";
import ClientUser from "./clientuser";
import { RestManager } from "../utils";

/**
 * Description placeholder
 *
 * @interface ClientOptions
 * @typedef {ClientOptions}
 * @noInheritDoc
 */
interface ClientOptions {
  /**
   * Description placeholder
   *
   * @type {?(string | null)}
   */
  token?: string | null;
  /**
   * Description placeholder
   *
   * @type {?boolean}
   */
  cache?: boolean;
}

/**
 * Description placeholder
 *
 * @class Client
 * @typedef {Client}
 * @extends {Events.EventEmitter}
 */
class Client extends Events.EventEmitter {
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {?(string | null)}
   */
  public readonly token?: string | null;
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {?(boolean | null)}
   */
  public readonly cache?: boolean | null;
  /**
   * Description placeholder
   *
   * @public
   * @type {boolean}
   */
  public ready: boolean;
  /**
   * Description placeholder
   *
   * @public
   * @type {(ClientUser | null)}
   */
  public user: ClientUser | null;
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {UserManager}
   */
  public readonly users: UserManager;
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RestManager}
   */
  public readonly api: RestManager;
  /**
   * Creates an instance of Client.
   *
   * @constructor
   * @param {ClientOptions} [options={}]
   */
  constructor(options: ClientOptions = {}) {
    super();
    this.token = options.token ?? null;
    this.cache = options.cache ?? true;
    this.user = null;
    this.api = new RestManager(this);
    this.ready = false;
    this.users = new UserManager({ client: this });
    if (this.token)
      this.api
        .req("user")
        .post()
        .then(async (r: Response) => {
          this.user = new ClientUser(await r.json(), { client: this });
          this.ready = true;
          this.emit("ready");
        })
        .catch((e: Error) => {
          throw e;
        });
    else {
      this.ready = true;
      this.emit("ready");
    }
  }
}

export default Client;
