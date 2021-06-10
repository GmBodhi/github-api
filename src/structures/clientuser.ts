import User from "./user";
import Blocks from "../structures/blocks";
import Emails from "./emails";
import Client from "./client";

class ClientUser extends User {
  privateGists: string;
  totalPrivateRepos: number;
  ownedPrivateRepos: number;
  diskUsage: number;
  collaborators: number;
  twoFactorAuthentication: boolean;
  blocks: Blocks;
  emails: Emails;
  plan?: {
    name: string;
    space: number;
    privateRepos: number;
    collaborators: number;
  };
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
  async setEmail(email: string) {
    return this.client.api.user.patch({ body: { email } }).then(({ r }: any) => {
      return this._patch(r);
    });
  }

  /**
   * Sets the name for the authenticated user.
   * @param {String} name - name that you want to set
   * @returns - Returns updated user.
   */
  async setName(name: string) {
    return this.client.api.user.patch({ body: { name } }).then(({ r, res }: any) => {
      console.log(r, res);
      return this._patch(r);
    });
  }

  async setBlog(blog: string) {
    return this.client.api.user.patch({ body: { blog } }).then(({ r }: any) => {
      return this._patch(r);
    });
  }

  async setTwitterUsername(twitter_username: string|null) {
    return this.client.api.user
      .patch({ body: { twitter_username } })
      .then(({ r }: any) => {
        return this._patch(r);
      });
  }

  async setCompany(company: string) {
    return this.client.api.user.patch({ body: { company } }).then(({ r }: any) => {
      return this._patch(r);
    });
  }

  async setLocation(location: string) {
    return this.client.api.user.patch({ body: { location } }).then(({ r }: any) => {
      return this._patch(r);
    });
  }

  async setHireable(hireable: boolean) {
    return this.client.api.user.patch({ body: { hireable } }).then(({ r }: any) => {
      return this._patch(r);
    });
  }

  async setBio(bio: string) {
    return this.client.api.user.patch({ body: { bio } }).then(({ r }: any) => {
      return this._patch(r);
    });
  }

  async setAll(options: any) {
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
      .then(({ r }: any) => {
        return this._patch(r);
      });
  }
}

export default ClientUser;
