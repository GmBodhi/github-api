import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

export default function Nav(props) {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/docs" activeClassName="active" className="nav-link">
        Docs
      </NavLink>
    </nav>
  );
}
