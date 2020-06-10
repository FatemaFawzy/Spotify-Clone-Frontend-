import React, { Component } from "react"
import "./SongSearched.css"
import ReactDOM from "react-dom"
import ReactSnackBar from "react-js-snackbar";
import '../../Components/PlaylistsComponent/SnackBar.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";

/** Class SongSearched that displays the searched song as an item component
 * @category SongSearched
 * @extends Component
 */
export class SongSearched extends Component {

  constructor(props) {
    super(props);
  }
  state = {

    /**variable that holds the SongSearched
   * @memberof SongSearched
   * @type {string}
   */
    dropContentClass: "dropdown-content",

    /**variable that holds the id of the active song
    * @memberof SongSearched
    * @type {string}
    */
    songSearchedIdActive: "",

    /**variable that indicates whether the song is playing or not
   * @memberof SongSearched
   * @type {boolean}
   */
    playing: false,

    /**variable that indicates whether to show the snackbar at the bottom or not
* @memberof SongSearched
* @type {string}
*/
    isplayingclass: "fas fa-play",

    /**variable that indicates whether to show the snackbar at the bottom or not
   * @memberof SongSearched
   * @type {boolean}
   */
    showAdd: false,
  }

  /**componentWillMount
* @memberof SongSearched
* @func componentWillMount
*/
  componentWillMount() {
    document.addEventListener('click', this.handleClickoutside, false);
  }

  /** componentWillUnmount
* @memberof SongSearched
* @func componentWillUnmount
*/

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickoutside, false);
  }

  /**A function that handles the click outside the the dropdown three dots
  * @memberof SongSearched
  * @func handleClickoutside
  */
  handleClickoutside = event => {
    if ((!event.target.matches('.dropbtn') || !ReactDOM.findDOMNode(this).contains(event.target))) {
      if (!(this.props.id === this.props.playingSongID) && this.props.somethingIsPlaying) {
        this.setState({ songSearchedIdActive: "" });
      }
      this.setState({ dropContentClass: "dropdown-content" })
    }

  }

  /**A function that is called whenever a user chooses the option of adding a song in the dropdown
 * @memberof SongSearched
 * @func OnAddedToLiked
 */
  OnAddedToLiked = (event) => {
    this.setState({ showAdd: true });
    setTimeout(() => {
      this.setState({ showAdd: false });
    }, 2000);
  }

  render() {


    /**variable that holds the actual name that appears after being truncated if it is too long
    * @memberof SongSearched
    * @type {string}
    */
    var actualName;
    if (this.props.name) {
      if (this.props.name.length > 20) {
        actualName = this.props.name.slice(0, 20) + "...";
      } else {
        actualName = this.props.name;
      }

    }

    /**variable that holds the icon of play or pause
    * @memberof SongSearched
    * @type {object}
    */
    var PlayPause;

    /**variable that holds the id of the wrapping div, indicates whether the component is active or not.
    * @memberof SongSearched
    * @type {string}
    */
    var idOfTheActive;

    if ((this.props.id === this.props.playingSongID) && this.props.somethingIsPlaying) {
      PlayPause = <i className="fas fa-pause"></i>;
      idOfTheActive = "song-searched-active";
    }
    else {
      PlayPause = <i className="fas fa-play"></i>;
      idOfTheActive = "";
    }


    return (
      <div className="song-searched-class" id={this.state.songSearchedIdActive} id={idOfTheActive}>

        <div className="name-image-song-searched">
          <img src={this.props.image} className="img-style-song-searched" />
          <Link onClick={() => { this.props.onSongClicked(this.props.id); }
          } to={"/webplayer/album/" + this.props.id} className="song-searched-name" >{actualName}</Link>
          <Link onClick={() => { this.props.onArtistClicked(this.props.artistid); }
          } to={"/webplayer/artistprofile/" + this.props.artistid} className="song-searched-subname">{this.props.subname}</Link>
          <button
            onClick={(event) => {

              this.props.onPlayASong(this.props.id);

              if ((this.props.id == this.props.playingSongID) && this.props.somethingIsPlaying) {
                this.setState({ songSearchedIdActive: "" });
                
              }
              else {
                let prevActive = document.getElementById("song-searched-active");
                if (prevActive) { prevActive.id = ""; }
                this.setState({ songSearchedIdActive: "song-searched-active" });
                this.props.onLoadSong(true);
              }

            }}>{PlayPause}</button>
        </div>
        {/* dropdown */}
        <div className="dropdown">
          <button onClick={(event) => {

            this.setState({ dropContentClass: "dropdown-content-show" })
            this.setState({ songSearchedIdActive: "song-searched-active" })

          }} className="dropbtn">...</button>
          <div id="myDropdown" className={this.state.dropContentClass}>
            <a className="drop-down-option-song-search" onClick={this.OnAddedToLiked} >Save to your liked songs</a>
            <a href="#">Add to playlist</a>
          </div>
        </div>

        <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.showAdd}>
          Added To Your Liked Songs
        </ReactSnackBar>

      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {

  return {

    onSongClicked: (itemID) => dispatch({ type: actionTypes.SELECT_SONG, value: itemID }),
    onArtistClicked: (itemID) => dispatch({ type: actionTypes.SELECT_ARTIST, value: itemID }),
    // onPlayASong: (songID) => dispatch({ type: actionTypes.PLAY_SONG, value: songID, type: actionTypes.ENABLE_LOAD_AUDIO, value: true}),
    onPlayASong: (songID) => dispatch({ type: actionTypes.PLAY_SONG, value: songID}),
    onLoadSong: (boolStatus) => dispatch({type:actionTypes.ENABLE_LOAD_AUDIO, value:boolStatus}),
  };

};

const mapStateToProps = state => {
  return {
    playingSongID: state.playingSongID,
    somethingIsPlaying: state.somethingIsPlaying,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SongSearched);