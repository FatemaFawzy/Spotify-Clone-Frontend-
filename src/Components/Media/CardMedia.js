import React, { Component } from 'react';
import "./CardMedia.css";

class CardMedia extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
    }
  }

  render(){
    var PlayPause = this.state.playing ? <i className="far fa-pause-circle"></i> : <i className="far fa-play-circle"></i>;
    return (
      <div className="play-pause">

        <div className="container">
          <img src= {this.props.image} className="card-image"></img>
          <div className="middle">
            <div onClick={(event) => {
                this.setState((prevstate, event) => ({ playing: prevstate.playing ? false : true }))
                }}> {PlayPause} </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardMedia;