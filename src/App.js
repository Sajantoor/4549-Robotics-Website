import React from 'react';
import Home from './pages/home';
import A from './pages/teamA';
import B from './pages/teamB';
import Vex from './pages/vex';
import Page404 from './components/404';
import './Fonts/fonts.css';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div id="App">
        <Switch>
          <Route path={["/", "/home",]} exact component={Home}></Route>
          <Route path="/teams/4549A" component={A}></Route>
          <Route path="/teams/4549B" component={B}></Route>
          <Route path="/vex" component={Vex}></Route>
          <Route component={Page404}></Route>
        </Switch>
      </div>
    </Router>
  );
}

// BUG: MS Edge does not like "Logo.svg", removing it fixes the issues.

export default App;
