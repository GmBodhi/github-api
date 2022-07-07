import ArtifactsManager from '../managers/artifactsManager';
import Base from './base';
import Client from "./client";

class Actions extends Base {
    artifacts: ArtifactsManager;
    owner: string;
    repo: string;
    constructor(client: Client, {owner, repo}: {owner: string, repo: string}){
        super(client);
        this.owner = owner;
        this.repo = repo;
        this.artifacts = new ArtifactsManager({client: this.client}, {owner: this.owner, repo: this.repo});
    }
    
    
}

export default Actions;