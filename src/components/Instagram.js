import React from 'react';
import { ReactComponent as InstagramLogo } from '../assets/instagramLogo.svg';

// how to get posts
class Instagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      bio: false,
      pfp: false,
      imgData: {
        img: [],
        captions: [],
        link: [],
      },
      size: false,
    }
  }

  render() {
    return(
      <div className="instagram">
        <div className="container">
          <img className="pfp" src={this.state.pfp} alt=""/>
            <a className="follow button" href={`https://www.instagram.com/${this.state.username}`} target="_blank" rel="noopener noreferrer">
              <h2> Follow </h2>
            </a>
          <h1 ref="title"> {this.state.username} </h1>
          <p> {this.state.bio} </p>
      </div>
        <div className="feed">
        {this.state.imgData.img.map((image, index) =>
          <a href={`https://www.instagram.com/p/${this.state.imgData.link[index]}`} target="_blank" rel="noopener noreferrer">
            <div className="instaContain" key={index + "contain"} style={{width: this.state.size + "vmax", height: (this.state.size + 3) + "vmax"}}>
              <div className="logoContain">
                <InstagramLogo/>
              </div>
              <img src={image} key={index} style={{width: this.state.size + "vmax", height: this.state.size + "vmax"}}  className="images" alt=""/>
              <p> {this.state.imgData.captions[index]} </p>
            </div>
          </a>
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
            let obj = {
              img: [],
              captions: [],
              link: [],
            };
            // let imgArray = [];
            // let captionArray = [];
            // let linkArray = [];
            let images = data.graphql.user.edge_owner_to_timeline_media.edges;
            let n;

            if (images.length > 9) {
              n = 9;
            } else {
              n = images.length;
            }

            for (var i = 0; i < n; i++) {
              try {
                obj.img.push(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url);
                obj.captions.push(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text);
                obj.link.push(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode)
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
              imgData: obj,
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
