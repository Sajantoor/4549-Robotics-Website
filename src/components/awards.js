import React from 'react';
import Container from './Container';
import { CSSTransitionGroup } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

class Awards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkScroll: false,
    }
  }

  render() {
    return(
      <div className="awards" style={{backgroundColor: this.props.color}}>
        <Waypoint
          onEnter={() => this.setState({checkScroll: true})}
        />
        <CSSTransitionGroup
          key={this.state.checkScroll ? 'stay' : null}
          transitionName="fadeInTop"
          transitionAppear={this.state.checkScroll}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          >
          {this.props.children}

        </CSSTransitionGroup>
        {this.props.content.map((name, i) =>
          <Container key={i} content={this.props.content[i]} team={this.props.team}/>
        )}
      </div>
    )
  }
}

export default Awards;
