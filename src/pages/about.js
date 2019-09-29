import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function About() {
  return(
    <React.Fragment>
      <Header/>
      <FrontPage
        title="About"
        title2="This Is Who We Are 🇨🇦"
        >
        <Logo/>
      </FrontPage>
      <Text
        color="#1c1c1c"
        title="About Envertronics"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc."
        img="https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"
      >
        <Link to="/teams">
          <button aria-label="Learn More" className="button">
            LEARN MORE
          </button>
        </Link>
      </Text>

      <Text
        title="About Enver Creek"
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
        title="About this Website"
        body="This website was designed and programmed by one of Envertronics' students: Sajan Toor. This website was programmed in a JavaScript framework called ReactJS."
        color="#010101"
        img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      >
      <a href="https://github.com/Sajantoor/4549-Robotics-Website" target="_blank" rel="noopener noreferrer">
        <button aria-label="Learn More" className="button">
          View Source Code
        </button>
      </a>
      </Text>
    </React.Fragment>
  )
}

export default About;
