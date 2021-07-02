import { Response } from "node-fetch";
import Client from "../structures/client";
import Manager from "./manager";

class ArtifactsManager extends Manager {
    owner: string;
    repo: string;
    constructor({ client }: { client: Client }, {owner, repo}: {owner: string, repo: string}){
        super({ client })
        this.owner = owner;
        this.repo = repo;
    }
    async list(options: {
        page?: number
        per_page?: number
    }) {
       return await this.client.api
        .req(`/repos/${this.owner}/${this.repo}/actions/artifacts`, {query: options})
        .get()
        .then(async (res: Response) =>  {
            return await res.json()
        })
        .catch((e: any) => {
            throw new Error(e);
        })
    }
    async get(artifactId: number) {
        return await this.client.api
        .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}`)
        .get()
        .then(async (res: Response) => {
            return await res.json()
        })
    }
    async delete(artifactId: number){
        return await this.client.api
        .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}`)
        .delete()
        .then(async (res: Response) => {
            return await res.json()
        })
    }
    async download(artifactId: number){
        return await this.client.api
        .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}/zip`)
        .get()
        .then(async (res: Response) => {
            return await res.json()
        })
    }
}

export default ArtifactsManager;