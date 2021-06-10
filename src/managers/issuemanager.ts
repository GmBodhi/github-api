
import Manager from "./manager";

class IssueManager extends Manager {
  constructor({ client, url }) {
    super({ client, url });
  }

  async fetch(id, options) {}
}
