import { Response } from "node-fetch";
import Client from "../structures/client";
import { ArtifactData, ArtifactListData } from "../utils";
import Manager from "./manager";

/**
 * Manager that holds all artifacts for a specific repo.
 * @see {@link Manager} Base class for managers.
 *
 * @class ArtifactsManager
 * @typedef {ArtifactsManager}
 * @extends {Manager}
 * @noInheritDoc
 */
class ArtifactsManager extends Manager {
  /**
   * Owner of the repo
   *
   * @type {string}
   */
  owner: string;
  /**
   * name of the repo
   *
   * @type {string}
   */
  repo: string;
  /**
   * Creates an instance of ArtifactsManager.
   *
   * @constructor
   * @param {{ client: Client }} { client }
   * @param {{ owner: string; repo: string }} { owner, repo }
   */
  constructor(
    { client }: { client: Client },
    { owner, repo }: { owner: string; repo: string }
  ) {
    super({ client });
    this.owner = owner;
    this.repo = repo;
  }
  /**
   * Lists artifacts for a repo.
   *
   * @async
   * @param {{page?: number; perPage?: number;}} options
   * @returns {Promise<ArtifactListData>}
   */
  async list(options: {
    page?: number;
    perPage?: number;
  }): Promise<ArtifactListData> {
    return await this.client.api
      .req(`/repos/${this.owner}/${this.repo}/actions/artifacts`, {
        query: options,
      })
      .get()
      .then((res: Response) => {
        return res.json();
      })
      .catch((e: Error) => {
        throw e;
      });
  }
  /**
   * Description placeholder
   *
   * @async
   * @param {number} artifactId
   * @returns {Promise<ArtifactData>}
   */
  async get(artifactId: number): Promise<ArtifactData> {
    return await this.client.api
      .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}`)
      .get()
      .then((res: Response) => {
        return res.json();
      });
  }

  // For the time being we will leave as it is... Unless confirm with tests
  /**
   * Description placeholder
   *
   * @async
   * @param {number} artifactId
   * @returns {Promise<unknown>}
   */
  async delete(artifactId: number): Promise<unknown> {
    return await this.client.api
      .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}`)
      .delete()
      .then((res: Response) => {
        return res.json();
      });
  }
  /**
   * Get a specific artifact for a repo.
   *
   * @async
   * @param {number} artifactId
   * @returns {Promise<unknown>}
   */
  async download(artifactId: number): Promise<unknown> {
    return await this.client.api
      .req(
        `/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}/zip`
      )
      .get()
      .then((res: Response) => {
        return res.json();
      });
  }
}

export default ArtifactsManager;
