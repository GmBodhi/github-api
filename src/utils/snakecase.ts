/**
 * Description placeholder
 *
 * @typedef {CamelToSnakeCase}
 * @template S extends string
 */
type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? T extends "_"
    ? `${Lowercase<T>}${CamelToSnakeCase<U>}`
    : `${T extends Capitalize<T>
        ? "_"
        : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

/**
 * Description placeholder
 *
 * @typedef {StringValues}
 * @template T
 */
type StringValues<T> = {
  [K in keyof T]: string;
};

/**
 * Description placeholder
 *
 * @typedef {KeysToSnakeCase}
 * @template T
 */
type KeysToSnakeCase<T> = {
  [K in keyof T as CamelToSnakeCase<string & K>]: T[K];
};

/**
 * Description placeholder
 *
 * @export
 * @template T extends Partial<Record<string, unknown>>
 * @param {T} object
 * @returns {KeysToSnakeCase<StringValues<T>>}
 */
export function snakeCasify<T extends Partial<Record<string, unknown>>>(
  object: T
): KeysToSnakeCase<StringValues<T>> {
  return Object.fromEntries(
    Object.entries(object)
      .map(([k, v]) => [
        k
          .split(/(?=[A-Z])/)
          .map((str) => str.toLowerCase())
          .join("_")
          .toString(),
        v,
      ])
      .filter(([, v]) => typeof v !== "undefined")
  ) as KeysToSnakeCase<StringValues<T>>;
}
