import React from 'react';

// how to get posts
class Instagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      bio: false,
      pfp: false,
      img: [],
      size: false,
    }
  }

  render() {
    return(
      <div className="instagram">
        <div className="container">
          <img className="pfp" src={this.state.pfp} alt=""/>
          <a href={`https://www.instagram.com/${this.state.username}`}>
            <h1 ref="title"> {this.state.username} </h1>
          </a>
          <p> {this.state.bio} </p>
      </div>
        <div class="feed">
        {this.state.img.map((image, index) =>
          <div className="instaContain" key={index + "contain"}>
            <img src={image} key={index} style={{width: this.state.size + "vmax", height: this.state.size + "vmax"}}  className="images" alt=""/>
          </div>
        )}
        </div>
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
            let n;

            if (images.length > 6) {
              n = 6;
            } else {
              n = images.length;
            }

            for (var i = 0; i < n; i++) {
              try {
                imgArray.push(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url);
              } catch(error) {
                console.log(error);
              }
            }
            let size;

            if (2 >= n) {
              size = 40;
            } else if (3 >= n) {
              size = 25;
            }


            this_.setState({
              username: data.graphql.user.username,
              bio: data.graphql.user.biography,
              pfp: data.graphql.user.profile_pic_url_hd,
              img: imgArray,
              size: size,
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
