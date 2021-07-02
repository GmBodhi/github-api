import { Response } from "node-fetch";
import Client from "./client";

class Follows {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async list(username: string, options: any) {
    return await this.client.api
      .req(`users/${username}/followers`, { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
  }
}

export default Follows;
