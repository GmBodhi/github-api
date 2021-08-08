import ArtifactsManager from "../managers/artifactsManager";
import Base from "./base";
import Client from "./client";

/**
 * Description placeholder
 *
 * @class Actions
 * @typedef {Actions}
 * @extends {Base}
 */
class Actions extends Base {
  /**
   * Description placeholder
   *
   * @type {ArtifactsManager}
   */
  artifacts: ArtifactsManager;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  owner: string;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  repo: string;
  /**
   * Creates an instance of Actions.
   *
   * @constructor
   * @param {Client} client
   * @param {{owner: string, repo: string}} {owner, repo}
   */
  constructor(
    client: Client,
    { owner, repo }: { owner: string; repo: string }
  ) {
    super(client);
    this.owner = owner;
    this.repo = repo;
    this.artifacts = new ArtifactsManager(
      { client: this.client },
      { owner: this.owner, repo: this.repo }
    );
  }
}

export default Actions;
