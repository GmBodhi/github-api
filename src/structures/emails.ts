//@ts-check
"use strict";

class Emails {
  constructor(client) {
    this.client = client;
  }

  async setPrimaryVisibility(email, visibility) {
    return await this.client.api.user.email.visibility.patch({
      body: { email, visibility },
    });
  }

  async list(options = {}) {
    let { page, perPage } = options;
    return this.client.api.user.emails.get({
      query: `${page ? "page=" + page + "&" : ""}${
        perPage ? "per_page=" + perPage : ""
      }`,
    });
  }

  async add(...emails) {
    return await this.client.api.user.emails.post({ body: { emails } });
  }

  async remove(...emails) {
    return await this.client.api.user.emails.delete({ body: { emails } });
  }

  async listPublic(options = {}) {
    let { page, perPage } = options;
    return this.client.api.user.public_emails.get({
      query: `${page ? "page=" + page + "&" : ""}${
        perPage ? "per_page=" + perPage : ""
      }`,
    });
  }
}

module.exports = Emails;
