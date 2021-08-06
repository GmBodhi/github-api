import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/nav.css";

export default function Nav(props) {
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
              history.push("/");
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
        <li>
          <a
            href="https://github.com/GmBodhi/github-api"
            target="_blank"
            className="nav-link external"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
