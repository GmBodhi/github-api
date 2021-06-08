//@ts-check
"use strict";
const User = require("./user");
const Blocks = require('../structures/blocks')

class ClientUser extends User {
  constructor(data) {
    super(data);

    this.privateGists = data.private_gists;
    this.totalPrivateRepos = data.total_private_repos;
    this.ownedPrivateRepos = data.owned_private_repos;
    this.diskUsage = data.disk_usage;
    this.collaborators = data.collaborators;
    this.twoFactorAuthentication = data.two_factor_authentication;
    this.blocks = new Blocks();
    this.plan = {
      name: data.plan.name,
      space: data.plan.space,
      privateRepos: data.plan.private_repos,
      collaborators: data.plan.collaborators,
    };
  }

  /**
   * Sets the email for the authenticated user.
   * @param {String} email - Email you want to set
   * @returns - Returns updated user
   */
  async setEmail(email) {
    return this.client.api.user.patch({ body: { email } }).then((r) => {
      return this._patch(r);
    });
  }

  /**
   * Sets the name for the authenticated user.
   * @param {String} name - name that you want to set
   * @returns - Returns updated user.
   */
  async setName(name) {
    return this.client.api.user.patch({ body: { name } }).then((r) => {
      return this._patch(r);
    });
  }

  async setBlog(blog) {
    return this.client.api.user.patch({ body: { blog } }).then((r) => {
      return this._patch(r);
    });
  }

  async setTwitterUsername(twitter_username) {
    return this.client.api.user
      .patch({ body: { twitter_username } })
      .then((r) => {
        return this._patch(r);
      });
  }

  async setCompany(company) {
    return this.client.api.user.patch({ body: { company } }).then((r) => {
      return this._patch(r);
    });
  }

  async setLocation(location) {
    return this.client.api.user.patch({ body: { location } }).then((r) => {
      return this._patch(r);
    });
  }

  async setHireable(hireable) {
    return this.client.api.user.patch({ body: { hireable } }).then((r) => {
      return this._patch(r);
    });
  }

  async setBio(bio) {
    return this.client.api.user.patch({ body: { bio } }).then((r) => {
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
      .then((r) => {
        return this._patch(r);
      });
  }
}


module.exports = ClientUser;