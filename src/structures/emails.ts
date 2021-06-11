import Client from "./client";

class Emails {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async setPrimaryVisibility(visibility: any, email?: string) {
    return await this.client.api.user.email.visibility.patch({
      body: { email, visibility },
    });
  }

  async list(options = {}) {
    let { page, perPage }: any = options;
    return this.client.api.user.emails.get({
      query: `${page ? "page=" + page + "&" : ""}${
        perPage ? "per_page=" + perPage : ""
      }`,
    });
  }

  async add(...emails: string[]) {
    return await this.client.api.user.emails.post({ body: { emails } });
  }

  async remove(...emails: string[]) {
    return await this.client.api.user.emails.delete({ body: { emails } });
  }

  async listPublic(options = {}) {
    let { page, perPage }: any = options;
    return this.client.api.user.public_emails.get({
      query: `${page ? "page=" + page + "&" : ""}${
        perPage ? "per_page=" + perPage : ""
      }`,
    });
  }
}

export default Emails;
