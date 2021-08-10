import { Manager } from ".";
import { Client } from "../structures";

/**
 * Description placeholder
 *
 * @class ForkManager
 * @typedef {ForkManager}
 * @extends {Manager}
 * @noInheritDoc
 */
class ForkManager extends Manager {
  /**
   * Creates an instance of ForkManager.
   *
   * @constructor
   * @param {Client} client
   * @param {{ url?: string }} { url }
   */
  constructor(client: Client, { url }: { url?: string }) {
    super({ client, url });
  }
}

export default ForkManager;
