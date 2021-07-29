import { ClientUserData, UserData } from "../utils/rawdata";
import Client from "./client";

/**
 * GitHub user object.
 */
class User {
  /**
   *
   * @param {Object} data - raw data from api
   * @param {{Client}} extras - extra data
   */
  client: Client;
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followingUrl?: string;
  followersUrl?: string;
  gistsUrl?: string;
  starredUrl?: string;
  subscriptionsUrl?: string;
  organizationsUrl?: string;
  reposUrl?: string;
  eventsUrl?: string;
  receivedEventsUrl?: string;
  type?: string;
  siteAdmin?: boolean;
  company?: string;
  blog?: string;
  location?: string;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string;
  twitterUsername?: string | null;
  publicRepos?: number;
  publicGists?: number;
  followers?: number;
  following?: number;
  createdAt?: string;
  updatedAt?: string;
  constructor(data: UserData, { client }: { client: Client }) {
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

  public _patch(
    data: UserData | ClientUserData | Record<string, unknown>
  ): this {
    const processedData: unknown = Object.fromEntries(
      // I'm not destructuring `val` cuz to prevent ESLint errors and assignment unexpected behaviour...
      (Object.entries(data) as [string, unknown][]).filter((val) => {
        val[0] = val[0].replace(
          /_(\w)/gi,
          (_: unknown, param: string): string => param.toUpperCase()
        );
        return val[1] !== undefined || val[1] !== null;
      })
    );

    Object.assign(this, processedData);

    return this;
  }
}

export default User;
