import React, { Component } from 'react';
import "./MediaButton.css";

class MediaButton extends Component {
  constructor(props){
    super(props);
    this.referefence= React.createRef();
  }

  playPauseSong = e => {
    // const {id} = e.target;
    // var play=document.getElementById(id);
    // play.classList.toggle("fa-pause-circle");
    // play.classList.toggle("fa-play-circle");

    this.referefence.current.toggle("fa-pause-circle");
    this.referefence.current.toggle("fa-play-circle");
  }

  render(){
    return (
      <div className="play-pause">

        <div className="container">
          <img src= {this.props.image} className="card-image"></img>
          <div className="middle">
            <div className="far fa-play-circle" id="play-pause" onClick={this.playPauseSong} ref={this.referefence}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default MediaButton;