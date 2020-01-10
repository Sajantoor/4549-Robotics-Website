import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';

class C extends React.Component {
  render() {
    const teamMembers = {
        name: [
          "Hamayun Ahmadi",
          "Hemanya Sharma",
          "Ilaf Abbas",
          "Seerat Waraich",
          "Sehraaj Saini",
        ],

        img: [
          "/4549c/Hamayun.jpg",
          "/4549c/Hemanya.jpg",
          "/4549c/Ilaf.jpg",
          "/4549c/Seerat.jpg",
          "/4549c/Sehraaj.jpg",
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
          title="4549C"
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
          body="When we first began, we had built a quite simple and basic claw-bot which was able to lift one cube at a time. This was because we were going to our first competition and had around 3 weeks to build and code. This robot was considered more of an experiment to gain experience. However, following the first competition we were faced with our two main options of which design we were to build. The two designs were of a tray robot and a DR4B robot. In the end, we decided to do a DR4B robot because the tray robot appeared to be much more common and this way we could stack on top of already made stacks. This also made scoring in multiplying towers much more efficient. At the moment, we have the initial design built and coded however are experiencing issues with the DR4B staying straight while in the upwards motion. We are also working on exacting our coding values for a 4 point autonomous. Hopefully with new alterations and improvements our robot will be successful and our goals met!"
          img="https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"
        >
        </Text>

        <Members members={teamMembers}>
        </Members>

        <Text
          color="#1c1c1c"
          title="About the team"
          body="Introducing 4549C! We are one of the six Envertronics team constructed of 5 members, all of whom are in the 9th grade. To begin, we have Seerat Waraich, our primary builder and designer; Ilaf Abbas, our primary designer and CAD creator as well as programmer; Hemanya Sharma our primary programmer and drafter; Sehraaj Saini our primary drafter and scouter, and lastly Hamayun Ahmadi our driver and builder. As a new team we have had many challenges with developing our skills while continuing to better our understanding of new concepts. To work more efficiently we set three main goals. Firstly, we would like our team to continue working effectively and cooperatively while building upon our friendships with one another. Secondly, we would like to improve our DR4B to be able to pick up 3-4 cubes at a time. Thirdly, we would like to be able to score a 3-4 point autonomous."
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

export default C;
