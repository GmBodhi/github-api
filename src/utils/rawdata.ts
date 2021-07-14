import { Endpoints } from "@octokit/types";

export type UserData = Endpoints["GET /users/{username}"]["response"]["data"];

export type UserListData = Endpoints["GET /users"]["response"]["data"];

export type ClientUserData = Endpoints["GET /user"]["response"]["data"];

export type ArtifactData =
  Endpoints["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"]["response"]["data"];

export type ArtifactListData =
  Endpoints["GET /repos/{owner}/{repo}/actions/artifacts"]["response"]["data"];

export type GistData = Endpoints["GET /gists/{gist_id}"]["response"]["data"];

export type GistListData = Endpoints["GET /gists"]["response"]["data"];

export type GistPublicData = Endpoints["GET /gists/public"]["response"]["data"];

export type RepoData =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export type ClientUserRepoListData =
  Endpoints["GET /user/repos"]["response"]["data"];

export type IssueData =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"];
