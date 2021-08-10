import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Docs from "./components/Docs";
import Home from "./components/Home";
import "./css/global.css";

function App() {
  const target = window.location.search.split("=");
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/docs/:branch/:version/:docs">
            <Docs />
          </Route>
          <Route path="/docs/:branch/:version/">
            <Docs />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/docs/*">
            <Docs />
          </Route>
          <Route path="/">
            {target[1] && target[0] === "?fw" ? (
              <Redirect to={target[1]} />
            ) : (
              <></>
            )}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
