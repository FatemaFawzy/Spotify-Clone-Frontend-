import React ,{ Component} from 'react';
import "./MusicBar.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";
import {formatTime, progressOffset} from "../../HelperFunctions/History";
import ReactSnackBar from "react-js-snackbar";
import '../PlaylistsComponent/SnackBar.css';
import {Tracks} from "./SongFiles.js";

class MusicBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      songName: "Another Love",
      artistName: "Tom Odell",
      photoLink: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
      // TODO: change the albumlink and artistprofile
      albumLink: "/webplayer/yourlibrary",
      artistProfileLink: "/webplayer/artistprofile/",
      duration: "3:45",
      progress:"0%",
      volume: "0.5",
      muted: false,
      showSnackBar: false,
      snackBarMes: "",

    }
    this.forcedProgress=false;
    this.intervalUpdate = setInterval(this.onUpdate, 250);
    this.songObject=Tracks[0];
    this.EnteredAdsMode=false;
  }

  likeSong = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    if (heart){
      if(heart.classList.contains("far")){
        this.setState({ showSnackBar: true, snackBarMes: "Added to your liked songs" });
        setTimeout(() => {
          this.setState({ showSnackBar: false });
        }, 2000);     
      }
      else if(heart.classList.contains("fas")){
        this.setState({ showSnackBar: true, snackBarMes: "Removed from your liked songs" });
        setTimeout(() => {
          this.setState({ showSnackBar: false });
        }, 2000);      
      }      

    }
    heart.classList.toggle("far");
    heart.classList.toggle("fas");

  }

  playPause = e => {
    const {id} = e.target;
    var icon=document.getElementById(id);

      this.props.onPlayPause();
      if(this.props.somethingIsPlaying)
      {
        this.refs.player.pause();
        icon.classList.remove("fa-pause-circle");
        icon.classList.add("fa-play-circle");

      }
      else
      {

        this.refs.player.play();
        icon.classList.remove("fa-play-circle");
        icon.classList.add("fa-pause-circle");
      }
  }

  //when the music progress bar is clicked the track is adjusted accordignly
  handleProgress = e =>{

    var progressRef =this.refs.progressRef;
    var progress=((e.clientX-progressOffset(progressRef))/document.getElementById("music-progress").clientWidth)*100;
    this.setState({progress:progress});
    this.forcedProgress=true;

  }
 
  // update the music progress bar as the track keeps playing
  onUpdate =()=>{
    if (this.refs.player) {
      if (!this.forcedProgress) {
        this.setState({
          progress: (this.refs.player.currentTime / this.refs.player.duration)*100
        });
      }
    }
  }

  //update volume when volume bar is clicked
  changeVolume = e =>{
    this.setState({muted:false})
    var volumeRef =this.refs.volumeRef;
    console.log((e.clientX-(progressOffset(volumeRef)))/78);
    var volume=((e.clientX-(progressOffset(volumeRef)))/78);
    if(volume<0) volume=0;
    else if(volume>1) volume=1;
    this.setState({volume:volume});
    if(this.refs.player) this.refs.player.volume=volume;
  }

  muteVolume = e => {
    if(this.state.muted)
    {
      this.setState({muted:false});
      if(this.refs.player) this.refs.player.volume=this.state.volume;
    }
    else
    {
      this.setState({muted:true});
      if(this.refs.player) this.refs.player.volume=0;
    }
  }

  render() {

    var currentTime;
    var duration;
    var volumeIcon;
    var icon=document.getElementById("play-track-bar");

    if(this.refs.player) {
      currentTime=this.refs.player.currentTime;
      duration=this.refs.player.duration;
      if(this.forcedProgress){
        this.forcedProgress=false;
    
        this.refs.player.currentTime= this.refs.player.duration * (this.state.progress/100);
      }
      if(this.state.muted)
      {
        volumeIcon="fa-volume-mute";
      }
      else
      {
        volumeIcon="fa-volume-up";
      }

      
        if(this.refs.player.ended&&this.props.somethingIsPlaying)
        {
          console.log("Ended")
          this.props.onSongEnded();
          if(!this.refs.player.loop)
          {
          this.props.onPlayPause();
          }
        }

        if(this.props.adsModeOn)
        {
          if(!this.EnteredAdsMode)
          {
            // this.songObject=Tracks[1];
            this.refs.player.load();
            this.EnteredAdsMode=true;
          }
          
          console.log(this.songObject)
          if(this.refs.player.ended&&this.props.somethingIsPlaying)
          {
            this.props.onAdsEnded();
            this.EnteredAdsMode=false;
            // this.refs.player.load();
          }
        }
      
    }

    if(this.props.somethingIsPlaying) {
      if(this.refs.player) this.refs.player.play();
      // document.querySelector("audio").play();
      if(icon) {
        icon.classList.remove("fa-play-circle");
        icon.classList.add("fa-pause-circle");
      } 
    }

    else {
      if(this.refs.player) this.refs.player.pause();
      // document.querySelector("audio").pause();
      if(icon){
        icon.classList.remove("fa-pause-circle");
        icon.classList.add("fa-play-circle");
      }
       
    }

    return (


      <div className="music-bar d-flex align-items-center pt-0 pb-0">
        <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.showSnackBar}>
            {this.state.snackBarMes}
        </ReactSnackBar>
        <div className="music-bar-inside container-fluid m-0">
          <div className="row">

            <div className="music-bar-left col pl-0">
              
              <div className="card pl-0">
                <div className="row no-gutters">

                  <div className="col-2 ">
                    <img className="card-img song-photo" src={this.state.photoLink}></img>
                  </div>

                  <div className="col-10">
                    <div className="card-body pt-2 pl-0">
                      
                      <ul className="list-group list-group-horizontal"> 

                        <li className="pr-2 prevent-overflow">
                          <div className="song-name prevent-overflow">
                            <a id="song-name" href={this.state.albumLink}> {this.state.songName} </a>
                          </div>

                          <div className="artist-name prevent-overflow">
                            <a id="artist-name" href={this.state.artistProfileLink}> {this.state.artistName} </a>
                          </div>
                        </li>

                        <li className="d-flex p-2">
                          <button id="heart-button" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
                        </li>

                      </ul>

                    </div>
                  </div>

                </div>
              </div>


            </div>


{/* ----------------------------------------------------------------------------------------------------- */}


            <div className="music-bar-middle">
              <div className="d-flex justify-content-center">
                <button className="middle-icons fas fa-random mr-2"></button>
                <button className="middle-icons fas fa-step-backward"></button>
                <button id="play-track-bar" className="play middle-icons far fa-play-circle mr-3 ml-3" onClick={this.playPause} ></button>
                <button 
                className="middle-icons fas fa-step-forward"
                onClick={()=>{
                  if(this.refs.player) this.refs.player.load();
                  this.songObject=Tracks[4];
                  
                }}
                ></button>
                <button 
                style={{color:this.props.playOnRepeat?"#1db954":"rgb(179,179,179)"}} 
                className="middle-icons fas fa-sync-alt ml-2"
                onClick={()=>{
                  this.props.onToggleLoop();
                }}
                ></button>
              </div>
              <div className="duration-bar d-flex">
                <div className="duration pr-1">
                  {formatTime(currentTime)}
                </div>

                <div id="music-progress" className="progress" onClick={this.handleProgress}>
                  <div ref="progressRef" className="progress-bar bg-success" role="progressbar" style={{width: this.state.progress +"%"}} aria-valuenow="25" aria-valuemin="0" 
                  aria-valuemax="100" > </div>

                  <button style={{left:(this.state.progress -3)+"%"}} className="fas fa-circle slider"></button>
                </div>
                
                <div className="duration pl-1">
                  {formatTime(duration)}
                </div>
              </div>

            </div>

{/* ----------------------------------------------------------------------------------------------------- */}

            <div className="music-bar-right pr-0 d-flex align-items-center justify-content-end list-group-horizontal">
              <ul className="volume-bar list-group list-group-horizontal">

                <li>
                  <button id="volume-button" className={"fas "+volumeIcon} onClick={this.muteVolume}> </button>
                </li>

                <li>
                  <div className="progress" onClick={this.changeVolume}>
                    <div ref="volumeRef" id="volume" className="progress-bar bg-success" role="progressbar" style={{width:this.state.muted?0+"%": this.state.volume*100+"%"}} aria-valuenow="25" aria-valuemin="0" 
                    aria-valuemax="100"> </div>
                    <button style={{left:this.state.muted?"-15%":(this.state.volume*100-15)+"%"}} className="fas fa-circle slider"></button>
                  </div>
                  {/* <div className="slidecontainer">
                    <input type="range" min="1" max="100" value="10" class="slider" id="myRange"></input>
                  </div> */}
                </li>

              </ul>
            </div>          

          </div>
        </div>

        <audio ref="player" loop={this.props.playOnRepeat}>
          <source src={this.props.adsModeOn?Tracks[32].songURL:this.songObject.songURL} />
          {/* <source src="https://www.computerhope.com/jargon/m/example.mp3" /> */}
         
        </audio>
      </div>
    )
  };

};

const mapDispatchToProps = dispatch => {

  return {

    onPlayASong: (songID) => dispatch({type: actionTypes.PLAY_SONG, value:songID}),
    onPlayPause: ()=> dispatch({type: actionTypes.PLAY_PAUSE}),
    onToggleLoop: ()=> dispatch({type:actionTypes.TOGGLE_SONG_LOOP}),
    onSongEnded: ()=> dispatch({type:actionTypes.INCREMENT_NUM_SONGS}),
    onAdsEnded: ()=> dispatch({type:actionTypes.EXIT_ADS_MODE}),
  };

};

const mapStateToProps = state =>{
  return{
    playingSongID: state.playingSongID,
    somethingIsPlaying: state.somethingIsPlaying,
    playOnRepeat: state.playOnRepeat,
    adsModeOn: state.adsModeOn,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicBar)