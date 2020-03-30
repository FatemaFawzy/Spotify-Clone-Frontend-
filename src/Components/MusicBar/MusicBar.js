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
      artistProfileLink: "/webplayer/likedsongs/",

    

    }
  }

  likeSong = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  }

  render() {
    return (


      <div className="music-bar d-flex align-items-center pt-0 pb-0">
        <div className="music-bar-inside container-fluid m-0">
          <div className="row">

            <div className="music-bar-left col pl-0">
              
              <div className="card pl-0">
                <div className="row no-gutters">

                  <div className="col-2">
                    <img className="card-img song-photo" src={this.state.photoLink}></img>
                  </div>

                  <div className="col-10">
                    <div className="card-body pt-2 pl-0">
                      
                      <ul className="list-group list-group-horizontal"> 

                        <li className="pr-2">
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

            <div className="music-bar-middle col d-flex align-items-center justify-content-center">
              MIDDDD

            </div>

            <div className="music-bar-right col pr-0 d-flex align-items-center justify-content-end">
              RIGHTTT
            </div>          

          </div>
        </div>
      </div>
    )
  };

};

export default MusicBar;