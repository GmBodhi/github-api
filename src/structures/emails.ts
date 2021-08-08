import { Response } from "node-fetch";
import { Email } from "../utils";
import Base from "./base";
import Client from "./client";

/**
 * Description placeholder
 *
 * @class Emails
 * @typedef {Emails}
 * @extends {Base}
 */
class Emails extends Base {
  /**
   * Creates an instance of Emails.
   *
   * @constructor
   * @param {Client} client
   */
  constructor(client: Client) {
    super(client);
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {string} visibility
   * @param {?string} [email]
   * @returns {Promise<Email>}
   */
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

  /**
   * Description placeholder
   *
   * @async
   * @param {{ page?: number; perPage?: number }} [options={}]
   * @returns {Promise<Email[]>}
   */
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

  /**
   * Description placeholder
   *
   * @async
   * @param {...string[]} emails
   * @returns {Promise<Email[]>}
   */
  async add(...emails: string[]): Promise<Email[]> {
    return await this.client.api
      .req("user/emails", { body: { emails } })
      .post()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {...string[]} emails
   * @returns {Promise<Email[]>}
   */
  async remove(...emails: string[]): Promise<Email[]> {
    return await this.client.api
      .req("user/emails", { body: { emails } })
      .delete()
      .then((res: Response) => res.json())
      .catch((e: Error) => {
        throw e;
      });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {{}} [options={}]
   * @returns {Promise<Email[]>}
   */
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
