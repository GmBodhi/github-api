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
  /**
   * Description placeholder
   *
   * @type {string}
   */
  login: string;
  /**
   * Description placeholder
   *
   * @type {number}
   */
  id: number;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  nodeId: string;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  avatarUrl: string;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  gravatarId: string;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  url: string;
  /**
   * Description placeholder
   *
   * @type {string}
   */
  htmlUrl: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  followingUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  followersUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  gistsUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  starredUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  subscriptionsUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  organizationsUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  reposUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  eventsUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  receivedEventsUrl?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  type?: string;
  /**
   * Description placeholder
   *
   * @type {?boolean}
   */
  siteAdmin?: boolean;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  company?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  blog?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  location?: string;
  /**
   * Description placeholder
   *
   * @type {?(string | null)}
   */
  email?: string | null;
  /**
   * Description placeholder
   *
   * @type {?(boolean | null)}
   */
  hireable?: boolean | null;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  bio?: string;
  /**
   * Description placeholder
   *
   * @type {?(string | null)}
   */
  twitterUsername?: string | null;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  publicRepos?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  publicGists?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  followers?: number;
  /**
   * Description placeholder
   *
   * @type {?number}
   */
  following?: number;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  createdAt?: string;
  /**
   * Description placeholder
   *
   * @type {?string}
   */
  updatedAt?: string;
  /**
   * Creates an instance of User.
   *
   * @constructor
   * @param {UserData} data
   * @param {{ client: Client }} { client }
   */
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

  /**
   * Description placeholder
   *
   * @public
   * @param {(UserData | ClientUserData | Record<string, unknown>)} data
   * @returns {this}
   */
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
