import React, { Component } from "react";
import "./MusicBar.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";
import { formatTime, progressOffset } from "../../HelperFunctions/History";
import ReactSnackBar from "react-js-snackbar";
import "../PlaylistsComponent/SnackBar.css";
import { Tracks } from "./SongFiles.js";
import { BASEURL } from "../../Constants/baseURL";
import AdsAudio from "../../assets/adsaudio.mp3";
import FacebookShareButton from "../../Components/Share/FacebookShareButton";
import TwitterShareButton from "../../Components/Share/TwitterShareButton";
import ShareBox from "../../Components/Share/ShareBox";
let space = {
  right: "10%",
};

/** Class MusicBar
 * @category MusicBar
 * @extends Component
 */
export class MusicBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO: change the albumlink and artistprofile

    /**Link to the album page
     * @memberof MusicBar
     * @type {string}
     */      
      albumLink: "/webplayer/yourlibrary",
    /**Link to the artist profile page
     * @memberof MusicBar
     * @type {string}
     */      
      artistProfileLink: "/webplayer/artistprofile/",
    /**Sound volume magnitude
     * @memberof MusicBar
     * @type {string}
     */      
      volume: "0.5",
    /**Check if the volume is muted
     * @memberof MusicBar
     * @type {boolean}
     */ 
      muted: false,
    /**Show or hide the snackbar
     * @memberof MusicBar
     * @type {boolean}
     */ 
      showSnackBar: false,
    /**Message appearing in the snackbar
     * @memberof MusicBar
     * @type {string}
     */ 
      snackBarMes: "",
    /**Enable or disable play queue
     * @memberof MusicBar
     * @type {boolean}
     */ 
      playQueue: false,
    /**Static queue tracks index
     * @memberof MusicBar
     * @type {int}
     */ 
      trackNum: 0,
      // duration: "3:45",
      // progress: "0%",
    };

    /**Check if the music progress bar is clicked on
     * @memberof MusicBar
     * @type {boolean}
     */ 
    this.forcedProgress = false;
    /**Value of interval update in the music progress bar
     * @memberof MusicBar
     * @type {double}
     */ 
    this.intervalUpdate = setInterval(this.onUpdate, 250);
    /**Flag for the ads
     * @memberof MusicBar
     * @type {boolean}
     */ 
    this.EnteredAdsMode = false;
  }

    /**Like or unlike a song
   * @memberof MusicBar
   * @func likeSong
   */
  likeSong = (e) => {
    const { id } = e.target;

    /**Like song icon
     * @memberof MusicBar
     * @type {object}
     */
    var heart = document.getElementById(id);

    const requestOptions = {
      method: "POST",
      headers: { "x-auth": this.props.userToken },
    };

    if (heart) {
      if (heart.classList.contains("far")) {
        //send a request to like the song
        const url = BASEURL + "track/like/123";
        // const url = BASEURL + "track/like/" + playingSongID;
        
        fetch(url, requestOptions)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            if (data.message == "Song liked successfully") {
              this.setState({
                showSnackBar: true,
                snackBarMes: "Added to your liked songs",
              });
              setTimeout(() => {
                this.setState({ showSnackBar: false });
              }, 2000);
            }
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });

      } else if (heart.classList.contains("fas")) {
        //send a request to unlike the song
        const url1 = BASEURL + "track/unlike/123";
        // const url = BASEURL + "track/unlike/" + playingSongID;

        fetch(url1, requestOptions)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            if (data.message == "Song unliked successfully") {
              this.setState({
                showSnackBar: true,
                snackBarMes: "Removed from your liked songs",
              });
              setTimeout(() => {
                this.setState({ showSnackBar: false });
              }, 2000);
            }
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    if(heart){
      heart.classList.toggle("far");
      heart.classList.toggle("fas");
    }

  };

  /**Play or pause a song
   * @memberof MusicBar
   * @func playPause
   */
  playPause = (e) => {
    const { id } = e.target;

    /**play/pause song button
     * @memberof MusicBar
     * @type {object}
    */
    var icon = document.getElementById(id);
    this.props.onPlayPause();
    if (this.props.somethingIsPlaying) this.refs.player.pause();
    else this.refs.player.play();
  };

  /**Adjust the progress of the music bar when it's clicked
   * @memberof MusicBar
   * @func handleProgress
   */ 
  handleProgress = (e) => {
    if(!this.props.adsModeOn) {

      /**Progress ref
     * @memberof MusicBar
     * @type {node}
     */
      var progressRef = this.refs.progressRef;
    /**New updated progress
     * @memberof MusicBar
     * @type {double}
     */
      var progress1 =
        ((e.clientX - progressOffset(progressRef)) /
          document.getElementById("music-progress").clientWidth) *
        100;
      this.props.onChangeProgress(progress1);
      this.forcedProgress = true;
    }

  };

  /**update the music progress bar as the track keeps playing
   * @memberof MusicBar
   * @func onUpdate
   */ 
  onUpdate = () => {
    if (this.refs.player) {
      if (!this.forcedProgress) {
        const tempduration= this.refs.player.duration===0?1:this.refs.player.duration;
        this.props.onChangeProgress((this.refs.player.currentTime /tempduration) * 100);
      }
    }
  };

  /**update volume when volume bar is clicked
 * @memberof MusicBar
 * @func changeVolume
 */ 
  changeVolume = (e) => {
    console.log(this.state.trackNum)
    this.setState({ muted: false });
    /**Volume ref
     * @memberof MusicBar
     * @type {node}
     */
    var volumeRef = this.refs.volumeRef;
    console.log((e.clientX - progressOffset(volumeRef)) / 78);
    /**Volume 
     * @memberof MusicBar
     * @type {double}
     */
    var volume = (e.clientX - progressOffset(volumeRef)) / 78;
    if (volume < 0) {
      volume = 0;
      this.setState({ muted: true });
    } else if (volume > 1) volume = 1;
    this.setState({ volume: volume });
    if (this.refs.player) this.refs.player.volume = volume;
  };

/**mute/unmute volume when volume icon is clicked
 * @memberof MusicBar
 * @func muteVolume
 */ 
  muteVolume = (e) => {
    if (this.state.muted) {
      this.setState({ muted: false });
      if (this.refs.player) this.refs.player.volume = this.state.volume;
    } else {
      this.setState({ muted: true });
      if (this.refs.player) this.refs.player.volume = 0;
    }
  };

/**play previous song
 * @memberof MusicBar
 * @func playPrevious
 */
  playPrevious = (e) => {
    //if it's playing a queue, get the previous song
    if (this.state.playQueue) {

    /**Temporary track index
     * @memberof MusicBar
     * @type {int}
     */
      let newTrackNum;
      if (this.state.trackNum != 0)
      {
        newTrackNum=this.state.trackNum -1;
        this.setState((prevState, props) => ({
          trackNum: prevState.trackNum - 1
        }));
      }
        
      else if (this.state.trackNum == 0)
      {
        newTrackNum=Tracks.length -1;
        this.setState({trackNum: Tracks.length -1})
      }

      this.props.changePlayingSongID(newTrackNum.toString());
      this.refs.player.load();
    }
    //if only one song is playing, just play it from the start
    if (this.refs.player) this.refs.player.currentTime = 0;
  };

/**play next song
 * @memberof MusicBar
 * @func playNext
 */
  playNext = (e) => {
    if (this.state.playQueue) {
      /**Temporary track index
     * @memberof MusicBar
     * @type {int}
     */
      let newTrackNum;
      if (this.state.trackNum != Tracks.length - 1)
      {
        newTrackNum=this.state.trackNum +1;
        this.setState((prevState, props) => ({
        trackNum: prevState.trackNum + 1
      }));
              
      }
  
      else if (this.state.trackNum == Tracks.length - 1)
      {
        newTrackNum=0;
        this.setState({trackNum: 0})
      }
      this.props.changePlayingSongID(newTrackNum.toString());
      this.refs.player.load();
    }
  };

/**Enable/disable play queue
 * @memberof MusicBar
 * @func playQueue
 */
  playQueue = (e) => {
    if (!this.state.playQueue) this.setState({ playQueue: true });
    else if (this.state.playQueue) this.setState({ playQueue: false });
  };

/**Stop playing the track 
 * @memberof MusicBar
 * @func stop
 */
  stop = (e) => {
    if (this.refs.player) this.refs.player.currentTime = 0;
    if(this.props.somethingIsPlaying) this.props.onPlayPause();
  };

  render() {
    /**Volume Icon
     * @memberof MusicBar
     * @type {object}
     */
    var volumeIcon;
    /**Current time of the track
     * @memberof MusicBar
     * @type {double}
     */
    var currentTime;
    /**Track duration
     * @memberof MusicBar
     * @type {double}
     */
    var duration;
    /**play/pause Icon
     * @memberof MusicBar
     * @type {object}
     */
    var icon = document.getElementById("play-track-bar");

    if (this.refs.player) {
      currentTime = this.refs.player.currentTime;
      duration = this.refs.player.duration;

      // Check if the user wants to skip to a certain part of the track
      if (this.forcedProgress && this.refs.player.duration !=0) {
        this.forcedProgress = false;

        this.refs.player.currentTime =
          this.refs.player.duration * (this.props.progress / 100);
      }

      //check if the user clicked on play on repeat
      if (!this.refs.player.loop) {
        if (this.refs.player.ended && this.props.somethingIsPlaying) {
          this.props.onSongEnded();
          if (!this.refs.player.loop) {
            this.props.onPlayPause();
          }
        }
      }

      //check if the current track ended to play next in queue
      if (this.state.playQueue && this.refs.player.ended) {
        if (!this.props.adsModeOn) {
        this.playNext();
        this.props.onPlayPause();
        }else
        {
          this.props.onAdsEnded();
          this.EnteredAdsMode = false;
          this.props.onPlayPause();
          
        }
      }

      //----------------Ads Audio handling----------------------------
      if (this.props.adsModeOn) {
        if (!this.EnteredAdsMode) {
          this.refs.player.load();
          this.EnteredAdsMode = true;
        }

        if (this.refs.player.ended && this.props.somethingIsPlaying) {
          this.props.onAdsEnded();
          this.EnteredAdsMode = false;
          console.log("hey");
          if(this.state.playQueue||this.refs.player.loop)this.props.onPlayPause();
          this.refs.player.load();
        }
      }

    }

    if (this.props.somethingIsPlaying) {
      if (this.refs.player) this.refs.player.play();
      if (icon) {
        icon.classList.remove("fa-play-circle");
        icon.classList.add("fa-pause-circle");
      }
    }

    else {
      if (this.refs.player) this.refs.player.pause();
      if (icon) {
        icon.classList.remove("fa-pause-circle");
        icon.classList.add("fa-play-circle");
      }
    }

    if (this.state.muted) {
      volumeIcon = "fa-volume-mute";
    } else {
      volumeIcon = "fa-volume-up";
    }

    //check if a song componenet is playing a song 
    if(this.props.reload)
    {
      //make the request to get the song here

      this.setState({trackNum:parseInt(this.props.playingSongID)})
      if(this.refs.player) this.refs.player.load();
      this.props.onLoadSong(false);
    }


    return (
      <div className="music-bar d-flex align-items-center pt-0 pb-0">
        <ReactSnackBar
          Icon={<span className="fab fa-spotify"></span>}
          Show={this.state.showSnackBar}
        >
          {this.state.snackBarMes}
        </ReactSnackBar>
        <div className="music-bar-inside container-fluid m-0">
          <div className="row">
            <div className="music-bar-left col pl-0">
              <div className="card pl-0">
                <div className="row no-gutters">
                  <div className="col-2 ">
                    <img
                      className="card-img song-photo"
                      src={
                        (!this.props.adsModeOn)?Tracks[this.state.trackNum]&&Tracks[this.state.trackNum].imgURL:
                        "https://media-exp1.licdn.com/dms/image/C560BAQHpg-r-l1OuMw/company-logo_200_200/0?e=2159024400&v=beta&t=OpcQBP3_pWwy8srJcQHoDHxaUH9MRN1RPaV5ZzKoUEY"
                      }
                    ></img>
                  </div>

                  <div className="col-10">
                    <div className="card-body pt-2 pl-0">
                      <ul className="list-group list-group-horizontal">
                        <li className="pr-2 prevent-overflow">
                          <div className="song-name prevent-overflow">
                            <a id="song-name" href={this.state.albumLink}>
                              
                              {
                              (!this.props.adsModeOn)?Tracks[this.state.trackNum]&&Tracks[this.state.trackNum].SongName:"Ad Audio"
                                }
                            </a>
                          </div>

                          <div className="artist-name prevent-overflow">
                            <a
                              id="artist-name"
                              href={this.state.artistProfileLink}
                            >
                              {
                                (!this.props.adsModeOn)?Tracks[this.state.trackNum]&&Tracks[this.state.trackNum].Artist:"Spotify"
                                }
                            </a>
                          </div>
                        </li>

                        <li className="d-flex p-2">
                          <button
                            id="heart-button"
                            className="far fa-heart"
                            title="Save to your Liked Songs"
                            onClick={this.likeSong}
                          ></button>
                          <div className="share-icon">
                            <FacebookShareButton />
                          </div>
                          <div className="share-icon"> 
                            <TwitterShareButton />
                          </div>
                          <div style={space} className="share-icon">
                            <ShareBox />
                          </div>
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
                <button
                  className="middle-icons fas fa-stop mr-2"
                  id="stop_btn"
                  title="Stop"
                  onClick={this.stop}
                ></button>
                <button
                  className="middle-icons fas fa-step-backward"
                  title="Previous"
                  id="prev_btn"
                  onClick={(!this.props.adsModeOn)&&this.playPrevious}
                ></button>
                <button
                  id="play-track-bar"
                  className="play middle-icons far fa-play-circle mr-3 ml-3"
                  onClick={this.playPause}
                ></button>
                <button
                  className="middle-icons fas fa-step-forward"
                  title="Next"
                  id="next_btn"
                  onClick={(!this.props.adsModeOn)&&this.playNext}
                ></button>
                <button
                  title="Play on Repeat"
                  style={{
                    color: this.props.playOnRepeat
                      ? "#1db954"
                      : "rgb(179,179,179)",
                  }}
                  className="middle-icons fas fa-sync-alt ml-2"
                  onClick={() => {
                    (!this.props.adsModeOn)&&this.props.onToggleLoop();
                  }}
                ></button>
              </div>
              <div className="duration-bar d-flex">
                <div id="curr_time" className="duration pr-1">{formatTime(currentTime)}</div>

                <div
                  id="music-progress"
                  className="progress"
                  onClick={(!this.props.adsModeOn)&&this.handleProgress}
                >
                  <div
                    ref="progressRef"
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: this.props.progress + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                  </div>

                  <button
                    style={{ left: this.props.progress - 3 + "%" }}
                    className="fas fa-circle slider"
                  ></button>
                </div>

                <div className="duration pl-1">{formatTime(duration)}</div>
              </div>
            </div>

            {/* ----------------------------------------------------------------------------------------------------- */}

            <div className="music-bar-right pr-0 d-flex align-items-center justify-content-end list-group-horizontal">
              <ul className="volume-bar list-group list-group-horizontal">
                <li>
                  <button
                    className="middle-icons fas fa-list mr-2"
                    title="Play Queue"
                    id="play_Queue"
                    onClick={this.playQueue}
                    style={{
                      color: this.state.playQueue
                        ? "#1db954"
                        : "rgb(179,179,179)",
                    }}
                  ></button>
                </li>
                <li>
                  <button
                    id="volume-button"
                    className={"fas " + volumeIcon}
                    onClick={this.muteVolume}
                  >
                    {" "}
                  </button>
                </li>

                <li>
                  <div
                    className="progress volumebar"
                    id="progress_volumebar"
                    onClick={this.changeVolume}
                  >
                    <div
                      ref="volumeRef"
                      id="volume"
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{
                        width: this.state.muted
                          ? 0 + "%"
                          : this.state.volume * 100 + "%",
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                    </div>
                    <button
                      style={{
                        left: this.state.muted
                          ? "-15%"
                          : this.state.volume * 100 - 15 + "%",
                      }}
                      className="fas fa-circle slider"
                    ></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <audio ref="player" loop={this.props.playOnRepeat}>
          <source src={
            (!this.props.adsModeOn)?Tracks[this.state.trackNum]&& Tracks[this.state.trackNum].songURL: AdsAudio
            } autoplay/>
        </audio>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayASong: (songID) => dispatch({ type: actionTypes.PLAY_SONG, value: songID }),
    onPlayPause: () => dispatch({ type: actionTypes.PLAY_PAUSE }),
    onToggleLoop: () => dispatch({ type: actionTypes.TOGGLE_SONG_LOOP }),
    onChangeIndex: (songIndex) => dispatch({ type: actionTypes.CHANGE_SONG_INDEX, value: songIndex }),
    onChangeProgress: (progressValue) => dispatch({ type: actionTypes.CHANGE_SONG_PROGRESS, value: progressValue }),
    onSongEnded: () => dispatch({ type: actionTypes.INCREMENT_NUM_SONGS }),
    onAdsEnded: () => dispatch({ type: actionTypes.EXIT_ADS_MODE }),
    onLoadSong: (boolStatus) => dispatch({type:actionTypes.ENABLE_LOAD_AUDIO, value:boolStatus}),
    changePlayingSongID:(songID)=>dispatch({type:actionTypes.CHANGE_SONG_ID, value:songID}),
  };
};

const mapStateToProps = (state) => {
  return {
    playingSongID: state.playingSongID,
    somethingIsPlaying: state.somethingIsPlaying,
    playOnRepeat: state.playOnRepeat,
    adsModeOn: state.adsModeOn,
    // trackNum: state.trackNum,
    progress: state.progress,
    reload: state.reload,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicBar);
