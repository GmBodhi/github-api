//@ts-check
/**
 * GitHub user object.
 */
class User {
    /**
     * @param {Object} data - raw data for the user got from api
     */
    constructor(data, { client }){
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
        this.privateGists = data.private_gists;
        this.totalPrivateRepos = data.total_private_repos;
        this.ownedPrivateRepos = data.owned_private_repos;
        this.diskUsage = data.disk_usage;
        this.collaborators = data.collaborators;
        this.twoFactorAuthentication = data.two_factor_authentication;
        this.plan = { 
            name: data.plan.name,
            space: data.plan.space,
            privateRepos: data.plan.private_repos,
            collaborators: data.plan.collaborators
        }

    }

    _patch(data){
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
        this.plan = {
          name: data.plan.name,
          space: data.plan.space,
          privateRepos: data.plan.private_repos,
          collaborators: data.plan.collaborators,
        };
        return this;
    }

    async setEmail(email){
        return this.client.api.user.patch({ body: { email } }).then(r => {
            return this._patch(r);
        })
    }

    async setName(name){
        return this.client.api.user.patch({ body: { name }}).then(r => {
            return this._patch(r);
        })
    }

    async setBlog(blog){
        return this.client.api.user.patch({ body: { blog } }).then(r => {
            return this._patch(r);
        })
    }

    async setTwitterUsername(twitter_username){
        return this.client.api.user.patch({ body:{ twitter_username } }).then(r => {
            return this._patch(r);
        })
    }

    async setCompany(company){
        return this.client.api.user.patch({ body: { company } }).then(r => {
            return this._patch(r);
        })
    }

    async setLocation(location){
        return this.client.api.user.patch({ body: { location } }).then(r => {
            return this._patch(r);
        })
    }

    async setHireable(hireable){
        return this.client.api.user.patch({ body: { hireable } }).then(r => {
            return this._patch(r);
        })
    }

    async setBio(bio){
        return this.client.api.user.patch({ body: { bio } }).then(r => {
            return this._patch(r);
        })
    }

    async setAll(options){
        let {
            email,
            name,
            blog,
            twitterUsername,
            company,
            location,
            hireable,
            bio
        } = options;
        return this.client.api.user.patch({ body: { email, name, blog, twitter_username: twitterUsername, company, location, hireable, bio } }).then(r => {
            return this._patch(r);
        })
    }

}

module.exports = User;