import React from 'react';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: this.props.members,
    }
  }

  render() {
    return(
      <div className="members">
        <h1> Team Members </h1>

        {this.state.members.name.map((Name, i) =>
        <div className="instaContain" style={{height: '35vmax'}}>
          <img className="images" src={this.state.members.img[i]} alt=""></img>
          <h2> {Name} </h2>
          <h3> {this.state.members.roles[i]} </h3>
          <p> {this.state.members.description[i]} </p>
        </div>
          )
        }

      </div>
    );
  }
}


export default Members;
