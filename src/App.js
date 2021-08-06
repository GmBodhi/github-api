import React, { useEffect } from "react";
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
  const target = window.location.search.split("=")[1];
  // useEffect(() => {
  //   document.title = Math.random();
  // }, [window.location]);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/docs/:docs">
            <Docs />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/">
            {target ? <Redirect to={target} /> : <></>}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
