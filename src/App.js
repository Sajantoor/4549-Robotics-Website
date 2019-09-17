import React from 'react';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import Text from './components/Text';
import './Fonts/fonts.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
          <div id="App">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/test" component={Header}></Route>
              { // <Route path="/" component={Home}></Route>
            //  <Route component={Page404}/>
              }
            </Switch>
          </div>
        </Router>
  );
}

function Home() {
  return(
    <React.Fragment>
      <Header/>
      <FrontPage/>
      <Text/>
    </React.Fragment>
  )
}

export default App;
