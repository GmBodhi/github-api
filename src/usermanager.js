const Manager = require('./manager');
const User = require('./user');

class UserManager extends Manager {
    constructor(){
        super()
    }

    async fetch(id, { cache = true, force = false }){
        let o = this.cache.get(id)
        if (o && !force) return o;
        return this.client.api.users(id).get().then(r => {
            if (cache) return this.add(r.login, r)
            return new User(r, { client: this.client })
        })
    }
    
    add(id, data){
        let o = new User(data, { client: this.client });
        this.cache.set(id, o)
        return o;
    }

    async get(query = {}, cache = true){
        let {
            since,
            perPage            
        } = query;

        this.client.api.users.get({ query: `${ since ? "since="+since+"&" : "" }${ perPage ? "per_page="+perPage : "" }` }).then((r = []) => {
            let users = [];
            r.forEach(user => {
                user = cache ? this.add(user.login, user) : new User(user, { client: this.client });
                users.push(user);
            });
            return users;
        });
    };


}

module.exports = UserManager