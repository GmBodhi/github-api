import React, { useEffect } from "react";

import { useState } from "react";

const fetchDocs = (setJson, { version, branch }) => {
  fetch(
    `https://cdn.statically.io/gh/gmbodhi/github-api/${branch}/docs/${version}.json`
  )
    .then((res) => res.json())
    .then((r) => setJson(r));
};

export default function LeftSide({ version, branch }) {
  const [json, setJson] = useState({ children: [] });
  useEffect(() => {
    fetchDocs(setJson, {
      version,
      branch,
    });
  }, [version, branch]);

  return (
    <div className="left-side">
      {json.children.map((title) => {
        return (
          <li key={title.id}>
            <a>{title.name}</a>
          </li>
        );
      })}
    </div>
  );
}
