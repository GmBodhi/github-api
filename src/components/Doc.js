import React from "react";

export default function Doc({ docs, json }) {
  if (!json) return <p style={{ color: "white" }}>Fetching..! Please wait</p>;
  const [object, prop] = docs.split(/\#\./);
  const obj = json.children.find((o) => o.name === object);
  return <>{obj.comment}</>;
}
