import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavDown } from '../assets/navDown.svg';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.subtitle = this.props.subtitle;

    this.state = {
      index: 0,
      subtitle: this.subtitle[0],
    }
  }

  render() {
    return(
      <div className="frontPage" ref="frontPage">
        <h1> {this.props.title} </h1>
        <h2> Envertronics </h2>
        <h2 ref="subtitle" id="subtitle"> {this.state.subtitle} </h2>
        {this.props.children}
        <NavDown onClick={() => window.scrollTo({top: this.refs.frontPage.clientHeight, behavior: 'smooth'}) }/>
        <div ref="bg" id="bg"></div>
      </div>
    );
  }

  componentDidMount() {
    const this_ = this;
    this.setState({subtitle: this_.subtitle[this.state.index]});
    setTimeout(this_.moveBackground, 500, this_);
    setInterval(this_.moveBackground, 5000, this_);
    setInterval(this_.changeSubtitle, this.props.time, this_);
  }

  moveBackground(this_) {
   let bg = this_.refs.bg;
   let x = this_.random(200, -200);
   let y = this_.random(200, -200);
   bg.style.backgroundPosition = `${x}px ${y}px`;
 }

 changeSubtitle(this_) {
  let index = this_.state.index;
   if (index === (this_.subtitle.length - 1)) {
     index = 0;
   } else {
     index++;
   }

   this_.setState({
     index: index,
     subtitle: this_.subtitle[index],
   });
 }

 random(max, min) {
   let x = Math.floor(Math.random() * (max - min) + min);
   return x;
 }

 componentWillUnmount() {
    clearInterval(this.moveBackground);
    clearInterval(this.changeSubtitle);
  }
}

export default FrontPage;
