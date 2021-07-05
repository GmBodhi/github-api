import User from "./user";
import Blocks from "../structures/blocks";
import Emails from "./emails";
import Client from "./client";
import { Response } from "node-fetch";
import { ClientUserData } from "../utils/rawdata";

class ClientUser extends User {
  privateGists?: number;
  totalPrivateRepos?: number;
  ownedPrivateRepos?: number;
  diskUsage?: number;
  collaborators?: number;
  blocks: Blocks;
  emails: Emails;
  plan: {
    name?: string;
    space?: number;
    privateRepos?: number;
    collaborators?: number;
  };
  constructor(data: ClientUserData, { client }: { client: Client }) {
    super(data, { client });
    this.privateGists = data.private_gists;
    this.totalPrivateRepos = data.total_private_repos;
    this.ownedPrivateRepos = data.owned_private_repos;
    this.diskUsage = data.disk_usage;
    this.collaborators = data.collaborators;
    this.blocks = new Blocks(client);
    this.emails = new Emails(client);
    this.plan = {
      name: data.plan?.name,
      space: data.plan?.space,
      privateRepos: data.plan?.private_repos,
      collaborators: data.plan?.collaborators,
    };
  }

  /**
   * Sets the email for the authenticated user.
   * @param {String} email - Email you want to set
   * @returns - Returns updated user
   */
  async setEmail(email: string) {
    return await this.setAll({ email });
  }

  /**
   * Sets the name for the authenticated user.
   * @param {String} name - name that you want to set
   * @returns - Returns updated user.
   */
  async setName(name: string) {
    return await this.setAll({ name });
  }

  /**
   *
   * @param blog - A string that you want to set as Blog
   * @returns {User} - returns the updated user
   */
  async setBlog(blog: string) {
    return await this.setAll({ blog });
  }

  async setTwitterUsername(twitterUsername: string) {
    return await this.setAll({ twitterUsername });
  }

  async setCompany(company: string) {
    return await this.setAll({ company });
  }

  async setLocation(location: string) {
    return await this.setAll({ location });
  }

  async setHireable(hireable: boolean) {
    return await this.setAll({ hireable });
  }

  async setBio(bio: string) {
    return await this.setAll({ bio });
  }

  async setAll(options: {
    email?: string;
    name?: string;
    blog?: string;
    twitterUsername?: string;
    company?: string;
    location?: string;
    hireable?: boolean;
    bio?: string;
  }) {
    return await this.client.api
      .req("user", { body: options })
      .patch()
      .then(async (r: Response) => {
        return this._patch(await r.json());
      });
  }
}

export default ClientUser;
