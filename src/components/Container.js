import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkScroll: false,
    }
  }

  render() {
    return(
        <div className={this.props.team ? "awardContainer awardContain" : "awardContain"}>
          <Waypoint
            onEnter={() => this.setState({checkScroll: true})}
          />
          <CSSTransitionGroup
            key={this.state.checkScroll ? 'stay' : null}
            transitionName="fadeInLeft"
            transitionAppear={this.state.checkScroll}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            >
          <img src={this.props.content.img} alt={this.props.content.name}/>
          <h2> {this.props.content.name} </h2>
          <p> {this.props.content.body} </p>
          {this.props.content.date &&
            <p> {this.props.content.date} </p>
          }

          {this.props.content.link &&
            <a className="button" style={{maxWidth: '55%', padding: '1vmin 2.5vmin 1vmin 2.5vmin'}} href={this.props.content.link}> {this.props.content.linkContent} </a>
          }
          </CSSTransitionGroup>
        </div>
    )
  }
}

export default Container
