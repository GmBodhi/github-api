import { Manager } from ".";
import { Client } from "../structures";

class ForkManager extends Manager {
  constructor(client: Client, { url }: { url?: string }) {
    super({ client, url });
  }
}

export default ForkManager;
