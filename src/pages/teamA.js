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
          "Satvik Garg",
          "Jackie Le",
          "Sajan Toor",
          "Huy Ngo",
          "Owen Gill",
        ],

        img: [
          "/4549a/Satvik.jpg",
          "/4549a/Jackie.jpg",
          "/4549a/Sajan.jpg",
          "/4549a/Huy.jpg",
          "/4549a/Owen.jpg",
        ],

        roles: [
          "Programmer / Builder",
          "Builder / Designer",
          "Lead Programmer / Website Designer and Programmer",
          "Builder / Designer",
          "Documenter / Programmer",


        ],
        description: [
          "When nothing goes right, go left.",
          "Just wait and see.",
          "Grind Never Quit 🔥",
          "I'm a simple dude and I do complex things.",
          "You must fail to succeed, experience is key.",
        ],
      }

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549A"
          title2="Envertronics"
          subtitle={teamMembers.name}
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

        <Instagram username="4549alpha"/>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default A;
