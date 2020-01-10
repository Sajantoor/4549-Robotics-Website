import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';
import Awards from '../components/awards';

class E extends React.Component {
  render() {
    const teamMembers = {
        name: [
          "Abhay Cheema",
          "Abhineet Singh",
          "Akul Veauli",
          "Mikaeel Shah",
        ],

        img: [
          "4549e/Abhay.jpg",
          "4549e/Abhineet.jpg",
          "4549e/Akul.jpg",
          "4549e/Mikaeel.jpg",
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

      const awardValues = [
        {
          name: "Sportsmanship Award",
          body: "This award was won by 4549E at Enver Creek Secondary. We won this award because Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum.",
          date: "October 19, 2019",
          img: 'awards/Sportsmanship.png',
        },
      ]

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549E"
          title2="Envertronics"
          subtitle={teamMembers.name}
          time={2000}
          >
          <button aria-label="Learn More" className="button" onClick={() => window.scrollTo({top: document.getElementById('frontPage').clientHeight, behavior: 'smooth'})}>
            LEARN MORE
          </button>
        </FrontPage>

        <Text
          title="The Robot"
          body="In the beginning, our robot had a DR4B lift with a claw which could intake up to 3 cubes. However, our team decided to change the design and go for the popular stacker bot with a tray and intake rollers. Our main idea was to combine our lift with tray and stack up to 9 cubes while also being able to put a cube in the highest tower. We faced a lot of problems with this design as apart from being massive and slow, the cubes slide down the tray as the stacks increases up to 5 cubes. To solve this problem we are going to remove the lift and hopefully that would decrease the mass as well as the tray angle and would allow us to stack cubes successfully. Our drive trains have torque ratios which makes it slow but prevents it from being toppled over by another robot and it can also go in and out of the goal areas on the field with ease."
          img="/4549e/Robot.png"
        >
        </Text>

        <Awards content={awardValues} team={true}>
            <h1 className="heading" style={{marginLeft: '10%'}}> Awards </h1>
        </Awards>

        <Members members={teamMembers}>
        </Members>

        <Text
          color="#1c1c1c"
          title="About the team"
          body="Our team, 4549E consists of five members ranging from grades 10-12. Zaryab Kamal is our lead builder, drafter, and designer; Abbhay Cheema is our CAD designer, builder and driver; Mikaeel Shah is our programmer and notebook designer; Abhineet Singh is our builder and Scouter; Akul Veauli is our programmer and scouter. The goal for our team is to work cooperatively, build up our friendship bonds in order to solve arising challenges while also creating a positive and motivating environment, put in all of our effort in order to achieve superbness in different aspects of Robotics and continue to improve. We faced a lot of obstacles lately in our robot but we hope to stick together as we have done for the past whole semester and overcome those obstacles with perseverance and cooperation."
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

export default E;
