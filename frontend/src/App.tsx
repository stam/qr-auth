import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Header from './components/Header';
import Factory from './screens/Factory';
import Scan from './screens/Scan';
import Demo from './screens/Demo';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header>
            <NavLink to="/" exact>Factory</NavLink>
            <NavLink to="/scan">Scan</NavLink>
            <NavLink to="/demo">Demo</NavLink>
        </Header>
        <Switch>
          <Route path="/" exact>
            <Factory />
          </Route>
          <Route path="/scan">
            <Scan />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
