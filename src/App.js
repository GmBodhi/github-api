import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Docs from './components/Docs';
import Home from './components/Home';
import './css/global.css';

function App() {
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
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
