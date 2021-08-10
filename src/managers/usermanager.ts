import Manager from "./manager";
import User from "../structures/user";
import Client from "../structures/client";
import { FetchOptions } from "../utils/constants";
import { Response } from "node-fetch";
import { UserListData } from "../utils";

/**
 * Description placeholder
 *
 * @class UserManager
 * @typedef {UserManager}
 * @extends {Manager}
 * @noInheritDoc
 */
class UserManager extends Manager {
  /**
   * Creates an instance of UserManager.
   *
   * @constructor
   * @param {{ client: Client; url?: string }} { client, url }
   */
  constructor({ client, url }: { client: Client; url?: string }) {
    super({ client, url });
  }

  /**
   * Description placeholder
   *
   * @public
   * @async
   * @param {string} username
   * @param {FetchOptions} [options={}]
   * @returns {Promise<User>}
   */
  public async fetch(
    username: string,
    options: FetchOptions = {}
  ): Promise<User> {
    const { auth = true } = options;
    const res: Response = await this.client.api
      .req(`users/${username}`, { auth })
      .get();
    return res.json().then((b: UserListData) => {
      return new User(b, { client: this.client });
    });
  }

  // public async *list({
  //   since,
  //   perPage,
  // }: { since?: string; perPage?: number } = {}): AsyncGenerator {
  //   let next, previous;
  // }
}

export default UserManager;
