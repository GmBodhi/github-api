import { Client } from "../structures";

/**
 * Description placeholder
 *
 * @class BaseManager
 * @typedef {BaseManager}
 * @noInheritDoc
 */
class BaseManager {
  /**
   * Description placeholder
   *
   * @type {Client}
   */
  client: Client;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  url?: string;
  /**
   * Creates an instance of BaseManager.
   *
   * @constructor
   * @param {{ client: Client; url?: string }} { client, url }
   */
  constructor({ client, url }: { client: Client; url?: string }) {
    this.client = client;
    this.url = url;
  }
}

export default BaseManager;
