import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as NavDown } from '../assets/navDown.svg';

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

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.subtitle = ["Perseverance", "Respect", "Intergrity", "Determination", "P.R.I.D.E",]

    this.state = {
      index: 0,
      subtitle: this.subtitle[0],
    }
  }


  render() {
    return(
      <div className="frontPage">
        <h1> 4549 </h1>
        <h2> ENVERTRONICS </h2>
        <h2 ref="subtitle" id="subtitle"> {this.state.subtitle} </h2>
          <Link to="/about">
            <button className="button">
              LEARN MORE
            </button>
          </Link>
        <Logo></Logo>
      </div>
    );
  }

  componentDidMount() {
    const this_ = this;
    let index = this_.state.index;
    this.setState({subtitle: this_.subtitle[this.state.index]});

    setInterval(function() {
      if (index === 4) {
        index = 0;
      } else {
        index++;
      }

      this_.setState({
        index: index,
        subtitle: this_.subtitle[index],
      });
    }, 2000);
  }
}

export default FrontPage;
