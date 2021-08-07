import { Response } from "node-fetch";

/**
 * Description placeholder
 *
 * @class GHError
 * @typedef {GHError}
 * @extends {Error}
 */
class GHError extends Error {
  /**
   * Description placeholder
   *
   * @type {Record<string, string>}
   */
  raw: Record<string, string>;
  /**
   * Creates an instance of GHError.
   *
   * @constructor
   * @param {Response} res
   * @param {{ message?: string }} [json={}]
   */
  constructor(res: Response, json: { message?: string } = {}) {
    super(json.message ?? res.statusText);
    this.name = "GitHubAPIError";
    this.raw = json;
  }
}

export default GHError;
