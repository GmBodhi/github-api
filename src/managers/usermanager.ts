import Manager from "./manager";
import User from "../structures/user";
import Client from "../structures/client";
import { FetchOptions } from "../utils/constants";

class UserManager extends Manager {
  constructor({ client, url }: { client: Client; url: string | null }) {
    super({ client, url });
  }

  async fetch(id: string, { cache = true, force = false }: FetchOptions = {}) {
    let o = this.cache.get(id);
    if (o && !force) return o;
    return this.client.api
      .users(id)
      .get()
      .then(({ r }: any) => {
        if (cache) return this.add(r.login, r);
        return new User(r, { client: this.client });
      });
  }

  add(id: string, data: any) {
    let o = new User(data, { client: this.client });
    this.cache.set(id, o);
    return o;
  }

  async get(query: any = {}, cache: boolean = true) {
    let { since, perPage } = query;

    this.client.api.users
      .get({
        query: `${since ? "since=" + since + "&" : ""}${
          perPage ? "per_page=" + perPage : ""
        }`,
      })
      .then(({ r = [] }) => {
        let users: User[] = [];
        r.forEach((user) => {
          user = cache
            ? this.add(user.login, user)
            : new User(user, { client: this.client });
          users.push(user);
        });
        return users;
      });
  }
}

export default UserManager;
