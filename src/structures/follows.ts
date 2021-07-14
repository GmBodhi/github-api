import { Response } from "node-fetch";
import Client from "./client";

class Follows {
  client: Client;
  username: string;
  constructor(client: Client, { username }: { username: string }) {
    this.client = client;
    this.username = username;
  }

  async list(options: { page?: number; perPage?: number }): Promise<unknown[]> {
    return await this.client.api
      .req(`users/${this.username}/followers`, { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }
}

export default Follows;
