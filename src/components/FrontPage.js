import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavDown } from '../assets/navDown.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.subtitle = ["Perseverance", "Respect", "Integrity", "Determination", "Excellence", "P.R.I.D.E",]

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
        <Logo/>
        <NavDown/>
        <div ref="bg" id="bg"></div>
      </div>
    );
  }

  componentDidMount() {
    const this_ = this;
    let index = this_.state.index;
    this.setState({subtitle: this_.subtitle[this.state.index]});

    setInterval(function() {
      if (index === (this_.subtitle.length - 1)) {
        index = 0;
      } else {
        index++;
      }

      this_.setState({
        index: index,
        subtitle: this_.subtitle[index],
      });
    }, 2000);


    function moveBackground(this_) {
        let bg = this_.refs.bg;
        let x = random(200, -200);
        let y = random(200, -200);

        bg.style.backgroundPosition = `${x}px ${y}px`;
    }

    function random(max, min) {
      let x = Math.floor(Math.random() * (max - min) + min);
      return x;
    }

    setTimeout(moveBackground, 500, this);
    setInterval(moveBackground, 5000, this);
  }
}

export default FrontPage;
