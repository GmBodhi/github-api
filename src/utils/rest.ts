import fetch, { Response } from "node-fetch";
import { URLSearchParams } from "url";
import Client from "../structures/client";
import { snakeCasify } from ".";

const Base = "https://api.github.com/";

async function makeReq({
  path,
  query = {},
  headers = {},
  body = {},
  method = "get",
}: {
  path: string;
  query?: Partial<Record<string, unknown>>;
  headers?: Record<string, any>;
  body?: Record<string, any>;
  method?: "post" | "get" | "delete" | "patch" | "put";
}): Promise<Response> {
  const res = await fetch(
    `${Base}${path}?${new URLSearchParams(snakeCasify(query))}`,
    {
      method,
      headers,
      body: JSON.stringify(snakeCasify(body)),
    }
  );
  return res;
}

class RestManager {
  private readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  req(
    path: string,
    options?: {
      query?: Record<string, any>;
      headers?: Record<string, any>;
      body?: Record<string, any>;
    }
  ): {
    post: Function;
    get: Function;
    put: Function;
    delete: Function;
    patch: Function;
  } {
    const { query = {}, headers = {}, body = {} } = options ?? {};
    headers["accept"] = "application/vnd.github.v3+json";
    headers["Authorization"] = `token ${this.client.token}`;
    return {
      post: () => makeReq({ path, query, body, headers, method: "post" }),
      get: () => makeReq({ path, query, body, headers, method: "post" }),
      patch: () => makeReq({ path, query, body, headers, method: "post" }),
      delete: () => makeReq({ path, query, body, headers, method: "post" }),
      put: () => makeReq({ path, query, body, headers, method: "post" }),
    };
  }
}

export default RestManager;
