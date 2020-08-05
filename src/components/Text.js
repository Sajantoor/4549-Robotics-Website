import React from 'react';

class Text extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noImage: false,
    }
  }

  render() {
    let name = this.props.right ? ("text right") : "text";
    return(
      <div className={name} style={{backgroundColor: this.props.color }}>
          <h1> {this.props.title} </h1>
          <p style={this.props.fullWidth ? {width: 80 + '%'} : null}> {this.props.body} </p>

          {this.props.children}

        {this.props.img &&
          <div className="img-contain">
            <img src={this.props.img} alt=""/>
          </div>
        }

        {this.props.right && <div style={{clear: 'both'}}></div>}
      </div>
    );
  }
}

export default Text;
