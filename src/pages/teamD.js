import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';
import Instagram from '../components/Instagram';

class D extends React.Component {
  render() {
    const teamMembers = {
        name: [
          "Arman Randhawa",
          "Jaideep Spall",
          "Ritvik Joshi",
          "Sukhraj Purewal",
          "Harman Taggar",
        ],

        img: [
          "4549d/Arman.jpg",
          "4549d/Jaideep.jpg",
          "4549d/Ritvik.jpg",
          "4549d/Sukhraj.jpg",
          "4549d/Harman.jpg",
        ],

        roles: [
          "Programmer / Designer",
          "Builder / Driver / Designer",
          "Team Counselor / Builder",
          "CAD Artist / Scouter",
          "Builder / Backup Driver"
        ],
        description: [
          "Goofy Gang.",
          "Jump like a butterfly, sing like a bee.",
          "If you fail to prepare, prepare to fail.",
          "Practice makes perfect.",
          "Protein shakes.",
        ],
      }

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549D"
          title2="Envertronics"
          subtitle={teamMembers.name}
          time={2000}
          >
          <button aria-label="Learn More" className="button" onClick={() => window.scrollTo({top: document.getElementById('frontPage').clientHeight, behavior: 'smooth'})}>
            LEARN MORE
          </button>
        </FrontPage>

        <Text
          color="#1c1c1c"
          title="The Robot"
          body="Our robot takes the design of the complex traybot. This design is able to capitalize on all aspects of the game effectively. Our robot has a 4 motor; 200RPM; 1:1 drive. A 1 motor; 100RPM; 1:7 tilter. Also a 1 motor; 100RPM; 1:7 2-bar lift. As well as 2 motor; 100RPM; 1:1 intakes. Our traybot excels in stacking, which is the main scoring opportunity within Tower Takeover. The bot is able to take a sizeable capacity of cubes (7+) into its tray, and deposit them into the scoring zones with ease. The lift component comes secondary, as it multiplies our stack points to gain an edge, but it can also serve as a double-edged sword, potentially aiding the opponents points. Our inspiration initially came initially came from the 448X RI3D reveal, as it was shown to have competitive potential and be the “M.E.T.A” robot of this year’s game. We have since been designing and building on top of the design with numerous iterations to improve and suit it to our needs. For the future, we hope to expand our tray capacity to accommodate more cubes (10), and experiment with our intakes to find that difficult balance of compression and speed."
          img="4549d/Robot.png"
        >
        </Text>

        <Members members={teamMembers}>
        </Members>

        <Text
          color="#1c1c1c"
          title="About the team"
          body="4549D is a second year team with 5 members  in Grade 11. We are part of Competitive Robotics to strengthen the friendship we have created over the years, but also to achieve our goal of making it to worlds. Jaideep Spall is our lead Builder and Driver; Arman Randhawa is our Coder and Designer; Sukhraj Purewal is our CAD artist and designer; Harman Taggar is our Builder and Scouter; Ritvik Joshi is our Builder and Drafter. However these positions to us are just labels — labels that do not restrict us from finding solutions to problems. Therefore, there is no one position to us as we encourage each member of the team to figuring out solutions to challenging and tedious problems as well as pursue excellence in whatever position desired by that member."
          fullWidth={true}
          >
        </Text>

        <Instagram username="4549delta"/>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default D;
