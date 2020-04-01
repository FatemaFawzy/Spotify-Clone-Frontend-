
import "./LikedSongsComponent.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';

class LikedSongsComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      totalLiked: "60",
      mostRecentSongsArtist: ["The Weeknd","Dua Lipa","21 Savage","Saint JHN","Wiz Khalifa","Eric Clapton"],
      mostRecentSongsName: ["Blinding Lights","Don't Start Now", "X Bitch","Roses","Mona Lisa","River Of Tears"]
     }
  }
render() {
return ( 
  <div className="liked-songs-component">
    <p className="most-recent">
    {this.state.mostRecentSongsArtist[0]} <span className="song-name">{this.state.mostRecentSongsName[0]} ● </span> 
    {this.state.mostRecentSongsArtist[1]} <span className="song-name">{this.state.mostRecentSongsName[1]} ● </span>
    {this.state.mostRecentSongsArtist[2]} <span className="song-name">{this.state.mostRecentSongsName[2]} ● </span>
    {this.state.mostRecentSongsArtist[3]} <span className="song-name">{this.state.mostRecentSongsName[3]} ● </span> 
    {this.state.mostRecentSongsArtist[4]} <span className="song-name">{this.state.mostRecentSongsName[4]} ● </span> 
    {this.state.mostRecentSongsArtist[5]} <span className="song-name">{this.state.mostRecentSongsName[5]}</span>
    </p>
    <div className="row">
    <div className="col-8">
    <h1 className="liked-songs-title">Liked Songs</h1>
    <p className="number-of-liked-songs col no-gutters">{this.state.totalLiked} liked songs</p>
    </div>
    <div className="col-4">
    <button className="bottom-right-button col"><i class="fas fa-play"></i></button>
    </div>
    </div>
  </div>
);
}
}
export default LikedSongsComponent;