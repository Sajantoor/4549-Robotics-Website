import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <Link to="/vex">
          <h1> Vex </h1>
        </Link>

        <h1 id="teams"> Teams
          <div className="absolute">
            <div className="teamsDropDown">
              <Link to="/teams/4549A"> 4549A </Link>
              <Link to="/teams/4549B"> 4549B </Link>
              <Link to="/teams/4549C"> 4549C </Link>
              <Link to="/teams/4549D"> 4549D </Link>
              <Link to="/teams/4549E"> 4549E </Link>
              <Link to="/teams/4549F"> 4549F </Link>
            </div>
          </div>
        </h1>

        <Link to="/about">
          <h1> About </h1>
        </Link>
        <Link to="/">
          <h1> Home </h1>
        </Link>
      </div>
    );
  }
}

export default Header;
