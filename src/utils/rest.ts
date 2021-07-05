import fetch, { Response } from "node-fetch";
import { URLSearchParams } from "url";
import Client from "../structures/client";
import { snakeCasify } from ".";
import GHError from "./error";

const Base = "https://api.github.com/";

async function makeReq({
  path,
  query = {},
  headers = {},
  body = {},
  method = "get",
  _,
}: {
  path: string;
  query?: Partial<Record<string, unknown>>;
  headers?: Record<string, any>;
  body?: Record<string, any>;
  method?: "post" | "get" | "delete" | "patch" | "put";
  _?: boolean | undefined;
}): Promise<Response> {
  const res = await fetch(
    `${Base}${path}?${new URLSearchParams(snakeCasify(query))}`,
    {
      method,
      headers,
      body: JSON.stringify(snakeCasify(body)),
    }
  );
  if (!res.ok && !_) throw new GHError(res, await res.json());
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
      _?: boolean | undefined;
    }
  ): {
    post: Function;
    get: Function;
    put: Function;
    delete: Function;
    patch: Function;
  } {
    const { query = {}, headers = {}, body = {}, _ } = options ?? {};
    headers["accept"] ??= "application/vnd.github.v3+json";
    headers["Authorization"] ??= `token ${this.client.token}`;
    return {
      post: () => makeReq({ path, query, body, headers, method: "post", _ }),
      get: () => makeReq({ path, query, body, headers, method: "get", _ }),
      patch: () => makeReq({ path, query, body, headers, method: "patch", _ }),
      delete: () =>
        makeReq({ path, query, body, headers, method: "delete", _ }),
      put: () => makeReq({ path, query, body, headers, method: "put", _ }),
    };
  }
}

export { RestManager };
