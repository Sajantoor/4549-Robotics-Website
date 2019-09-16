import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return(
      <div className="navigation">
        <Link to="/about"> 
          <h1> Vex </h1>
        </Link>

        <h1 id="teams"> Teams
          <div className="teamsDropDown">
            <Link to="/teams/4549A"> 4549A </Link>
            <Link to="/teams/4549B"> 4549B </Link>
            <Link to="/teams/4549C"> 4549C </Link>
          </div>
        </h1>

        <Link to="/about">
          <h1> About </h1>
        </Link>
      </div>
    );
  }
}

export default Navigation;
