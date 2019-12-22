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
          body="Our first season competing in the Vex Robotics Competition was the 2012-2013 game, Sack Attack. Envertronics is now entering its 8th year competing in the competition. Throughout our last 7 seasons, we have won a combined 48 awards. During last season alone, we totaled 19 awards. Thats means 40% of all of our accomplishments are from last year. The VRC Competition, Turning Point was not only the test year for V5, but also our new format. Enver Creek Robotics is now offered as a course within the standard timetable. This allows students to spend more time working on their robot and generally allows for more to get done over less time, as everyone is provided 80 minutes of daily work time from September to January."
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

        <Text
          color="#1c1c1c"
          title="Our Values"
          body="Some subtitle here"
        >
          <h2> Perseverance </h2>
          <h2> Respect </h2>
          <h2> Integrity </h2>
          <h2> Determination </h2>
          <h2> Excellence </h2>
        </Text>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default Home;
