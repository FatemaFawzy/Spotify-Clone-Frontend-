import React ,{ Component} from 'react';
import "./ArtistProfile.css";
import {Link } from "react-router-dom";
import ArtistProfileContent from "../../Components/ArtistProfile/ArtistProfileContent"
// import Searchbar from "../../SearchComponents/Searchbar"
// import ArtistNavbar from "./ArtistNavbar"


class ArtistProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
      artistName: "Tom Odell",
      monthlyListeners: "5,006,400",
      coverLink: "https://i.scdn.co/image/f84e55c8589b0c8bc0eefab69e9cca5d924e758e",


    }
  }

  handleSectionClick = e => {
    const {id} = e.target;
    var clickedOption= document.getElementById(id);
    // clickedOption.style.backgroundColor="#333";

    // var options =document.getElementsByClassName("artist-profile-sections");
    // for (var i = 0 ; i < options.length ; i++) {
    //   if (options[i].id !== id){
    //     options[i].style.backgroundColor="" ;
    //   }
    // }; 

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
          {/* TODO: change link when search is implemented */}  

          {/* <a id="overview" type="button" className=" artist-profile-sections" 
          role="button" href="/webplayer/likedsongs/" onClick={this.handleSectionClick}> Overview </a>

          <a id="related-artists" type="button" className=" artist-profile-sections" 
          role="button" href="/webplayer/likedsongs/relatedartists/" onClick={this.handleSectionClick}> Related Artists </a>

          <a id="about" type="button" className=" artist-profile-sections" 
          role="button" href="/webplayer/likedsongs/artistabout/" onClick={this.handleSectionClick}> About </a> */}

          <Link to="/webplayer/likedsongs/" id="overview" className="artist-profile-sections grey-background" 
          onClick={this.handleSectionClick}> Overview </Link>
          
          <Link to="/webplayer/likedsongs/relatedartists/" id="related-artists" className=" artist-profile-sections" 
          onClick={this.handleSectionClick}> Related Artists </Link>

          <Link to="/webplayer/likedsongs/artistabout/" id="about" className="artist-profile-sections" 
          onClick={this.handleSectionClick}> About </Link> 


        </div>

      </div>

      <ArtistProfileContent/>

    </div>
  )
 };
};

export default ArtistProfile;