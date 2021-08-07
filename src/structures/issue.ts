import { IssueData } from "../utils";
import Client from "./client";

/**
 * Description placeholder
 *
 * @class Issue
 * @typedef {Issue}
 */
class Issue {
  /**
   * Description placeholder
   *
   * @type {Client}
   */
  client: Client;
  /**
   * Creates an instance of Issue.
   *
   * @constructor
   * @param {IssueData} data
   * @param {Client} client
   */
  constructor(data: IssueData, client: Client) {
    this.client = client;
  }
}

export default Issue;
