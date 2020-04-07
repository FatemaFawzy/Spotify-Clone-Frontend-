import React, { Component } from "react"
import "./SongSearched.css"
import ReactDOM from "react-dom"
import ReactSnackBar from "react-js-snackbar";
import '../../Components/PlaylistsComponent/SnackBar.css';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";

class SongSearched extends Component {
  state = {
    dropContentClass: "dropdown-content",
    songSearchedIdActive: "",
    playing: false,
    showAdd: false,
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClickoutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickoutside, false);
  }

  handleClickoutside = event => {
    if ((!event.target.matches('.dropbtn') || !ReactDOM.findDOMNode(this).contains(event.target))) {
      if (!this.state.playing) {
        this.setState({ songSearchedIdActive: "" })
      }
      this.setState({ dropContentClass: "dropdown-content" })
    }

    // if(!ReactDOM.findDOMNode(this).contains(e.target)) {
    //   // the click was outside your component, so handle closing here
    // }
  }

  OnAddedToLiked = (event) => {
    this.setState({ showAdd: true });
    setTimeout(() => {
      this.setState({ showAdd: false});
    }, 2000);
  }

  render() {

    var actualName;
    if (this.props.name.length > 20) {
      actualName = this.props.name.slice(0, 20) + "...";
    } else {
      actualName = this.props.name;
    }

    var PlayPause = this.state.playing ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>;

    return (
      <div className="song-searched-class" id={this.state.songSearchedIdActive}>

        <div className="name-image-song-searched">
          <img src={this.props.image} className="img-style-song-searched" />
          <Link onClick={ ()=>{this.props.onSongClicked(this.props.id);} 
          } to="/webplayer/album/" className="song-searched-name" >{actualName}</Link>
          <Link onClick={ ()=>{this.props.onArtistClicked(this.props.id);}
          }  to="/webplayer/artistprofile/" className="song-searched-subname">{this.props.subname}</Link>
          <button
            onClick={(event) => {

              //TODO: also check later on that their isn't any other song playing
              if (!this.state.playing) {
                this.setState({ songSearchedIdActive: "song-searched-active" })
              }

              this.setState((prevstate, event) => ({ playing: prevstate.playing ? false : true }))

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

    onSongClicked : (itemID) => dispatch ({type: actionTypes.SELECT_SONG , value: itemID}),
    onArtistClicked : (itemID) => dispatch ({type: actionTypes.SELECT_ARTIST , value: itemID}),

  };

};
export default connect(null,mapDispatchToProps)(SongSearched);