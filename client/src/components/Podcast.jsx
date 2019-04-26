import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import sampleBreakerData from '../data/sampleBreakerData';

const Podcast = ({ data }) => {

  const prettifyDate = date => {
    return moment(date).format('ddd MMM DD, YYYY');
  }

  const prettifyTime = time => {
    return moment(time, 'HH:mm').format('h:mm a');
  }

  return (
    <div className="podcast">
      <div className="wrapper1">
        <img className="artwork" src={data.image_url}></img>
        <div className="wrapper2">
          <h2 className="title">{data.title}</h2>
          <span className="dateTime">{`${prettifyDate(data.date)} at ${prettifyTime(data.time)} • ${sampleBreakerData.duration}`}</span>
          <span className="artist">By {data.artist_name}</span>
          <div className="wrapper3">
            <audio controls className="player" src={sampleBreakerData.enclosure_url}></audio>
            <span className="likes">Likes: {data.likes_count}</span>
          </div>
          <p className="description">{data.description}</p>
          <Link to="/edit">EDIT</Link>
        </div>
      </div>
    </div>
  )
};

export default Podcast;