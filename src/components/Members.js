import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: this.props.members,
      scrollCheck: false,
    }
  }

  render() {
    return(
      <div className="members">
        <Waypoint
          onEnter={() => this.setState({checkScroll: true})}
        />
        <div>
          <CSSTransitionGroup
            key={this.state.checkScroll ? 'stay' : null}
            transitionName="fadeInTop"
            transitionAppear={this.state.checkScroll}
            transitionAppearTimeout={1000}
          >
          <h1 className="heading"> Team Members </h1>
          </CSSTransitionGroup>
        </div>
        <CSSTransitionGroup
          key={this.state.checkScroll ? 'stay' : null}
          transitionName="fadeIn"
          transitionAppear={this.state.checkScroll}
          transitionAppearTimeout={1000}
        >
        {this.state.members.name.map((Name, i) =>
            <div className="memberContain">
              <img className="avatar" src={this.state.members.img[i]} alt="" key={i + 'img'}></img>
              <div className="textContain">
                <h2 key={i + 'h2'}> {Name} </h2>
                <h3 key={i + 'h3'}> {this.state.members.roles[i]} </h3>
                <p key={i + 'p'}> {this.state.members.description[i]} </p>
              </div>
            </div>
              )
            }
        </CSSTransitionGroup>

        <div style={{clear: 'both'}}></div>
      </div>
    );
  }
}


export default Members;
