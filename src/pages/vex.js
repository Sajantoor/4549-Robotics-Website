import React from 'react';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import Text from '../components/Text';
import Instagram from '../components/Instagram';
import VexLogo from '../assets/VexLogo.png';

class Vex extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <FrontPage
          title="VEX"
          title2="Robotics Competition"
          subtitle={["Tower Takeover (2020)", "Turning Point (2019)", "In The Zone (2018)", "Starstruck (2017)", "Nothing But Net (2016)",]}
          time={1000}
          >
            <a href="https://www.vexrobotics.com/" target="_blank" rel="noopener noreferrer">
              <button aria-label="Learn More" className="button">
                VEX's Offical Website
              </button>
            </a>

        </FrontPage>
        <Text
          color="#1c1c1c"
          title="About Vex"
          body="It all began with Tony Norman & Bob Mimlitch from a Greenville, Texas garage. They met when simultaneously mentoring a high school robotics team. Bob & Tony soon discovered that they had similar philosophies on problem solving, they believe that a creative initiative is crucial to success, and that following the past/others is not the way to go. As well as “above all else, passion will drive quality and bring success.”  They expanded their style of design  into what is now the Vex Robotics Competition as the largest of the three subsidiaries of Innovation First International. Since it’s inaugural season in 2007, there are over 20,000 teams across the three competitions. There’s VexIQ (elementary/middle school level) with over 8,500 teams, Vex Robotics Competition (middle/high school level) with over 11,400 teams and VexU (college/university students level) with over 300 teams. Clearly highschool students take the most liking to Vex and without Tony & Bob, none of this would be possible. Who would’ve thought that an Electrical & Mechanical Engineer would change the lives of thousands of students in over 40 countries."
          img={VexLogo}
        >
          <a href="https://www.vexrobotics.com/" target="_blank" rel="noopener noreferrer">
            <button aria-label="Learn More" className="button">
              About The Competition
            </button>
          </a>
        </Text>

        <Text
          title="Vex Robotics Competition"
          body="This is the middle & high school level competition of Vex. Every year there is a new game with new elements to grasp and comprehend in order to come up with the optimal design and associated strategy. Although, there are aspects that remain the same regardless of season some being the field which is always 12ft by 12ft and two teams of two going head to head. Each match begins with a 15second autonomous period, which is when pre-programmed code will run. Secondly, the 1minute and 45second driver control period occurs. This is where the majority of the match takes place, the autonomous is more to give a bonus to the winning team, which, which may push them over the edge and win them a match. Finally, the match is scored after the driver control period is over and the winning alliance is announced shortly. The other way to compete is to participate in the skills challenge. During a skills run, your robot has the entire field to itself and has 1minute to score as many points as possible. Each team can get their robot judged, this provides them an opportunity to get feedback as well as making them eligible for many awards. There is a great base to the Vex Robotics Competition which still leaves room for surprises in each individual game."
          img="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"
        >
          <a href="https://www.vexrobotics.com/vexedr" target="_blank" rel="noopener noreferrer">
            <button aria-label="Learn More" className="button">
              About The Competition
            </button>
          </a>
        </Text>

        <Text
          title="Tower Takeover"
          body="The 2019-2020 Vex Robotics Competition game is Tower Takeover. Each alliance begins the match with 2 pre-loads and must be touching their starting wall. There are 22 cubes of each colour, being green, purple and orange. The alliance that wins the autonomous receives 6 points as well as the 2 purple cubes that can be deployed at any point during the match but have to be deployed touching that alliance’s starting wall. There are 5 neutral towers and 1 tower specific to each alliance for a total of 7 towers. When a cube is in a tower, the point value of that colour cube increases by 1 for all cubes scored in goal zones. Each alliance has 1 large and 1 small goal zone. The large goal zone is encased in the protected zone, this means the opposing alliance cannot descore your cubes. Despite the fluctuating scores throughout the match due to the scoring multipliers, the points are tallied only at the end of the driver control period. Thank you, you are now ready for the greatest 2 minutes in robotics."
          img={false}
        >
        <div className="img-contain">
          <iframe title="towerTakeover" width="800" height="400" src="https://www.youtube.com/embed/_JVQOiw_OUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        </Text>

        <Instagram username="vexrobotics"/>
      </React.Fragment>
    )
  }

  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

export default Vex;
