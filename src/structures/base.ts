import Client from "./client";

class Base {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}

export default Base;
