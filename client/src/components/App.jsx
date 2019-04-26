import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import sampleBreakerData from '../data/sampleBreakerData';
import Podcast from './Podcast';
import EditPodcast from './EditPodcast';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: sampleBreakerData
    };
    this.editEpisode = this.editEpisode.bind(this);
  }

  editEpisode(object) {
    this.setState({
      episode: object
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <h1>Breaker Project!</h1>
          <Route exact path='/' render={(props) => <Podcast {...props} data={this.state.episode}/>}/>
          <Route path='/edit' render={(props) => <EditPodcast {...props} editEpisode={this.editEpisode} data={this.state.episode}/>}/>
        </div>
      </Router>
    )
  }
}
