import React, { Component } from "react";
import "./GeneralItem.css";
import * as itemType from "../../Constants/itemType";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";

class GeneralItem extends Component {

  handleClick = () => {

    switch (this.props.type) {
      case itemType.SONG:

        this.props.history.push("/webplayer/album/");
        this.props.onSongClicked(this.props.id);

        break;

      case itemType.ARTIST:

        this.props.history.push("/webplayer/artistprofile/");
        this.props.onArtistClicked(this.props.id);

        break;

      case itemType.ALBUM:

        this.props.history.push("/webplayer/album/");
        this.props.onAlbumClicked(this.props.id);

        break;

      case itemType.PLAYLIST:

        this.props.history.push("/webplayer/playlist/");
        this.props.onPlaylistClicked(this.props.id);

        break;

      case itemType.PROFILE:

        this.props.history.push("/webplayer/user/");
        this.props.onProfileClicked(this.props.id);

        break;

      default:

        this.props.history.push("/webplayer/");

        break;
    }


  }

  render() {

    const roundImgOrNot = this.props.roundimage ? "i-am-round-img-general" : "i-am-general-not-round";

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
        <button><i class="fas fa-play"></i></button>

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