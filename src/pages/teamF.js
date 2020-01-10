import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';

class F extends React.Component {
  render() {
    const teamMembers = {
        name: [
          "Livleen Chauhan",
          "Parnaam Jhaj",
          "Rhiana Gill",
          "Rohaan Pattar",
        ],

        img: [
          "4549f/Livleen.jpg",
          "4549f/Parnaam.jpg",
          "4549f/Rhiana.jpg",
          "4549f/Rohaan.jpg",
        ],

        roles: [
          "Builder / Designer",
          "Programmer / Designer",
          "Driver / Builder",
          "Builder / Strategist",
        ],

        description: [
          "",
          "Screaming in comic sans.",
          "Running in the 90s plays.",
          "",
        ],
      }

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549F"
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
          body="Our robot started out as a continuous lift, which unfortunately was not a viable option. This led us to change into a tried and trued tray and intake design. Our robot features all components of the robots that we are seeing to be popular in this year’s game: a tray being pushed by an angler with arms on either side of it, which have a tank-tread intake at the end. Our intake is tripled up on sprockets, as that prevents the tank tread from being pushed back and forth around the sprocket. We currently have only one tray, and after many modifications to the robot height and spacing, we will have a triple-folding tray with one more level made of a sliding kit. Our goal is to be able to stack at least 8 cubes, reach the middle towers with our arms, and fix the problem of cubes falling over when being stacked. After nailing the basic features of this design, including the intake and tray, we hope to add many modifications to improve our robots function and stack cubes effectively."
          img="4549f/Robot.png"
        >
        </Text>

        <Members members={teamMembers}>
        </Members>

        <Text
          color="#1c1c1c"
          title="About the team"
          body="4549F is one of six Envertronics teams. We are a rookie team made up of 4 members, ranging from grades 10-12. Parnaam Jhaj is our coder/designer, Livleen Chauhan is our builder/designer, Rohaan Pattar is our strategist, and Rhiana Gill is our driver. We all share a common passion for engineering that we can realize through VEX Robotics. Going through the challenges faced in the process of building our robot provides us with many valuable skills and experiences. Being an emerging team, it has been quite the struggle getting started, but we’ve come a long way since the start of our journey and we only plan to better ourselves from here."
          fullWidth={true}
          >
        </Text>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default F;
