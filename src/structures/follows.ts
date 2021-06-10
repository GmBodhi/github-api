import Client from "./client";

class Follows {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async list(username: string, options: any) {
    let { page, perPage } = options;
    this.client.api.users(username).followers.get({
      query: `${page ? "page=" + page + "&" : ""}${
        perPage ? "per_page=" + perPage : ""
      }`,
    });
  }
}

export default Follows;