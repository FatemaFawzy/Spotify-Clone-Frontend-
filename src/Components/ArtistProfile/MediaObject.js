import React, { Component } from 'react';
import "./MediaObject.css";

class MediaObject extends Component {
  constructor(props){
    super(props);

    this.state = {
      // image: "https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8",
      // objectName: "Wrong Crowd (Deluxe)",
      // albumLink: "/webplayer/album/"
    }
  }

  play = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    heart.classList.toggle("fa-pause-circle");
    heart.classList.toggle("fa-play-circle");
  }

  render(){
    return (
      <div className="media-object">

        <div className="container">
          <img src= {this.props.image} className="displayed-image"></img>
          <div className="middle">
            <div className="far fa-play-circle" id="play-object" onClick={this.play}></div>
          </div>
        </div>

        <div className="title">
          <a className="title" href={this.props.albumLink} > {this.props.objectName} </a>
        </div>

      </div>
    );
  }
}
export default MediaObject;