import React, { Component } from "react";
import "./GeneralItem.css";
import * as itemType from "../../Constants/itemType";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";

/** Class GeneralItem that holds the data of a certain song, playlist, album...etc.
 * @category GeneralItem
 * @extends Component
 */

export class GeneralItem extends Component {

    /**A function that is called upon a click of the general item
   * @memberof GeneralItem
   * @func  handleClick
   */

  handleClick = (event) => {

    console.log(event.target);
    if ((!event.target.matches('.play-button-general-class')) && (!event.target.matches('.fas'))) {

    switch (this.props.type) {
      case itemType.SONG:

        this.props.history.push("/webplayer/album/" + this.props.id);
        this.props.onSongClicked(this.props.id);
        window.location.reload(true);

        break;

      case itemType.ARTIST:

        this.props.history.push("/webplayer/artistprofile/" + this.props.id);
        console.log("/webplayer/artistprofile/" + this.props.id)
        this.props.onArtistClicked(this.props.id);
        window.location.reload(true);

        break;

      case itemType.ALBUM:

        this.props.history.push("/webplayer/album/" + this.props.id);
        this.props.onAlbumClicked(this.props.id);
        window.location.reload(true);

        break;

      case itemType.PLAYLIST:

        this.props.history.push("/webplayer/playlist/" + this.props.id );
        this.props.onPlaylistClicked(this.props.id);
        window.location.reload(true);

        break;

      case itemType.PROFILE:

        this.props.history.push("/webplayer/user/" + this.props.name);
        this.props.onProfileClicked(this.props.id);
        window.location.reload(true);

        break;

      default:

        this.props.history.push("/webplayer/");
        window.location.reload(true);

        break;
    }

  }
  }

  render() {

       /**Indicates whether the image is round or not
   * @memberof GeneralItem
   * @type {string}
   */
    const roundImgOrNot = this.props.roundimage ? "i-am-round-img-general" : "i-am-general-not-round";

    /**variable that holds the actual name that appears after being truncated if it is too long
    * @memberof GeneralItem
    * @type {string}
    */
     var actualName;
    if (this.props.name.length > 17) {
      actualName = this.props.name.slice(0, 17) + "...";
    } else {
      actualName = this.props.name;
    }

    var playPause=(this.props.somethingIsPlaying&&this.props.playingPlaylistID===this.props.id)?"fa-pause":"fa-play";
    var activeComponentID=(this.props.somethingIsPlaying&&this.props.playingPlaylistID===this.props.id)?"active-component-id":"";
    
    return (
      <div onClick={this.handleClick} className="item-general-outer-class" id={activeComponentID}>

        <img src={this.props.image} id={roundImgOrNot} className="img-style-item-general" />
        <p>{actualName}</p>
        <a href="#">{this.props.subname}</a>
        {(this.props.type===itemType.PLAYLIST||this.props.type===itemType.SONG)&&<button 
        // style={{display:(this.props.somethingIsPlaying&&
        //   (this.props.playingSongID===this.props.id||this.props.playingPlaylistID===this.props.id))?"block":"none"}} 
        className="play-button-general-class" 
        onClick={()=>{

          switch (this.props.type) {
            case itemType.SONG:
              this.props.onPlayASong(this.props.id);
              break;
      
            case itemType.PLAYLIST:
              this.props.onPlayAPlaylist(this.props.id);
              break;
      
            default:
              break;
          }


            

        }
      }><i className={"fas "+playPause}></i></button>}

      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {

  return {

    onSongClicked : (itemID) => dispatch ({type: actionTypes.SELECT_SONG , value: itemID}),
    onArtistClicked : (itemID) => dispatch ({type: actionTypes.SELECT_ARTIST , value: itemID}),
    onAlbumClicked : (itemID) => dispatch ({type: actionTypes.SELECT_ALBUM , value: itemID}),
    onPlaylistClicked : (itemID) => dispatch ({type: actionTypes.SELECT_PLAYLIST , value: itemID}),
    onProfileClicked : (itemID) => dispatch ({type: actionTypes.SELECT_PROFILE , value: itemID}),
    onPlayASong: (songID) => dispatch({type: actionTypes.PLAY_SONG, value:songID}),
    onPlayAPlaylist: (playlistID) => dispatch({type: actionTypes.PLAY_PLAYLIST, value:playlistID}),

  };
};

const mapStateToProps = state =>{
  return{
    playingSongID: state.playingSongID,
    playingPlaylistID: state.playingPlaylistID,
    somethingIsPlaying: state.somethingIsPlaying,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GeneralItem));