//@ts-check
"use strict";
/**
 * GitHub user object.
 */
class User {
  /**
   *
   * @param {Object} data - raw data from api
   * @param {Object} param1
   */
  constructor(data, { client }) {
    this.client = client;
    this.login = data.login;
    this.id = data.id;
    this.nodeId = data.node_id;
    this.avatarUrl = data.avatar_url;
    this.gravatarId = data.gravatar_id;
    this.url = data.url;
    this.htmlUrl = data.html_url;
    this.followersUrl = data.followers_url;
    this.followingUrl = data.following_url;
    this.gistsUrl = data.gists_url;
    this.starredUrl = data.starred_url;
    this.subscriptionsUrl = data.subscriptions_url;
    this.organizationsUrl = data.organizations_url;
    this.reposUrl = data.repos_url;
    this.eventsUrl = data.events_url;
    this.receivedEventsUrl = data.received_events_url;
    this.type = data.type;
    this.siteAdmin = data.site_admin;
    this.company = data.company;
    this.blog = data.blog;
    this.location = data.location;
    this.email = data.email;
    this.hireable = data.hireable;
    this.bio = data.bio;
    this.twitterUsername = data.twitter_username;
    this.publicRepos = data.public_repos;
    this.publicGists = data.public_gists;
    this.followers = data.followers;
    this.following = data.following;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
  }

  _patch(data) {
    this.login = data.login;
    this.id = data.id;
    this.nodeId = data.node_id;
    this.avatarUrl = data.avatar_url;
    this.gravatarId = data.gravatar_id;
    this.url = data.url;
    this.htmlUrl = data.html_url;
    this.followersUrl = data.followers_url;
    this.followingUrl = data.following_url;
    this.gistsUrl = data.gists_url;
    this.starredUrl = data.starred_url;
    this.subscriptionsUrl = data.subscriptions_url;
    this.organizationsUrl = data.organizations_url;
    this.reposUrl = data.repos_url;
    this.eventsUrl = data.events_url;
    this.receivedEventsUrl = data.received_events_url;
    this.type = data.type;
    this.siteAdmin = data.site_admin;
    this.company = data.company;
    this.blog = data.blog;
    this.location = data.location;
    this.email = data.email;
    this.hireable = data.hireable;
    this.bio = data.bio;
    this.twitterUsername = data.twitter_username;
    this.publicRepos = data.public_repos;
    this.publicGists = data.public_gists;
    this.followers = data.followers;
    this.following = data.following;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
    this.privateGists = data.private_gists;
    this.totalPrivateRepos = data.total_private_repos;
    this.ownedPrivateRepos = data.owned_private_repos;
    this.diskUsage = data.disk_usage;
    this.collaborators = data.collaborators;
    this.twoFactorAuthentication = data.two_factor_authentication;
    return this;
  }
}

module.exports = User;
