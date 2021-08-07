import fetch, { Response } from "node-fetch";
import { URLSearchParams } from "url";
import Client from "../structures/client";
import { snakeCasify } from ".";
import GHError from "./error";

/**
 * Description placeholder
 *
 * @type {"https://api.github.com/"}
 */
const Base = "https://api.github.com/";

/**
 * Description placeholder
 *
 * @async
 * @param {({
  path: string;
  query?: Partial<Record<string, unknown>>;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
  method?: "post" | "get" | "delete" | "patch" | "put";
  _?: boolean;
})} {
  path,
  query = {},
  headers = {},
  body,
  method = "get",
  _,
}
 * @returns {Promise<Response>}
 */
async function makeReq({
  path,
  query = {},
  headers = {},
  body,
  method = "get",
  _,
}: {
  path: string;
  query?: Partial<Record<string, unknown>>;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
  method?: "post" | "get" | "delete" | "patch" | "put";
  _?: boolean;
}): Promise<Response> {
  const res: Response = await fetch(
    `${Base}${path}?${new URLSearchParams(snakeCasify(query))}`,
    {
      method,
      headers,
      body: body ? JSON.stringify(snakeCasify(body)) : undefined,
    }
  );
  if (!res.ok && !_) throw new GHError(res, await res.json());
  return res;
}

/**
 * Description placeholder
 *
 * @class RestManager
 * @typedef {RestManager}
 */
class RestManager {
  /**
   * Description placeholder
   *
   * @private
   * @readonly
   * @type {Client}
   */
  private readonly client: Client;
  /**
   * Creates an instance of RestManager.
   *
   * @constructor
   * @param {Client} client
   */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Description placeholder
   *
   * @param {string} path
   * @param {{
        query?: Record<string, unknown>;
        headers?: Record<string, string>;
        body?: Record<string, unknown>;
        _?: boolean;
        auth?: boolean;
      }} [options={}]
   * @returns {{
      post: () => Promise<Response>;
      get: () => Promise<Response>;
      put: () => Promise<Response>;
      delete: () => Promise<Response>;
      patch: () => Promise<Response>;
    }}
   */
  req(
    path: string,
    options: {
      query?: Record<string, unknown>;
      headers?: Record<string, string>;
      body?: Record<string, unknown>;
      _?: boolean;
      auth?: boolean;
    } = {}
  ): {
    post: () => Promise<Response>;
    get: () => Promise<Response>;
    put: () => Promise<Response>;
    delete: () => Promise<Response>;
    patch: () => Promise<Response>;
  } {
    const { query = {}, headers = {}, body, _, auth = true } = options;
    headers["accept"] ??= "application/vnd.github.v3+json";
    if (auth) headers["Authorization"] ??= `token ${this.client.token}`;
    return {
      post: (): Promise<Response> =>
        makeReq({ path, query, body, headers, method: "post", _ }),
      get: (): Promise<Response> =>
        makeReq({ path, query, body, headers, method: "get", _ }),
      patch: (): Promise<Response> =>
        makeReq({ path, query, body, headers, method: "patch", _ }),
      delete: (): Promise<Response> =>
        makeReq({ path, query, body, headers, method: "delete", _ }),
      put: (): Promise<Response> =>
        makeReq({ path, query, body, headers, method: "put", _ }),
    };
  }
}

export { RestManager };
