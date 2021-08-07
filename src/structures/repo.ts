import ForkManager from "../managers/forkmanager";
import { RepoData } from "../utils";
import Base from "./base";
import Client from "./client";

/**
 * Description placeholder
 *
 * @class Repo
 * @typedef {Repo}
 * @extends {Base}
 */
class Repo extends Base {
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {number}
   */
  public readonly id: number;
  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {ForkManager}
   */
  public readonly forks: ForkManager;
  /**
   * Description placeholder
   *
   * @private
   * @readonly
   * @type {RepoData}
   */
  private readonly data: RepoData;
  /**
   * Creates an instance of Repo.
   *
   * @constructor
   * @param {Client} client
   * @param {RepoData} data
   */
  constructor(client: Client, data: RepoData) {
    super(client);
    this.id = data.id;
    this.data = data;
    this.forks = new ForkManager(this.client, { url: data.forks_url });
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["forks_count"]}
   */
  public get forkCount(): RepoData["forks_count"] {
    return this.data.forks_count;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["fork"]}
   */
  public get fork(): RepoData["fork"] {
    return this.data.fork;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["full_name"]}
   */
  public get fullName(): RepoData["full_name"] {
    return this.data.full_name;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["allow_merge_commit"]}
   */
  public get allowMergeCommit(): RepoData["allow_merge_commit"] {
    return this.data.allow_merge_commit;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["allow_rebase_merge"]}
   */
  public get allowRebaseMerge(): RepoData["allow_rebase_merge"] {
    return this.data.allow_rebase_merge;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["allow_squash_merge"]}
   */
  public get allowSquashMerge(): RepoData["allow_squash_merge"] {
    return this.data.allow_squash_merge;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["anonymous_access_enabled"]}
   */
  public get anonymusAccessEnabled(): RepoData["anonymous_access_enabled"] {
    return this.data.anonymous_access_enabled;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["archive_url"]}
   */
  public get archiveUrl(): RepoData["archive_url"] {
    return this.data.archive_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["archived"]}
   */
  public get archived(): RepoData["archived"] {
    return this.data.archived;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["assignees_url"]}
   */
  public get assigneesUrl(): RepoData["assignees_url"] {
    return this.data.assignees_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["blobs_url"]}
   */
  public get blobsUrl(): RepoData["blobs_url"] {
    return this.data.blobs_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["branches_url"]}
   */
  public get branchesUrl(): RepoData["branches_url"] {
    return this.data.branches_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["clone_url"]}
   */
  public get cloneUrl(): RepoData["clone_url"] {
    return this.data.clone_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["code_of_conduct"]}
   */
  public get codeOfConduct(): RepoData["code_of_conduct"] {
    return this.data.code_of_conduct;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["collaborators_url"]}
   */
  public get collaboratorsUrl(): RepoData["collaborators_url"] {
    return this.data.collaborators_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["comments_url"]}
   */
  public get commentsUrl(): RepoData["comments_url"] {
    return this.data.comments_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["commits_url"]}
   */
  public get commitsUrl(): RepoData["commits_url"] {
    return this.data.commits_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["compare_url"]}
   */
  public get compareUrl(): RepoData["compare_url"] {
    return this.data.compare_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["contents_url"]}
   */
  public get contentsUrl(): RepoData["contents_url"] {
    return this.data.contents_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["contributors_url"]}
   */
  public get contributorsUrl(): RepoData["contributors_url"] {
    return this.data.contributors_url;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["created_at"]}
   */
  public get createdAt(): RepoData["created_at"] {
    return this.data.created_at;
  }

  /**
   * Description placeholder
   *
   * @public
   * @readonly
   * @type {RepoData["default_branch"]}
   */
  public get defaultBranch(): RepoData["default_branch"] {
    return this.data.default_branch;
  }
}

export default Repo;
