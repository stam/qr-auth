import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Header from './components/Header';
import Factory from './screens/Factory';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header>
            <NavLink to="/">Factory</NavLink>
        </Header>
        <Switch>
          <Route path="/">
            <Factory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
