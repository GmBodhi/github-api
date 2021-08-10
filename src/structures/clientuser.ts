import User from "./user";
import Blocks from "../structures/blocks";
import Emails from "./emails";
import Client from "./client";
import { Response } from "node-fetch";
import { ClientUserData } from "../utils/rawdata";

/**
 * Description placeholder
 *
 * @class ClientUser
 * @typedef {ClientUser}
 * @extends {User}
 * @noInheritDoc
 */
class ClientUser extends User {
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  privateGists?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  totalPrivateRepos?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  ownedPrivateRepos?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  diskUsage?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  collaborators?: number;
  /**
   * Description placeholder
   *
   * @type {Blocks}
   */
  blocks: Blocks;
  /**
   * Description placeholder
   *
   * @type {Emails}
   */
  emails: Emails;
  /**
   * Description placeholder
   *
   * @type {{
      name?: string;
      space?: number;
      privateRepos?: number;
      collaborators?: number;
    }}
   */
  plan: {
    name?: string;
    space?: number;
    privateRepos?: number;
    collaborators?: number;
  };
  /**
   * Creates an instance of ClientUser.
   *
   * @constructor
   * @param {ClientUserData} data
   * @param {{ client: Client }} { client }
   */
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
  async setEmail(email: string): Promise<User> {
    return await this.setAll({ email });
  }

  /**
   * Sets the name for the authenticated user.
   * @param {String} name - name that you want to set
   * @returns - Returns updated user.
   */
  async setName(name: string): Promise<User> {
    return await this.setAll({ name });
  }

  /**
   *
   * @param blog - A string that you want to set as Blog
   * @returns {User} - returns the updated user
   */
  async setBlog(blog: string): Promise<User> {
    return await this.setAll({ blog });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {string} twitterUsername
   * @returns {Promise<User>}
   */
  async setTwitterUsername(twitterUsername: string): Promise<User> {
    return await this.setAll({ twitterUsername });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {string} company
   * @returns {Promise<User>}
   */
  async setCompany(company: string): Promise<User> {
    return await this.setAll({ company });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {string} location
   * @returns {Promise<User>}
   */
  async setLocation(location: string): Promise<User> {
    return await this.setAll({ location });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {boolean} hireable
   * @returns {Promise<User>}
   */
  async setHireable(hireable: boolean): Promise<User> {
    return await this.setAll({ hireable });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {string} bio
   * @returns {Promise<User>}
   */
  async setBio(bio: string): Promise<User> {
    return await this.setAll({ bio });
  }

  /**
   * Description placeholder
   *
   * @async
   * @param {{
      email?: string;
      name?: string;
      blog?: string;
      twitterUsername?: string;
      company?: string;
      location?: string;
      hireable?: boolean;
      bio?: string;
    }} options
   * @returns {Promise<User>}
   */
  async setAll(options: {
    email?: string;
    name?: string;
    blog?: string;
    twitterUsername?: string;
    company?: string;
    location?: string;
    hireable?: boolean;
    bio?: string;
  }): Promise<User> {
    return await this.client.api
      .req("user", { body: options })
      .patch()
      .then(async (r: Response) => {
        return new ClientUser(await r.json(), { client: this.client });
      });
  }
}

export default ClientUser;
