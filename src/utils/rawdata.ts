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
  owner: UserData;
  forks: any[];
  history: [
    {
      user: UserData;
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
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  name: null | string;
  company?: string;
  blog?: string;
  location?: string;
  email?: null;
  hireable?: null;
  bio?: string;
  twitter_username?: string | null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ClientUserData extends UserData {
  plan: {
    name?: string;
    space?: number;
    private_repos?: number;
    collaborators?: number;
  };
  two_factor_authentication: boolean;
  collaborators: number;
  disk_usage: number;
  total_private_repos: number;
  owned_private_repos: number;
  private_gists: string;
}
