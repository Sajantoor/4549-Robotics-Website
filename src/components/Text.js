import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

class Text extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkScroll: false,
      noImage: false,
    }
  }

  render() {
    let name = this.props.right ? ("text right") : "text";
    return(
      <div className={name} style={{backgroundColor: this.props.color }}>
        <Waypoint
          onEnter={() => this.setState({checkScroll: true})}
        />
        <CSSTransitionGroup
          key={this.state.checkScroll ? 'stay' : null}
          transitionName="fadeInLeft"
          transitionAppear={this.state.checkScroll}
          transitionAppearTimeout={1000}
        >
          <h1> {this.props.title} </h1>
          <p style={this.props.fullWidth ? {width: 80 + '%'} : null}> {this.props.body} </p>

          {this.props.children}
        </CSSTransitionGroup>

        {this.props.img &&
          <div className="img-contain">
            <CSSTransitionGroup
              key={this.state.checkScroll ? 'stay' : null}
              transitionName="fadeInRight"
              transitionAppear={this.state.checkScroll}
              transitionAppearTimeout={1000}
            >
            <img src={this.props.img} alt=""/>
            </CSSTransitionGroup>
          </div>
        }

        {this.props.right && <div style={{clear: 'both'}}></div>}
      </div>
    );
  }
}

export default Text;
