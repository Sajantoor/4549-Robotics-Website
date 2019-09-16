import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return(
      <div className="navigation">
        <h1> About </h1>
        <h1> Teams </h1>
          <div className="teamsDropDown">
            <Link to="/teams/4549A"> 4549A </Link>
            <Link to="/teams/4549B"> 4549B </Link>
            <Link to="/teams/4549C"> 4549C </Link>
          </div>
        <h1> Vex </h1>
      </div>
    );
  }
}

export default Navigation;
