type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? T extends "_"
    ? `${Lowercase<T>}${CamelToSnakeCase<U>}`
    : `${T extends Capitalize<T>
        ? "_"
        : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

type StringValues<T> = {
  [K in keyof T]: string;
};

type KeysToSnakeCase<T> = {
  [K in keyof T as CamelToSnakeCase<string & K>]: T[K];
};

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
