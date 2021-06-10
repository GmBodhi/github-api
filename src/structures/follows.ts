class Follows {
  constructor(client) {
    this.client = client;
  }

  async list(username, options) {
    let { page, perPage } = options;
    this.client.api.users(username).followers.get({
      query: `${page ? "page=" + page + "&" : ""}${
        perPage ? "per_page=" + perPage : ""
      }`,
    });
  }
}
