import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import sampleBreakerData from '../data/sampleBreakerData';
import Podcast from './Podcast';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: sampleBreakerData
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <h1>Breaker Project!</h1>
          <Route exact path='/' render={(props) => <Podcast {...props} data={this.state.episode}/>}/>
        </div>
      </Router>
    )
  }
}
