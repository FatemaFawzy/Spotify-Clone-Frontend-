import React, { Component } from 'react';
import "./MediaObject.css";

class MediaObject extends Component {
  constructor(props){
    super(props);
    // this.play= this.play.bind(this);
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