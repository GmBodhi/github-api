import { Client } from "../structures";

class BaseManager {
  client: Client;
  url?: string;
  constructor({ client, url }: { client: Client; url?: string }) {
    this.client = client;
    this.url = url;
  }
}

export default BaseManager;
