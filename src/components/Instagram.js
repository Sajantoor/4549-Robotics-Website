import React from 'react';

// how to get posts
class Instagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: false,
      bio: false,
    }
  }

  render() {
    return(
      <div className="instagram">
        <h1 ref="title"> {this.state.username} </h1>
        <p> {this.state.bio} </p>
        <img src=""/>
      </div>
    )
  }

  componentDidMount() {
    this.getPost("4549alpha")
  }

    getPost(username) {
      const this_ = this;
      let url = `https://www.instagram.com/${username}/?__a=1`;
      fetch(url).then(function(response) {
          response.json().then(function(data) {
            console.log(data);

            this_.setState({
              username: data.graphql.user.username,
              bio: data.graphql.user.biography,
            })
          });
        }
      )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
      this.getPost(username)
    });
  }
}


export default Instagram;
