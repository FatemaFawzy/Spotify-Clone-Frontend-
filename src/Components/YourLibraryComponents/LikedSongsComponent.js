
import "./LikedSongsComponent.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';


class LikedSongsComponent extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      totalLiked: "60",
      recentlyLiked:[{artist:"Drake", song:"God's Plan"},
                     {artist:"Rihanna", song:"Work"},
                     {artist:"21 Savage", song:"X Bitch"},
                     {artist:"Saint JHN", song:"Roses"},
                     {artist:"The Weeknd", song:"Blinding Lights"},
                     {artist:"21 Savage", song:"asmr"},
                     {artist:"Saint JHN", song:"I Heard You Got Too Lit Last Night"}
                   ],
      string:'',
    }
  }
    componentDidMount(){
        // var x = "";
       //     for (var i=0; i< this.state.recentlyLiked.length; i++)
      // {
      //   x += this.state.recentlyLiked[i].artist + " ● " + this.state.recentlyLiked[i].song + " ";
      // }
       
      // if (x.length > 150)
      // {
      //   x = x.slice(0,149) + "...";
      // }
      const stringofsongs = this.state.recentlyLiked.map(item =>{
        return(
          <span>
            <span>
              {item.artist + " "}
            </span>
            <span className="song-name">
            ● 
            </span>
            <span className="song-name">
              {" " +item.song  + " "}
            </span>
          </span>
        )
      }) 
      this.setState({string:stringofsongs});
    };
 
  handleClick = () => {
    this.props.history.push("/webplayer/likedsongs/");
  } 
render() {
return ( 
  <div className="liked-songs-component" onClick={this.handleClick}>
    <p className="most-recent">
    {this.state.string}
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