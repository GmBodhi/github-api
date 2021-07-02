import Client from "../structures/client";
import Manager from "./manager";
import { FetchOptions } from "../utils/constants";

class IssueManager extends Manager {
  constructor({ client, url }: { client: Client; url: string }) {
    super({ client, url });
  }

  async fetch(id: number, options: FetchOptions = {}) {}
}

export default IssueManager;
