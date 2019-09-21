import React from 'react';
import FrontPage from './FrontPage';
import { Redirect, Link } from 'react-router-dom';

// 404 page when someone types the wrong url. not done
class Page404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
      complete: false,
    }
  }

  render() {
    return(
      <div>
        {this.state.complete && <Redirect to='/'/>}
        <FrontPage
          title="404"
          title2="Let's fix that!"
          noNavDown={true}
          >
          <p> Redirecting you in {this.state.time} or <Link to='/'>click here </Link> </p>
        </FrontPage>
      </div>
    )
  }

  componentDidMount() {
    startTimer(this);
  }

  callBack() {
    this.setState({complete: true});
  }
}


function startTimer(val) {
    let _this = val;
    let timeVal = _this.state.time;

    setInterval(
      function() {
        timeVal--;
        _this.setState({time: timeVal});

        if (timeVal === 0) {
          _this.callBack();
        }

    }, 1000);
  }

export default Page404;
