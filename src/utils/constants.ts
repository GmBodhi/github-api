export interface FetchOptions {
  cache?: boolean;
  force?: boolean;
}

/**
 * Options for fetching the api
 * @typedef {Object} FetchOptions
 * @property {boolean} cache - returned resource should be cached or not
 * @property {boolean} force - Force skip the cache check before requesting the api
 */
