import Client from "./client";
import User from "./user";

class Blocks {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async list() {
    return this.client.api.user.blocks.get().then(({ r }: any) => {
      r.forEach((u: object) => (u = new User(r, { client: this.client })));
      return r;
    });
  }

  async has(username: string) {
    return this.client.api.user
      .blocks(username)
      .get({ _: true })
      .then(({ res }: any) => {
        if ([204, 404].includes(res.status))
          return res.status === 204 ? true : false;
        throw new Error(res.statusText);
      });
  }

  async unBlock(username: string) {
    return await this.client.api.user.blocks(username).put();
  }

  async block(username: string) {
    return await this.client.api.user.blocks(username).delete();
  }
}

export default Blocks;
