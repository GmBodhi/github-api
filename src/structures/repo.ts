import ForkManager from "../managers/forkmanager";
import { RepoData } from "../utils";
import Base from "./base";
import Client from "./client";

class Repo extends Base {
  public readonly id: number;
  public readonly forks: ForkManager;
  private readonly data: RepoData;
  constructor(client: Client, data: RepoData) {
    super(client);
    this.id = data.id;
    this.data = data;
    this.forks = new ForkManager(this.client, { url: data.forks_url });
  }

  public get forkCount(): RepoData["forks_count"] {
    return this.data.forks_count;
  }

  public get fork(): RepoData["fork"] {
    return this.data.fork;
  }

  public get fullName(): RepoData["full_name"] {
    return this.data.full_name;
  }

  public get allowMergeCommit(): RepoData["allow_merge_commit"] {
    return this.data.allow_merge_commit;
  }

  public get allowRebaseMerge(): RepoData["allow_rebase_merge"] {
    return this.data.allow_rebase_merge;
  }

  public get allowSquashMerge(): RepoData["allow_squash_merge"] {
    return this.data.allow_squash_merge;
  }

  public get anonymusAccessEnabled(): RepoData["anonymous_access_enabled"] {
    return this.data.anonymous_access_enabled;
  }

  public get archiveUrl(): RepoData["archive_url"] {
    return this.data.archive_url;
  }

  public get archived(): RepoData["archived"] {
    return this.data.archived;
  }

  public get assigneesUrl(): RepoData["assignees_url"] {
    return this.data.assignees_url;
  }

  public get blobsUrl(): RepoData["blobs_url"] {
    return this.data.blobs_url;
  }

  public get branchesUrl(): RepoData["branches_url"] {
    return this.data.branches_url;
  }

  public get cloneUrl(): RepoData["clone_url"] {
    return this.data.clone_url;
  }

  public get codeOfConduct(): RepoData["code_of_conduct"] {
    return this.data.code_of_conduct;
  }

  public get collaboratorsUrl(): RepoData["collaborators_url"] {
    return this.data.collaborators_url;
  }

  public get commentsUrl(): RepoData["comments_url"] {
    return this.data.comments_url;
  }

  public get commitsUrl(): RepoData["commits_url"] {
    return this.data.commits_url;
  }

  public get compareUrl(): RepoData["compare_url"] {
    return this.data.compare_url;
  }

  public get contentsUrl(): RepoData["contents_url"] {
    return this.data.contents_url;
  }

  public get contributorsUrl(): RepoData["contributors_url"] {
    return this.data.contributors_url;
  }

  public get createdAt(): RepoData["created_at"] {
    return this.data.created_at;
  }

  // public get() {
  //   return this.data
  // }
}

export default Repo;
