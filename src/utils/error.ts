import { Body, Response } from "node-fetch";

class GHError extends Error {
  constructor(res: Response, json: any = {}) {
    super(res.statusText);
    this.message = json.message;
  }
}

export default GHError;
