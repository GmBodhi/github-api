import { Response } from "node-fetch";
import Client from "../structures/client";
import { ArtifactData, ArtifactListData } from "../utils";
import Manager from "./manager";

class ArtifactsManager extends Manager {
  owner: string;
  repo: string;
  constructor(
    { client }: { client: Client },
    { owner, repo }: { owner: string; repo: string }
  ) {
    super({ client });
    this.owner = owner;
    this.repo = repo;
  }
  async list(options: {
    page?: number;
    perPage?: number;
  }): Promise<ArtifactListData> {
    return await this.client.api
      .req(`/repos/${this.owner}/${this.repo}/actions/artifacts`, {
        query: options,
      })
      .get()
      .then((res: Response) => {
        return res.json();
      })
      .catch((e: Error) => {
        throw e;
      });
  }
  async get(artifactId: number): Promise<ArtifactData> {
    return await this.client.api
      .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}`)
      .get()
      .then((res: Response) => {
        return res.json();
      });
  }

  // For the time being we will leave as it is... Unless confirm with tests
  async delete(artifactId: number): Promise<unknown> {
    return await this.client.api
      .req(`/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}`)
      .delete()
      .then((res: Response) => {
        return res.json();
      });
  }
  async download(artifactId: number): Promise<unknown> {
    return await this.client.api
      .req(
        `/repos/${this.owner}/${this.repo}/actions/artifacts/${artifactId}/zip`
      )
      .get()
      .then((res: Response) => {
        return res.json();
      });
  }
}

export default ArtifactsManager;
