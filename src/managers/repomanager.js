//@ts-check
"use strict";
const Manager = require('./manager');

class RepoManager extends Manager {
    constructor({ client, url }){
        super({ client, url });
    }
}