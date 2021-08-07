import { Response } from "node-fetch";
import Client from "./client";

/**
 * Description placeholder
 *
 * @class Follows
 * @typedef {Follows}
 */
class Follows {
  /**
   * Description placeholder
   *
   * @type {Client}
   */
  client: Client;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  username: string;
  /**
   * Creates an instance of Follows.
   *
   * @constructor
   * @param {Client} client
   * @param {{ username: string }} { username }
   */
  constructor(client: Client, { username }: { username: string }) {
    this.client = client;
    this.username = username;
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {{ page?: number; perPage?: number }} options
   * @returns {Promise<unknown[]>}
   */
  async list(options: { page?: number; perPage?: number }): Promise<unknown[]> {
    return await this.client.api
      .req(`users/${this.username}/followers`, { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }
}

export default Follows;
