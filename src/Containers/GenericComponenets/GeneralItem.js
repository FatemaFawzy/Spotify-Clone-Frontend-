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

  handleClick = () => {

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

    return (
      <div onClick={this.handleClick} className="item-general-outer-class">

        <img src={this.props.image} id={roundImgOrNot} className="img-style-item-general" />
        <p>{actualName}</p>
        <a href="#">{this.props.subname}</a>
        <button><i className="fas fa-play"></i></button>

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
    onProfileClicked : (itemID) => dispatch ({type: actionTypes.SELECT_PROFILE , value: itemID})

  };

};
export default connect(null,mapDispatchToProps)(withRouter(GeneralItem));