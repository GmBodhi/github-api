import Collection from "@discordjs/collection";
import Client from "../structures/client";

class BaseManager {
  client: Client;
  url?: string;
  cache: Collection<string | number, any>;
  constructor({ client, url }: { client: Client; url?: string }) {
    this.client = client;
    this.url = url;
    this.cache = new Collection();
  }

  add(id: string | number, data: any) {
    this.cache.set(id, data);
    return data;
  }

  resolve(id: string | number) {
    return this.cache.get(id) ?? null;
  }
}

export default BaseManager;
