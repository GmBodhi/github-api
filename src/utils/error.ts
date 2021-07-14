import { Response } from "node-fetch";

class GHError extends Error {
  constructor(res: Response, json: { message?: string } = {}) {
    super(res.statusText);
    this.message = json?.message ?? "No error data from api";
  }
}

export default GHError;
