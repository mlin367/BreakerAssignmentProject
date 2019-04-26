import React from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="app">
          APP
        </div>
      </Router>
    )
  }
}
