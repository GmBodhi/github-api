import Manager from "./manager";
import User from "../structures/user";
import Client from "../structures/client";
import { FetchOptions } from "../utils/constants";
import { Response } from "node-fetch";
import { UserListData } from "../utils";

class UserManager extends Manager {
  constructor({ client, url }: { client: Client; url?: string }) {
    super({ client, url });
  }

  public async fetch(
    username: string,
    options: FetchOptions = {}
  ): Promise<User> {
    const { auth = true } = options;
    const res: Response = await this.client.api
      .req(`users/${username}`, { auth })
      .get();
    return res.json().then((b: UserListData) => {
      return new User(b, { client: this.client });
    });
  }

  // public async *list({
  //   since,
  //   perPage,
  // }: { since?: string; perPage?: number } = {}): AsyncGenerator {
  //   let next, previous;
  // }
}

export default UserManager;
