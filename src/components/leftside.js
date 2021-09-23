import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import "../css/leftside.css";

export default function LeftSide({ json }) {
  const { branch, version } = useParams();
  const [redirect, setRedirect] = useState(<></>);
  const [lbranch, setBranch] = useState(branch);
  const [lversion, setVersion] = useState(version);
  useEffect(() => {
    setRedirect(<Redirect to={`/docs/${lbranch}/${lversion}/`} />);
  }, [lversion, lbranch]);
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
        {json ? (
          json.children.map((title) => {
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
          })
        ) : (
          <p>Fetching.. Please wait</p>
        )}
      </ul>
    </div>
  );
}
