import React from 'react';

class Awards extends React.Component {
  render() {
    return(
      <div className="awards">
        {this.props.children}
        {this.props.content.map((name, i) =>
          <div className={this.props.team ? "awardContainer awardContain" : "awardContain"}>
            <img src={this.props.content[i].img} alt={this.props.content[i].name}/>
            <h1> {this.props.content[i].name} </h1>
            <p> {this.props.content[i].body} </p>
            <p> {this.props.content[i].date} </p>
          </div>
        )}
      </div>
    )
  }
}

export default Awards;
