import User from "../structures/user";

export interface GistData {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: Record<
    string,
    {
      filename: string;
      type: string;
      language: string | null;
      raw_url: string;
      size: number;
    }
  >;
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user: null | any;
  comments_url: string;
  owner: User;
  forks: any[];
  history: [
    {
      user: User;
      version: string;
      committed_at: string;
      change_status: {
        total: number;
        additions: number;
        deletions: number;
      };
      url: string;
    }
  ];
  truncated: boolean;
}

export interface UserData {
  login: "GmBodhi";
  id: 71921036;
  node_id: "MDQ6VXNlcjcxOTIxMDM2";
  avatar_url: "https://avatars.githubusercontent.com/u/71921036?v=4";
  gravatar_id: "";
  url: "https://api.github.com/users/GmBodhi";
  html_url: "https://github.com/GmBodhi";
  followers_url: "https://api.github.com/users/GmBodhi/followers";
  following_url: "https://api.github.com/users/GmBodhi/following{/other_user}";
  gists_url: "https://api.github.com/users/GmBodhi/gists{/gist_id}";
  starred_url: "https://api.github.com/users/GmBodhi/starred{/owner}{/repo}";
  subscriptions_url: "https://api.github.com/users/GmBodhi/subscriptions";
  organizations_url: "https://api.github.com/users/GmBodhi/orgs";
  repos_url: "https://api.github.com/users/GmBodhi/repos";
  events_url: "https://api.github.com/users/GmBodhi/events{/privacy}";
  received_events_url: "https://api.github.com/users/GmBodhi/received_events";
  type: "User";
  site_admin: false;
  name: null;
  company: "@Exim-Studio ";
  blog: "http://eximstudio.com";
  location: "Solar System";
  email: null;
  hireable: null;
  bio: "I have nothing to write here...";
  twitter_username: "GmBodhi";
  public_repos: 24;
  public_gists: 0;
  followers: 2;
  following: 2;
  created_at: "2020-09-26T07:41:58Z";
  updated_at: "2021-07-01T05:00:49Z";
}
