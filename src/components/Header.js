import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
      page: false,
    }
  }
  
  render() {
    return(
      <div ref="header" className={this.state.scroll ? "header headerScroll" : "header"}>
        <Link to="/vex">
          <h1 id={(this.state.page === "vex") ? "selected" : null}> Vex </h1>
        </Link>

        <h1 className="teams" id={(this.state.page === "teams") ? "selected" : null}> Teams
          <div className="absolute">
            <div className="teamsDropDown">
              <Link to="/teams/4549A"> 4549A </Link>
            </div>
          </div>
        </h1>
        <Link to="/">
          <h1 id={(this.state.page === "home") ? "selected" : null}> Home </h1>
        </Link>
      </div>
    );
  }

  componentDidMount() {
    let currentPage = window.location.href.split("#")[1].split("/")[1];

    if (currentPage === "teams") {
      this.setState({page: "teams"});
    } else if (currentPage === "vex") {
      this.setState({page: "vex"});
    } else {
      this.setState({page: "home"});
    }
  }
}



export default Header;
