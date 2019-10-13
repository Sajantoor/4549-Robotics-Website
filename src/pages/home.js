import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
          <FrontPage
            title="4549"
            title2="Envertronics"
            subtitle={["Perseverance", "Respect", "Integrity", "Determination", "Excellence", "P.R.I.D.E",]}
            time={1000}
            >
            <button aria-label="Learn More" className="button" onClick={() => window.scrollTo({top: document.getElementById('frontPage').clientHeight, behavior: 'smooth'})}>
              LEARN MORE
            </button>
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
          body="Enver Creek is a public secondary school located in Surrey, British Columbia, Canada. It opened in 1997 and has adapted the Cougar as its mascot as well as the school colours of Burgundy and Teal. There are currently over 1,400 students attending Enver Creek with about 125 staff members throughout the school. There are many different course branches that students have the choice of going into. On top of the standard Mathematics, Science fields, Social Studies courses and English classes. We have multiple Language courses offered, Physical & Health Education and Career Life Education to provide students a variety of course types. Art, Band, Dance and Drama covering the Fine Arts. Our Applied Skills courses range from Business and Home Economics, Information & Communication Technology and Technology Education. The District has Online and Summer courses available to students at no extra charge. Sports teams such as Soccer, Basketball, Volleyball, Badminton and Ultimate are run throughout the school year. However, there are many more clubs hosted within Enver Creek such as Green Team. Charities, Student Council, Chess Club, Multicultural Club, Life Drawing and last but certainly not least, Robotics."
          img="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"
        >
          <a href="https://www.surreyschools.ca/schools/envercreek/Pages/default.aspx" target="_blank" rel="noopener noreferrer">
            <button aria-label="Learn More" className="button">
              ENVER CREEK'S WEBSITE
            </button>
          </a>
        </Text>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default Home;
