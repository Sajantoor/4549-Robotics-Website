import React from 'react';

class Awards extends React.Component {
  render() {
    return(
      <div className="awards" style={{backgroundColor: this.props.color}}>
        {this.props.children}
        {this.props.content.map((name, i) =>
          <div className={this.props.team ? "awardContainer awardContain" : "awardContain"}>
            <img src={this.props.content[i].img} alt={this.props.content[i].name}/>
            <h1> {this.props.content[i].name} </h1>
            <p> {this.props.content[i].body} </p>
            {this.props.content[i].date &&
              <p> {this.props.content[i].date} </p>
            }

            {this.props.content[i].link &&
              <a className="button" href={this.props.content[i].link}> Learn More </a>
            }
          </div>
        )}
      </div>
    )
  }
}

export default Awards;
