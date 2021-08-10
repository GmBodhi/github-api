import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/leftside.css';

export default function LeftSide({json}) {
  return (
    <div className="left-side">
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
