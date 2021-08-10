import React, {useEffect, useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import '../css/leftside.css';

export default function LeftSide({json}) {
  const [redirect, setRedirect] = useState(<></>);
  const [branch, setBranch] = useState('dev');
  const [version, setVersion] = useState('1.0.0');
  useEffect(() => {
    setRedirect(<Redirect to={`/docs/${branch}/${version}/`} />);
  }, [version, branch]);
  return (
    <div className="left-side">
      {redirect}
      <select
        onChange={(e) => {
          setBranch(e.target.value);
        }}
      >
        <option value="dev">dev</option>
        <option value="add-jsdoc">add-jsdoc</option>
      </select>
      <select
        onChange={(e) => {
          setVersion(e.target.value);
        }}
      >
        <option value="1.0.0">1.0.0</option>
      </select>
      <ul>
        {json.children.map((title) => {
          return (
            <li key={title.id} className="left-list">
              <NavLink
                className="left-link"
                to={`${title.name}`}
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
