import { Response } from "node-fetch";

class GHError extends Error {
  raw: Record<string, string>;
  constructor(res: Response, json: { message?: string } = {}) {
    super(json.message ?? res.statusText);
    this.name = "GitHubAPIError";
    this.raw = json;
  }
}

export default GHError;
