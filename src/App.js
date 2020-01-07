import React from 'react';
import Home from './pages/home';
import A from './pages/teamA';
import B from './pages/teamB';
import Vex from './pages/vex';
import Page404 from './components/404';
import './Fonts/fonts.css';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

function App() {
  return (

      <Router>
        <div id="App">
          <CSSTransitionGroup
            transitionName="fadeIn"
            transitionAppear={true}
            transitionAppearTimeout={1000}
          >
            <Switch>
              <Route path={["/", "/home",]} exact component={Home}></Route>
              <Route path="/teams/4549A" component={A}></Route>
              <Route path="/teams/4549B" component={B}></Route>
              <Route path="/vex" component={Vex}></Route>
              <Route component={Page404}></Route>
            </Switch>
          </CSSTransitionGroup>
        </div>
      </Router>

  );
}

function scrollAnimate(element) {
  // while (true) {
    console.log(element);
    console.log(element.scrollHeight);
  //   timeout(1000);
  // }

}

// BUG: MS Edge does not like "Logo.svg", removing it fixes the issues.
export { scrollAnimate }
export default App;
