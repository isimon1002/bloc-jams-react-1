import React, { Component } from 'react';
import './styles/player_bar.css';

class PlayerBar extends Component {
  render() {
    let {title, artist, duration} = Object.assign({artist: this.props.artist},this.props.currentlyPlaying);
    return (
      <section className={"player-bar" + (this.props.currentlyPlaying ? " active" : "")}>
        <div className="container">
          <div className="control-group main-controls">
            <a className="previous" href="#">
              <span className="ion-skip-backward"></span>
            </a>
            <a className="play-pause" href="#">
              <span className="ion-play"></span>
            </a>
            <a className="next" href="#">
              <span className="ion-skip-forward"></span>
            </a>
          </div>
          <div className="control-group currently-playing">
            <h2 className="song-name">{title}</h2>
            <div className="seek-control">
              <div className="seek-bar">
                <div className="fill"></div>
                <div className="thumb"></div>
              </div>
              <div className="current-time">1:30</div>
              <div className="total-time">{duration}</div>
            </div>
            <h2 className="artist-song-mobile">{`${title} - ${artist}`}</h2>
            <h3 className="artist-name">{artist}</h3>
          </div>
          <div className="control-group volume">
            <span className="ion-volume-high icon"></span>
            <div className="seek-bar">
              <div className="fill"></div>
              <div className="thumb"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PlayerBar;