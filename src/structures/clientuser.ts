import User from "./user";
import Blocks  from "../structures/blocks";
import Emails from "./emails";
import Client from './client';

class ClientUser extends User {
  privateGists: string;
  totalPrivateRepos: number;
  ownedPrivateRepos: number;
  diskUsage: number;
  collaborators: number;
  twoFactorAuthentication: boolean;
  blocks: Blocks;
  emails: Emails;
  plan?: any
  constructor(data: any, { client }: { client: Client }) {
    super(data, { client });
    let { plan = {} }: any = data;
    this.privateGists = data.private_gists;
    this.totalPrivateRepos = data.total_private_repos;
    this.ownedPrivateRepos = data.owned_private_repos;
    this.diskUsage = data.disk_usage;
    this.collaborators = data.collaborators;
    this.twoFactorAuthentication = data.two_factor_authentication;
    this.blocks = new Blocks(client);
    this.emails = new Emails(client);
    this.plan = {
      name: plan.name,
      space: plan.space,
      privateRepos: plan.private_repos,
      collaborators: plan.collaborators,
    };
  }

  /**
   * Sets the email for the authenticated user.
   * @param {String} email - Email you want to set
   * @returns - Returns updated user
   */
  async setEmail(email) {
    return this.client.api.user.patch({ body: { email } }).then(({ r }) => {
      return this._patch(r);
    });
  }

  /**
   * Sets the name for the authenticated user.
   * @param {String} name - name that you want to set
   * @returns - Returns updated user.
   */
  async setName(name) {
    return this.client.api.user.patch({ body: { name } }).then(({ r, res }) => {
      console.log(r, res);
      return this._patch(r);
    });
  }

  async setBlog(blog) {
    return this.client.api.user.patch({ body: { blog } }).then(({ r }) => {
      return this._patch(r);
    });
  }

  async setTwitterUsername(twitter_username) {
    return this.client.api.user
      .patch({ body: { twitter_username } })
      .then(({ r }) => {
        return this._patch(r);
      });
  }

  async setCompany(company) {
    return this.client.api.user.patch({ body: { company } }).then(({ r }) => {
      return this._patch(r);
    });
  }

  async setLocation(location) {
    return this.client.api.user.patch({ body: { location } }).then(({ r }) => {
      return this._patch(r);
    });
  }

  async setHireable(hireable) {
    return this.client.api.user.patch({ body: { hireable } }).then(({ r }) => {
      return this._patch(r);
    });
  }

  async setBio(bio) {
    return this.client.api.user.patch({ body: { bio } }).then(({ r }) => {
      return this._patch(r);
    });
  }

  async setAll(options) {
    let {
      email,
      name,
      blog,
      twitterUsername,
      company,
      location,
      hireable,
      bio,
    } = options;
    return this.client.api.user
      .patch({
        body: {
          email,
          name,
          blog,
          twitter_username: twitterUsername,
          company,
          location,
          hireable,
          bio,
        },
      })
      .then(({ r }) => {
        return this._patch(r);
      });
  }
}

export default ClientUser;
