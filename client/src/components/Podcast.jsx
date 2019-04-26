import React from 'react';

const Podcast = props => (
  <div className="podcast">
    <div className="wrapper1">
      <img className="artwork"></img>
      <div className="wrapper2">
        <h2 className="title"></h2>
        <span className="dateTime"></span>
        <span className="artist"></span>
        <div className="wrapper3">
          <audio className="player"></audio>
          <span className="likes"></span>
        </div>
        <p className="description"></p>
      </div>
    </div>
  </div>
)