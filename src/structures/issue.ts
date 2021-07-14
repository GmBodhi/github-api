import { IssueData } from "../utils";
import Client from "./client";

class Issue {
  client: Client;
  constructor(data: IssueData, client: Client) {
    this.client = client;
  }
}

export default Issue;
