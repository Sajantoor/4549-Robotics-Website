import React from 'react';

// how to get posts
class Instagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "mkbhd",
      bio: false,
      pfp: false,
      img: [],
    }
  }

  render() {
    return(
      <div className="instagram">
        <a href={`https://www.instagram.com/${this.state.username}`}>
          <h1 ref="title"> {this.state.username} </h1>
        </a>
        <p> {this.state.bio} </p>
        <img src={this.state.pfp} alt=""/>
        {this.state.img.map((image, index) =>
          <img src={image}/>
        )}
      </div>
    )
  }

  componentDidMount() {
    this.getPost(this.state.username)
  }

    getPost(username) {
      const this_ = this;
      let url = `https://www.instagram.com/${username}/?__a=1`;
      fetch(url).then(function(response) {
          response.json().then(function(data) {
            console.log(data);
            let imgArray = [];
            let images = data.graphql.user.edge_owner_to_timeline_media.edges;
            let n

            if (images.length > 5) {
              n = 5;
            } else {
              n = images.length
            }

            for (var i = 0; i < n; i++) {
              try {
                imgArray.push(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url);
              } catch(error) {
                console.log(error);
              }
            }


            this_.setState({
              username: data.graphql.user.username,
              bio: this_.newLineRemoval(data.graphql.user.biography),
              pfp: data.graphql.user.profile_pic_url_hd,
              img: imgArray,
            })
          });
        }
      )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
      this.getPost(username)
    });
  }

  newLineRemoval(strings) {
    let array = [];
    let n = strings.lastIndexOf('\n');
    strings.split('\n')
    for (var i = 0; i < strings.split('\n').length; i++) {
      array.push(strings.split('\n')[i]);
      array.push(<br/>);
    }

    return array;
  }
}


export default Instagram;
