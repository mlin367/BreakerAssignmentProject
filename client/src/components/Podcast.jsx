import React from 'react';
import { Link } from 'react-router-dom';
import sampleBreakerData from '../data/sampleBreakerData';

const Podcast = ({ data }) => (
  <div className="podcast">
    <div className="wrapper1">
      <img className="artwork" src={data.image_url}></img>
      <div className="wrapper2">
        <h2 className="title">{data.title}</h2>
        <span className="dateTime">{`${data.date} at ${data.time} • ${sampleBreakerData.duration}`}</span>
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
);

export default Podcast;