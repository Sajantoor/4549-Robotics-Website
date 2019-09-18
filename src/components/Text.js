import React from 'react';

class Text extends React.Component {
  render() {
    return(
      <div className="text" style={{backgroundColor: this.props.color }}>
        <div className="img-contain">
          <img src={this.props.img} alt=""/>
        </div>
        <h1> {this.props.title} </h1>
        <p> {this.props.body} </p>
        {this.props.children}
      </div>
    );
  }
}

export default Text;
