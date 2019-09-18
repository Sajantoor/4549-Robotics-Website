import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <button style={backgroundColor: this.props.bgColor; color: this.props.color} aria-label={this.props.title} className="button">
        {this.props.title}
      </button>
    )
  }

}
