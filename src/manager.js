//@ts-check
const { Collection } = require('@discordjs/collection')

class BaseManager {
    constructor(data, { client }){
        this.client = client;
        this.cache = new Collection();
    }

    add(id, data){
        this.cache.set(id, data);
        return data;
    }

    resolve(id){
        return this.cache.get(id) ?? null;
    }

}