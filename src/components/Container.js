import React from 'react';


class Container extends React.Component {
  render() {
    return(
      <div className={this.props.team ? "awardContainer awardContain" : "awardContain"}>
        <img src={this.props.content.img} alt={this.props.content.name}/>
        <h2> {this.props.content.name} </h2>
        <p> {this.props.content.body} </p>
        {this.props.content.date &&
          <p> {this.props.content.date} </p>
        }

        {this.props.content.link &&
          <a className="button" style={{maxWidth: '55%', padding: '1vmin 2.5vmin 1vmin 2.5vmin'}} href={this.props.content.link}> {this.props.content.linkContent} </a>
        }
      </div>
    )
  }
}

export default Container
