import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import '../css/nav.css';

export default function Nav() {
  const history = useHistory();
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="../../"
            exact
            activeClassName="active"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              history.push('/');
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" activeClassName="active" className="nav-link">
            Docs
          </NavLink>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a
            href="https://github.com/GmBodhi/github-api"
            target="_blank"
            className="nav-link external" rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/PVjQxyF3Jv"
            target="_blank"
            className="nav-link external" rel="noreferrer"
          >
            Discord
          </a>
        </li>
      </ul>
    </nav>
  );
}
