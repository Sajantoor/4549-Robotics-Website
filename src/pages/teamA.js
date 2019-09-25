import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';
import Instagram from '../components/Instagram';
import { Link } from 'react-router-dom';

class A extends React.Component {
  render() {
    let teamMembers = {
        name: [
          "PewDiePie",
          "Elon Musk",
        ],
        img: [
          "https://s3.dexerto.com/thumbnails/_thumbnailLarge/pewdiepie-iron-cross-responds-youtube-video-donation-adl.jpg",
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/Elon_Musk_2-770x433.jpeg?6sX4KX8FoInpgQGTfgzXkXtTpZk7K0NF",
        ],
        roles: [
          "Builder",
          "Lead Programmer, Builder"
        ],
        description: [
          "Wow this is a description",
          "Another one!"
        ],
      }

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549A"
          title2="Envertronics"
          subtitle={["Satvik Garg", "Jackie Le", "Owen Gill", "Huy Ngo", "Sajan Toor",]}
          time={2000}
          >
            <Link to="/about">
              <button aria-label="Learn More" className="button">
                LEARN MORE
              </button>
            </Link>
        </FrontPage>

        <Text
          color="#1c1c1c"
          title="The Robot"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc."
          img="https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"
        >
          <Link to="/teams">
            <button aria-label="Learn More" className="button">
              LEARN MORE
            </button>
          </Link>
        </Text>

        <Members members={teamMembers}>
        </Members>

        <Instagram username="mkbhd"/>
      </React.Fragment>
    )
  }
}

export default A;
