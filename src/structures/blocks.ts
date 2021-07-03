import { Response } from "node-fetch";
import GHError from "../utils/error";
import { UserData } from "../utils/rawdata";
import Base from "./base";
import Client from "./client";
import User from "./user";

class Blocks extends Base {
  constructor(client: Client) {
    super(client);
  }

  async list(): Promise<User[]> {
    return await this.client.api
      .req("user/blocks")
      .get()
      .then(async (r: Response) => {
        const body: User[] = [];
        (await r.json()).forEach((u: UserData) =>
          body.push(new User(u, { client: this.client }))
        );
        return body;
      })
      .catch((e: any) => {
        throw new Error(e);
      });
  }

  async has(username: string): Promise<boolean> {
    return this.client.api
      .req(`user/blocks/${username}`, { _: true })
      .get()
      .then((res: Response) => {
        if ([204, 404].includes(res.status))
          return res.status === 204 ? true : false;
        throw new GHError(res, res.json());
      })
      .catch((e: any) => {
        throw new Error(e);
      });
  }

  async unBlock(username: string): Promise<boolean> {
    const res: Response = await this.client.api
      .req(`user/blocks/${username}`, { _: true })
      .put()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
    return res.ok ? true : false;
  }

  async block(username: string): Promise<boolean> {
    const res: Response = await this.client.api
      .req(`user/blocks/${username}`, { _: true })
      .delete()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
    return res.ok ? true : false;
  }
}

export default Blocks;
