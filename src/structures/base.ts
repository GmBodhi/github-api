import Client from "./client";

/**
 * Description placeholder
 *
 * @class Base
 * @typedef {Base}
 */
class Base {
  /**
   * Description placeholder
   *
   * @type {Client}
   */
  client: Client;
  /**
   * Creates an instance of Base.
   *
   * @constructor
   * @param {Client} client
   */
  constructor(client: Client) {
    this.client = client;
  }
}

export default Base;
