import React, {useEffect} from 'react';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/leftside.css';

const fetchDocs = (setJson, {version, branch}) => {
  fetch(
      `https://cdn.statically.io/gh/gmbodhi/github-api/${branch}/docs/${version}.json`,
  )
      .then((res) => res.json())
      .then((r) => setJson(r));
};

export default function LeftSide({version, branch}) {
  const [json, setJson] = useState({
    children: [{name: undefined, id: undefined}],
  });
  useEffect(() => {
    fetchDocs(setJson, {
      version,
      branch,
    });
  }, [version, branch]);

  return (
    <div className="left-side">
      <ul>
        {json.children.map((title) => {
          return (
            <li key={title.id} className="left-list">
              <NavLink
                className="left-link"
                to={`/docs/${title.name}`}
                activeClassName="active"
              >
                {title.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
