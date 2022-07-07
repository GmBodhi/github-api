export interface FetchOptions {
  auth?: boolean;
}

/**
 * Options for fetching the api
 * @typedef {Object} FetchOptions
 * @property {boolean} auth - Whether to use authendicate the user using the token provided to the client. If there is not token this option is invalid
 */

export type Email = {
  email: string;
  verified: boolean;
  primary: boolean;
  visibility: string;
};
