"use strict";
const fetch = require("node-fetch");

const noop = () => {}; // eslint-disable-line no-empty-function
const methods = ["get", "post", "delete", "patch", "put"];
const reflectors = [
  "toString",
  "valueOf",
  "inspect",
  "constructor",
  Symbol.toPrimitive,
  Symbol.for("nodejs.util.inspect.custom"),
];

function buildRoute(manager) {
  const route = [""];
  const handler = {
    get(target, name) {
      if (reflectors.includes(name)) return () => route.join("/");
      if (methods.includes(name)) {
        const routeBucket = [];
        for (let i = 0; i < route.length; i++) {
          // Reactions routes and sub-routes all share the same bucket
          if (route[i - 1] === "reactions") break;
          // Literal IDs should only be taken account if they are the Major ID (the Channel/Guild ID)
          if (
            /\d{16,19}/g.test(route[i]) &&
            !/channels|guilds/.test(route[i - 1])
          )
            routeBucket.push(":id");
          // All other parts of the route should be considered as part of the bucket identifier
          else routeBucket.push(route[i]);
        }
        return (options) =>
          makeReq(
            name,
            route.join("/"),
            Object.assign(
              {
                route: routeBucket.join("/"),
              },
              options
            ),
            manager
          );
      }
      route.push(name);
      return new Proxy(noop, handler);
    },
    apply(target, _, args) {
      route.push(...args.filter((x) => x != null)); // eslint-disable-line eqeqeq
      return new Proxy(noop, handler);
    },
  };
  return new Proxy(noop, handler);
}

async function makeReq(method, path, { body, headers = {}, query, _ }, token) {
  headers["accept"] = "application/vnd.github.v3+json";
  headers["Authorization"] = `token ${token}`;
  console.log(path, method, body);
  return await fetch(
    encodeURI(`http://api.github.com${path.trim()}${query ? "?" + query : ""}`),
    { method: method, body, headers: headers }
  ).then(async (res) => {
    console.log(res);
    if (!res.ok && !_) throw new Error(res.statusText);
    return { r: await res.json(), res };
  });
}

module.exports = buildRoute;
