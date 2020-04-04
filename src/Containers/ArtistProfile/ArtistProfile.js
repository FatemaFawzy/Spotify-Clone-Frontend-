import React ,{ Component} from 'react';
import "./ArtistProfile.css";
import {Link } from "react-router-dom";
import ArtistProfileContent from "../../Components/ArtistProfile/ArtistProfileContent";
import HomePageNavbar from "../../Components/HomePage/HomePageNavbar";


class ArtistProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
      artistName: "Tom Odell",
      monthlyListeners: "5,006,400",
      coverLink: "https://i.scdn.co/image/f84e55c8589b0c8bc0eefab69e9cca5d924e758e",
      play: "play",
      follow: "follow",


    }
  }

  playArtist = e => {
    const {id} = e.target;

    if ( this.state.play === "play" ) {
      this.setState({play: "pause"});
    }
    else if ( this.state.play === "pause" ) {
      this.setState({play: "play"});
    }

  }

  followArtist = e => {
    const {id} = e.target;

    if ( this.state.follow === "follow" ) {
      this.setState({follow: "unfollow"});
      document.getElementById(id).style.color="#1DB954";
    }
    else if ( this.state.follow === "unfollow" ) {
      this.setState({follow: "follow"});
      document.getElementById(id).style.color="white";
    }

  }

  handleSectionClick = e => {
    const {id} = e.target;
    var clickedOption= document.getElementById(id);
    clickedOption.classList.add("grey-background");

    var options =document.getElementsByClassName("grey-background");
    for (var i = 0 ; i < options.length ; i++) {
      if (options[i].id !== id){
        options[i].classList.remove("grey-background");
      }
    }; 
  }

  render() {
  return (
    <div className="artist-profile-body">

       <HomePageNavbar accountType="regular" name="Ali Halafawy" color="rgba(77,67,61,0.4)"
        image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
     
      <div className="container  artist-top-section " style={{ backgroundImage: `url(${this.state.coverLink})` }}>

        <div className="montly-listeners">
          {this.state.monthlyListeners} monthly listeners
        </div>

        <div>
          <h1 className="artist-name font-weight-bolder"> {this.state.artistName} </h1>
        </div>

        <div id="buttons">
          <button id="play-button" className="btn btn-success rounded-pill" onClick={this.playArtist}>
            {this.state.play} 
          </button>

          <button id="follow-button" className="btn btn-success rounded-pill " onClick={this.followArtist}>
            {this.state.follow}
          </button>
        </div>

        <div id="artist-profile-sections">
          {/* TODO: change link when search is implemented */}  

          {/* <a id="overview" type="button" className=" artist-profile-sections" 
          role="button" href="/webplayer/likedsongs/" onClick={this.handleSectionClick}> Overview </a>

          <a id="related-artists" type="button" className=" artist-profile-sections" 
          role="button" href="/webplayer/likedsongs/relatedartists/" onClick={this.handleSectionClick}> Related Artists </a>

          <a id="about" type="button" className=" artist-profile-sections" 
          role="button" href="/webplayer/likedsongs/artistabout/" onClick={this.handleSectionClick}> About </a> */}

          <Link to="/webplayer/artistprofile/" id="overview" className="artist-profile-sections grey-background" 
          onClick={this.handleSectionClick}> Overview </Link>
          
          <Link to="/webplayer/artistprofile/relatedartists/" id="related-artists" className=" artist-profile-sections" 
          onClick={this.handleSectionClick}> Related Artists </Link>

          <Link to="/webplayer/artistprofile/artistabout/" id="about" className="artist-profile-sections" 
          onClick={this.handleSectionClick}> About </Link> 


        </div>

      </div>

      <ArtistProfileContent/>

    </div>
  )
 };
};

export default ArtistProfile;