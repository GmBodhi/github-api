import ForkManager from "../managers/forkmanager";
import { GistData } from "../utils/rawdata";
import Base from "./base";
import Client from "./client";

class Gist extends Base {
  private readonly data: GistData;
  public readonly forks: ForkManager;
  constructor(data: GistData, { client }: { client: Client }) {
    super(client);
    this.data = data;
    this.forks = new ForkManager(client, { url: data.forks_url });
  }

  get url() {
    return this.data.url;
  }
  get htmlUrl() {
    return this.data.html_url;
  }
}

export default Gist;
