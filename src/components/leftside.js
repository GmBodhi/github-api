import React from "react";

import { useState } from "react";

let i = false;
const fetchDocs = (setJson, version) => {
  if (i) return;
  i = true;
  fetch(
    `https://cdn.statically.io/gh/gmbodhi/github-api/dev/docs/${version}.json`
  )
    .then((res) => res.json())
    .then((r) => setJson(r));
};

let tm = Date.now();

export default function LeftSide({ version }) {
  const [json, setJson] = useState({ children: [] });
  fetchDocs(setJson, version);

  return (
    <div className="left-side">
      {json.children.map((b) => {
        return (
          <li key={b.id}>
            <a>{b.name}</a>
          </li>
        );
      })}
    </div>
  );
}
