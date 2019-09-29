import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Instagram from '../components/Instagram';
import VexLogo from '../assets/VexLogo.png';

class Vex extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="VEX"
          title2="Robotics Competition"
          subtitle={["Tower Takeover (2020)", "Turning Point (2019)", "In The Zone (2018)", "Starstruck (2017)", "Nothing But Net (2016)",]}
          time={1000}
          >
            <a href="https://www.vexrobotics.com/" target="_blank" rel="noopener noreferrer">
              <button aria-label="Learn More" className="button">
                VEX's Offical Website
              </button>
            </a>

        </FrontPage>
        <Text
          color="#1c1c1c"
          title="About Vex"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc."
          img={VexLogo}
        >
          <a href="https://www.vexrobotics.com/vexedr" target="_blank" rel="noopener noreferrer">
            <button aria-label="Learn More" className="button">
              About The Competition
            </button>
          </a>
        </Text>

        <Text
          right={true}
          title="About the Competition"
          body="Wow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet."
          img="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"
        >
          <a href="https://www.surreyschools.ca/schools/envercreek/Pages/default.aspx" target="_blank" rel="noopener noreferrer">
            <button aria-label="Learn More" className="button">
              ENVER CREEK'S WEBSITE
            </button>
          </a>
        </Text>

        <Text
          title="Tower Takeover"
          body="Wow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet."
          img="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"
        >
        <iframe title="towerTakeover" width="560" height="315" src="https://www.youtube.com/embed/_JVQOiw_OUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Text>

        <Instagram username="vexrobotics"/>
      </React.Fragment>
    )
  }
}

export default Vex;
