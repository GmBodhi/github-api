import Client from "../structures/client";
import Manager from "./manager";

class RepoManager extends Manager {
  constructor({ client, url }: { client: Client; url: string }) {
    super({ client, url });
  }
}

export default RepoManager;
