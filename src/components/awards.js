import React from 'react';
import Container from './Container';

class Awards extends React.Component {
  render() {
    return(
      <div className="awards" style={{backgroundColor: this.props.color}}>
        {this.props.children}
        {this.props.content.map((name, i) =>
          <Container content={this.props.content[i]} team={this.props.team}/>
        )}
      </div>
    )
  }
}

export default Awards;
