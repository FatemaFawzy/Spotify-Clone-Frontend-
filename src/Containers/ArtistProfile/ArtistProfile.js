import React ,{ Component} from 'react';
import "./ArtistProfile.css";
import {Link } from "react-router-dom";
import ArtistProfileContent from "../../Components/ArtistProfileComponents/ArtistProfileContent"
// import Searchbar from "../../SearchComponents/Searchbar"
// import ArtistNavbar from "./ArtistNavbar"


class ArtistProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
      artistName: "Tom Odell",
      monthlyListeners: "5,006,400",
      coverLink: "https://i.scdn.co/image/f84e55c8589b0c8bc0eefab69e9cca5d924e758e"

    }
  }

  handleSectionClick = e => {
    const {id} = e.target;
    var clickedOption= document.getElementById(id);
    clickedOption.style.backgroundColor="#333";

    var options =document.getElementsByClassName("artist-profile-sections");
    for (var i = 0 ; i < options.length ; i++) {
      if (options[i].id !== id){
        options[i].style.backgroundColor="";
      }
    }; 
    
  }

  render() {
  return (
    <div className="artist-profile-body">
      {/* <div>
      <Searchbar/>
      </div> */}

      <div className="container  artist-top-section " style={{ backgroundImage: `url(${this.state.coverLink})` }}>
      
        <div className="montly-listeners">
          {this.state.monthlyListeners} monthly listeners
        </div>

        <div>
          <h1 className="artist-name font-weight-bolder"> {this.state.artistName} </h1>
        </div>

        <div id="buttons">
          <button id="play-button" className="btn btn-success rounded-pill">
            play 
          </button>

          <button id="follow-button" className="btn btn-success rounded-pill ">
            follow
          </button>
        </div>

        <div id="artist-profile-sections">

          <button id="overview" type="button" className="artist-profile-sections" 
          data-toggle="button" aria-pressed="false" >
            {/* TODO: change link when search is implemented */}
            <Link to="/webplayer/likedsongs/"> Overview </Link> 
            
          </button>

          <button id="related-artists" type="button" className="artist-profile-sections" 
          data-toggle="button" aria-pressed="false" >

            <Link to="/webplayer/likedsongs/relatedartists/"> Related Artists </Link>

          </button>

          <button id="about" type="button" className="artist-profile-sections" 
          data-toggle="button" aria-pressed="false" >
            <Link to="/webplayer/likedsongs/artistabout/"> About </Link>
          </button>

        </div>

      </div>

      <ArtistProfileContent/>

    </div>
  )
 };
};

export default ArtistProfile;