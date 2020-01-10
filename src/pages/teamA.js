import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Members from '../components/Members';
import Instagram from '../components/Instagram';
import Awards from '../components/awards';

class B extends React.Component {
  render() {
    const teamMembers = {
        name: [
          "Satvik Garg",
          "Jackie Le",
          "Sajan Toor",
          "Huy Ngo",
          "Owen Gill",
        ],

        img: [
          "4549a/Satvik.jpg",
          "4549a/Jackie.jpg",
          "4549a/Sajan.jpg",
          "4549a/Huy.jpg",
          "4549a/Owen.jpg",
        ],

        roles: [
          "Programmer / Builder",
          "Builder / Designer",
          "Programmer / Website Designer and Programmer",
          "Builder / Designer",
          "Documenter",


        ],
        description: [
          "When nothing goes right, go left.",
          "Just wait and see.",
          "Grind, Never Quit.",
          "I'm a simple dude and I do complex things.",
          "You must fail to succeed.",
        ],
      }

      const awardValues = [
        {
          name: "Judges Award",
          body: "This award was won by 4549A at West Vancouver Secondary. We won this award due to our great judges presentation and communicating skills. Judges were impressed by our overall build and programming. They were especially impressed by documentation of code on Github, using version control using Git and commenting the code. We also had a high sportsmanship ranking.",
          date: "December 14, 2019",
          img: 'awards/Judges.png',
        },
        {
          name: "Create Award",
          body: "This award was won by 4549A at Collingwood for our overall creativity in all aspects of our bot. The main reason was using tracking wheels which allowed us to use a grid system to quickly make a consistent auto. We also had creative elements in our build and programming aspects such as using torque values from the motors to calculate the number of cubes in the tray.",
          date: "November 16, 2019",
          img: 'awards/Create.png',
        },
      ]

    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="4549A"
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
          body="Our Season Goals are to be an independent team, this led us to a Tray-Centered Design. We are prioritizing stacking cubes over placing them in towers based on the philosophy that the towers aren’t actually worth anything, but add to the stacks you have. Despite this, we can stack 9 cubes, and still access 6 out of the 7 towers. Our current project {Project Alpha 2.1}, is broken down into 9 Components and 5 Elements. The Components are the; drive, supports, tray, angler, arms, intakes, anti-tips, tracking wheels, and tech. The 5 Elements are; spacing, release mechanism, rubber banding, materials and resources.The Components make up the robot and complete its functions while the Elements are encompassed throughout the Components and are aspects that need to be considered when creating a design."
          img="4549a/Robot.png"
        >
        </Text>

        <Awards content={awardValues} team={true}>
            <h1 className="heading" style={{marginLeft: '10%'}}> Awards </h1>
        </Awards>

        <Members members={teamMembers}>
        </Members>

        <Text
          color="#1c1c1c"
          title="About The Team"
          body="4549A is the senior team of the Enver Creek Robotics Program. We are made up of 5 boys from grades 10-12. Sajan is our Web Designer, Programmer, and Documenter; his knowledge of JavaScript, HTML, CSS, and  Python serves as a base for his Vex (C++) programming. Jackie is our Lead Designer, Driver, and Builder; his previous CAD experience led him to his current roles. Huy is our Lead Builder, Designer, and Scout;  he has been building for 4 years originating from the Vex IQ Challenge. Satvik is our Lead Programmer, Builder, and Designer; he has taken multiple engineering-related courses throughout highschool which inspired him to join the program. Owen is our Lead Documenter and Lead Scout; his previous experience with visual arts and interest for drafting led him to take care of the notebook. We have grown together and have become close friends through the Vex Robotics Competition."
          fullWidth={true}
        >
        </Text>

        <Instagram username="4549alpha"/>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default B;
