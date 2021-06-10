import Client from "./client";

class Issue {
  client: Client;
  constructor(data: any, client: Client) {
    this.client = client;
  }
}

export default Issue;