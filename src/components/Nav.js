import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/nav.css";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active" className="nav-link">
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
