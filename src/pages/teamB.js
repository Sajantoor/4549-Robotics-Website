import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';
import Instagram from '../components/Instagram';
import Awards from '../components/Awards';
import { Link } from 'react-router-dom';

class B extends React.Component {
  render() {
    const teamMembers = {
        name: [
          "Arpit Dhiman",
          "Meharvan Sambhi",
          "Parneet Garulaa",
          "Steven Pham",
        ],

        img: [
          "/4549b/Arpit.jpg",
          "/4549b/Meharvan.jpg",
          "/4549b/Parneet.jpg",
          "/4549b/Steven.jpg",
        ],

        roles: [
          "Programmer / Builder",
          "Builder / Designer",
          "Programmer / Website Designer and Programmer",
          "Builder / Designer",
        ],
        description: [
          "When nothing goes right, go left.",
          "Just wait and see.",
          "Grind, Never Quit.",
          "I'm a simple dude and I do complex things.",
        ],
      }

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549B"
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
          body="Our group designed our robot as quickly as possible to go to our first competition. We decided to make the robot more of a compact design so it would easily stay in the size limit and won’t be very bulky. We wanted to make the robot narrower because of our strategy of staying in a corner, so we can stack more efficiently. We had got our inspiration from the team RI3D and we made our second robot based on their robot. We also found Abhay (4549E) very inspiring because he helped us when we were struggling to fix our tray. The robot that went to our first tournament went through many problems such as the tilter not working, rollers were too small and we had to make the sprockets bigger, also our rollers weren’t flipping out at the start of the matches. But we were able to overcome these problems."
          img="https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"
        >
        </Text>

        <Members members={teamMembers}>
        </Members>

        <Text
          color="#1c1c1c"
          title="About the team"
          body="We are made up of four people who are in grade 9. Steven Pham our main builder and driver, Arpit Dhiman our main drafter and builder, Meharvan Sambhi our builder and main scouter and lastly Parneet Garulaa our main coder and builder. We all enjoy robotics a lot. Though some of us like different things about robotics we always find a way to relate and strategize. We have all gone through some rocky roads during the process of us building our bot. But we have been able to improve and strive to make our robot better. As this is a new team and our first year we have learned tons and plan to continue robotics through our high school career. We have come from not knowing how to build a Robot to understanding more than we initially imagined. We plan to better ourselves through the rest of our high school experience and have fun!"
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

export default B;
