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

  public get forkCount() {
    return this.data.forks_count;
  }

  public get fork() {
    return this.data.fork;
  }

  public get fullName() {
    return this.data.full_name;
  }

  public get allowMergeCommit() {
    return this.data.allow_merge_commit;
  }

  public get allowRebaseMerge() {
    return this.data.allow_rebase_merge;
  }

  public get allowSquashMerge() {
    return this.data.allow_squash_merge;
  }

  public get anonymusAccessEnabled() {
    return this.data.anonymous_access_enabled;
  }

  public get archiveUrl() {
    return this.data.archive_url;
  }

  public get archived() {
    return this.data.archived;
  }

  public get assigneesUrl() {
    return this.data.assignees_url;
  }

  public get blobsUrl() {
    return this.data.blobs_url;
  }

  public get branchesUrl() {
    return this.data.branches_url;
  }

  public get cloneUrl() {
    return this.data.clone_url;
  }

  public get codeOfConduct() {
    return this.data.code_of_conduct;
  }

  public get collaboratorsUrl() {
    return this.data.collaborators_url;
  }

  public get commentsUrl() {
    return this.data.comments_url;
  }

  public get commitsUrl() {
    return this.data.commits_url;
  }

  public get compareUrl() {
    return this.data.compare_url;
  }

  public get contentsUrl() {
    return this.data.contents_url;
  }

  public get contributorsUrl() {
    return this.data.contributors_url;
  }

  public get createdAt() {
    return this.data.created_at;
  }

  // public get() {
  //   return this.data
  // }
}

export default Repo;
