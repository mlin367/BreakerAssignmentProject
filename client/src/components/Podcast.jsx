import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import sampleBreakerData from '../data/sampleBreakerData';
import '../css/Podcast.css';

const Podcast = ({ data }) => {

  const prettifyDate = date => {
    return moment(date).format('ddd MMM DD, YYYY');
  }

  const prettifyTime = time => {
    return moment(time, 'HH:mm').format('h:mm a');
  }

  const prettifyDuration = seconds => {
    if (seconds > 60) {
      let minutes = Math.floor(seconds/60);
      let secs = seconds % 60;
      return `${minutes} min, ${secs} sec`;
    } else {
      return `${seconds} sec`;
    }
  }

  return (
    <div className="podcast">
      <div className="wrapper1">
        <img className="artwork" src={data.image_url}></img>
        <div className="wrapper2">
          <h2 className="title">{data.title}</h2>
          <span className="dateTime">{`${prettifyDate(data.date)} at ${prettifyTime(data.time)} • ${prettifyDuration(sampleBreakerData.duration)}`}</span>
          <div className="artistWrapper">By <span className="artist">{data.artist_name}</span></div>
          <div className="wrapper3">
            <audio controls className="player" src={sampleBreakerData.enclosure_url}></audio>
            <span className="likes">Likes: {data.likes_count}</span>
          </div>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <Link to="/edit">EDIT</Link>
    </div>
  )
};

export default Podcast;