import React from 'react';

class Text extends React.Component {
  render() {
    let name = this.props.right ? ("text right") : "text";

    return(
      <div className={name} style={{backgroundColor: this.props.color }}>
        <h1> {this.props.title} </h1>
        <p> {this.props.body} </p>
        <div className="img-contain">
          <img src={this.props.img} alt=""/>
        </div>
        {this.props.right && <div style={{clear: 'both'}}></div>}
        {this.props.children}
      </div>
    );
  }
}

export default Text;
