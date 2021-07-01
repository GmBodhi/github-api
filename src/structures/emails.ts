import { Response } from "node-fetch";
import Base from "./base";
import Client from "./client";

class Emails extends Base {
  constructor(client: Client) {
    super(client);
  }

  async setPrimaryVisibility(visibility: any, email?: string) {
    return await this.client.api
      .req("user/email/visibility", { body: { visibility, email } })
      .patch()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
  }

  async list(options: { page?: number; perPage?: number } = {}) {
    return await this.client.api
      .req("user/emails", { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
  }

  async add(...emails: string[]) {
    return await this.client.api
      .req("user/emails", { body: { emails } })
      .post()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
  }

  async remove(...emails: string[]) {
    return await this.client.api
      .req("user/emails", { body: { emails } })
      .delete()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
  }

  async listPublic(options = {}) {
    return await this.client.api
      .req("user/public_emails", { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: any) => {
        throw new Error(e);
      });
  }
}

export default Emails;
