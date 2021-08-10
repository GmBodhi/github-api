import ForkManager from "../managers/forkmanager";
import { GistData } from "../utils/rawdata";
import Base from "./base";
import Client from "./client";

/**
 * Description placeholder
 *
 * @class Gist
 * @typedef {Gist}
 * @extends {Base}
 * @noInheritDoc
 */
class Gist extends Base {
  /**
   * Description placeholder
   *
   * @private
   * @readonly
   * @type {GistData}
   */
  private readonly data: GistData;
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {ForkManager}
   */
  public readonly forks: ForkManager;
  /**
   * Creates an instance of Gist.
   *
   * @constructor
   * @param {GistData} data
   * @param {{ client: Client }} { client }
   */
  constructor(data: GistData, { client }: { client: Client }) {
    super(client);
    this.data = data;
    this.forks = new ForkManager(client, { url: data.forks_url });
  }

  /**
   * Description placeholder
   *
   * @readonly
   * @type {GistData["url"]}
   */
  get url(): GistData["url"] {
    return this.data.url;
  }
  /**
   * Description placeholder
   *
   * @readonly
   * @type {GistData["html_url"]}
   */
  get htmlUrl(): GistData["html_url"] {
    return this.data.html_url;
  }
}

export default Gist;
