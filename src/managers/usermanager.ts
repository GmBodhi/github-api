import Manager from "./manager";
import User from "../structures/user";
import Client from "../structures/client";
import { FetchOptions } from "../utils/constants";
import { Response } from "node-fetch";

class UserManager extends Manager {
  constructor({ client, url }: { client: Client; url?: string }) {
    super({ client, url });
  }

  async fetch(
    username: string | { cache?: boolean; since?: string; perPage?: number },
    options?: FetchOptions
  ) {
    if (typeof username === "string") {
      const { force, cache } = options ?? {};
      let o = this.cache.get(username);
      if (o && !force) return o;
      const res: Response = await this.client.api
        .req(`users/${username}`)
        .get();
      res.json().then((b: any) => {
        if (cache) return this.add(b.login, b);
        return new User(b, { client: this.client });
      });
    } else {
      const { since, perPage, cache = true } = username;
      const res = await this.client.api
        .req("users", { query: { perPage, since } })
        .get();
      return res.json().then((users: any[]) => {
        users.forEach((u: any) => {
          u = this.add(u.login, u, cache);
        });
        return users;
      });
    }
  }

  add(id: string, data: any, cache: boolean = true) {
    let o = new User(data, { client: this.client });
    if (cache) this.cache.set(id, o);
    return o;
  }
}

export default UserManager;
