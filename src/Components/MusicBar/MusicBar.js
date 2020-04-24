import React ,{ Component} from 'react';
import "./MusicBar.css";

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
      volume: "",

    }
  }

  likeSong = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  }

  muteVolume = e => {
    const {id} = e.target;
    var sound=document.getElementById(id);
    sound.classList.toggle("fa-volume-mute");
    sound.classList.toggle("fa-volume-up");
    var volumeBar=document.getElementById("volume");

    if(sound && sound.classList.contains("fa-volume-mute")){
      if (volumeBar) {
        this.setState({volume: volumeBar.style.width})
        volumeBar.style.width= "0%";
      }
    }
    else if (sound && sound.classList.contains("fa-volume-up")){
      volumeBar.style.width=this.state.volume;
    }
  
  }

  playPause = e => {
    const {id} = e.target;
    var icon=document.getElementById(id);
    icon.classList.toggle("fa-play-circle");
    icon.classList.toggle("fa-pause-circle");  
  }

  render() {
    return (


      <div className="music-bar d-flex align-items-center pt-0 pb-0">
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
                <button className="middle-icons fas fa-step-forward"></button>
                <button className="middle-icons fas fa-sync-alt ml-2"></button>
              </div>
              <div className="duration-bar d-flex">
                <div className="duration pr-1">
                  1:59
                </div>

                <div id="music-progress" className="progress ">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" 
                  aria-valuemax="100"> </div>
                </div>
                
                <div className="duration pl-1">
                  {this.state.duration}
                </div>
              </div>

            </div>

{/* ----------------------------------------------------------------------------------------------------- */}

            <div className="music-bar-right pr-0 d-flex align-items-center justify-content-end list-group-horizontal">
              <ul className="volume-bar list-group list-group-horizontal">

                <li>
                  <button id="volume-button" className="fas fa-volume-up" onClick={this.muteVolume}> </button>
                </li>

                <li>
                  <div className="progress">
                    <div id="volume" className="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" 
                    aria-valuemax="100"> </div>
                  </div>
                </li>

              </ul>
            </div>          

          </div>
        </div>
      </div>
    )
  };

};

export default MusicBar;