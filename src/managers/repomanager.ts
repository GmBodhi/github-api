import Client from "../structures/client";
import Manager from "./manager";

/**
 * Description placeholder
 *
 * @class RepoManager
 * @typedef {RepoManager}
 * @extends {Manager}
 * @noInheritDoc
 */
class RepoManager extends Manager {
  /**
   * Creates an instance of RepoManager.
   *
   * @constructor
   * @param {{ client: Client; url: string }} { client, url }
   */
  constructor({ client, url }: { client: Client; url: string }) {
    super({ client, url });
  }
}

export default RepoManager;
