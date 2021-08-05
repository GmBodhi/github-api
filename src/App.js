import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Docs from "./components/Docs";
import Home from "./components/Home";
import "./css/global.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
