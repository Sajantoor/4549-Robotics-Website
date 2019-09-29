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
          noNavDown={true}
          >
            <Link to="/about">
              <button aria-label="Learn More" className="button">
                LEARN MORE
              </button>
            </Link>
            <Logo/>
        </FrontPage>
      </React.Fragment>
    )
  }
}

export default Home;
