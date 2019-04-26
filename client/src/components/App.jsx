import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import sampleBreakerData from '../data/sampleBreakerData';
import Podcast from './Podcast';
import EditPodcast from './EditPodcast';
import moment from 'moment';
import '../css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: {}
    };
    this.editEpisode = this.editEpisode.bind(this);
  }

  componentDidMount() {
    this.setState({
      episode: this.convertBreakerDateTimeFormat(sampleBreakerData)
    })
    console.log(moment(new Date()).format('ddd MMM DD, YYYY'))
    console.log(new Date().getDay())
  }

  editEpisode(object) {
    this.setState({
      episode: object
    });
  }

  convertBreakerDateTimeFormat(breakerData) {
    const {
      image_url,
      title,
      published_at,
      likes_count,
      description
    } = breakerData;
    const { artist_name } = breakerData.show;
    const dateTime = new Date(published_at);
    const date = moment(dateTime).format('ddd MMM DD, YYYY');
    const time = moment(dateTime).format('h:mm a');
    return { artist_name, image_url, title, likes_count, description, date, time };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <h1>Breaker Project!</h1>
          <Route
            exact
            path="/"
            render={props => <Podcast {...props} data={this.state.episode} />}
          />
          <Route
            path="/edit"
            render={props => (
              <EditPodcast
                {...props}
                editEpisode={this.editEpisode}
                data={this.state.episode}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
