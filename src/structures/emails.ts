import { Response } from "node-fetch";
import { Email } from "../utils";
import Base from "./base";
import Client from "./client";

class Emails extends Base {
  constructor(client: Client) {
    super(client);
  }

  async setPrimaryVisibility(
    visibility: string,
    email?: string
  ): Promise<Email> {
    return await this.client.api
      .req("user/email/visibility", { body: { visibility, email } })
      .patch()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }

  async list(
    options: { page?: number; perPage?: number } = {}
  ): Promise<Email[]> {
    return await this.client.api
      .req("user/emails", { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }

  async add(...emails: string[]): Promise<Email[]> {
    return await this.client.api
      .req("user/emails", { body: { emails } })
      .post()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }

  async remove(...emails: string[]): Promise<Email[]> {
    return await this.client.api
      .req("user/emails", { body: { emails } })
      .delete()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }

  async listPublic(options = {}): Promise<Email[]> {
    return await this.client.api
      .req("user/public_emails", { query: options })
      .get()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }
}

export default Emails;
