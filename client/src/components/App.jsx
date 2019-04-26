import React from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import sampleBreakerData from '../data/sampleBreakerData';

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
        </div>
      </Router>
    )
  }
}
