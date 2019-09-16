import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavDown } from '../assets/navDown.svg';

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
        <h2> Envertronics </h2>
        <h2 ref="subtitle" id="subtitle"> {this.state.subtitle} </h2>
        <Link to="/about">
          <button aria-label="Learn More" className="button">
            LEARN MORE
          </button>
        </Link>
              {this.props.children}
        <NavDown/>


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
