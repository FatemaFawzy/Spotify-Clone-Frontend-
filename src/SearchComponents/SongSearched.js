import React, { Component } from "react"
import "./SongSearched.css"
import ReactDOM from "react-dom"

class SongSearched extends Component {
  state = {
    dropContentClass: "dropdown-content",
    songSearchedIdActive: "",
    playing: false
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClickoutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickoutside, false);
  }

  handleClickoutside = event => {
    if ((!event.target.matches('.dropbtn') || !ReactDOM.findDOMNode(this).contains(event.target))) {
      if(!this.state.playing)
      {
        this.setState({songSearchedIdActive: ""})
      }
      this.setState({ dropContentClass: "dropdown-content" })
    }

    // if(!ReactDOM.findDOMNode(this).contains(e.target)) {
    //   // the click was outside your component, so handle closing here
    // }
  }

  render() {

    var actualName;
    if (this.props.name.length > 100) {
      actualName = this.props.name.slice(0, 100) + "...";
    } else {
      actualName = this.props.name;
    }

    var PlayPause=this.state.playing?<i class="fas fa-pause"></i>:<i class="fas fa-play"></i>;

    return (
      <div className="song-searched-class" id={this.state.songSearchedIdActive}>

        <div className="name-image-song-searched">
          <img src={this.props.image} className="img-style-song-searched" />
          <a className="song-searched-name" href="#">{actualName}</a>
          <a className="song-searched-subname" href="#">{this.props.subname}</a>
          <button
          onClick={(event)=>{
           
            //TODO: also check later on that their isn't any other song playing
            if(!this.state.playing)
            {
              this.setState({songSearchedIdActive:"song-searched-active"})
            }

            this.setState((prevstate,event)=>({playing:prevstate.playing?false:true}))

          }}>{PlayPause}</button>
        </div>
        {/* dropdown */}
        <div className="dropdown">
          <button onClick={(event) => {

            this.setState({ dropContentClass:"dropdown-content-show"})
            this.setState({songSearchedIdActive:"song-searched-active"})
            
          }} className="dropbtn">...</button>
          <div id="myDropdown" className={this.state.dropContentClass}>
            <a href="#">Save to your liked songs</a>
            <a href="#">Add to playlist</a>
          </div>
        </div>

      </div>
    )
  }





}
export default SongSearched;