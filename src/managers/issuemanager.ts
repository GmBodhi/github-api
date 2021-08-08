import Client from "../structures/client";
import Manager from "./manager";
// import { FetchOptions } from "../utils/constants";

/**
 * Description placeholder
 *
 * @class IssueManager
 * @typedef {IssueManager}
 * @extends {Manager}
 */
class IssueManager extends Manager {
  /**
   * Creates an instance of IssueManager.
   *
   * @constructor
   * @param {{ client: Client; url: string }} { client, url }
   */
  constructor({ client, url }: { client: Client; url: string }) {
    super({ client, url });
  }

  /**
   * fetch the issue using it's number
   * @param {number} id - issue number
   * @param {FetchOptions} options
   */
  // async fetch(id: number, options: FetchOptions): Promise<void> {}
}

export default IssueManager;
