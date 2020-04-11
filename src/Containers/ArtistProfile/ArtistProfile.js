import React ,{ Component} from 'react';
import "./ArtistProfile.css";
import {NavLink } from "react-router-dom";
import ArtistProfileContent from "../../Components/ArtistProfile/ArtistProfileContent";
import HomePageNavbar from "../../Components/HomePage/HomePageNavbar";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";


export class ArtistProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
      artistInfo:{},
      play: "play",
      follow: "follow",
      coverLink: "https://ak8.picdn.net/shutterstock/videos/31469038/thumb/1.jpg",
  }
}

  componentDidMount() {
    console.log(this.props.match.url)
    // Get the basic artist info
    // this.props.history.replace("/webplayer/artistprofile/" + this.props.selectedArtistID ) 

    // const url = "https://b9b31d99-4598-43e6-90a8-893c3988d489.mock.pstmn.io/" + "api/Artist/" +"123"; 
    var url = BASEURL + "Artists/" + this.props.selectedArtistID; 
    var requestOptions = {
      method: 'GET',
      headers: { 'x-auth': "eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s" },
    };
    
    fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        this.setState({
        artistInfo: data.artist,
        coverLink: "http://52.14.190.202:8000/images/"+data.artist.imagePath
      });
        console.log(this.state.artistInfo);
      })
      .catch((error)=>{console.log(error);

      })

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
      if (document.getElementById(id)){
      document.getElementById(id).style.color="#1DB954";}
    }
    else if ( this.state.follow === "unfollow" ) {
      this.setState({follow: "follow"});
      if (document.getElementById(id)){
      document.getElementById(id).style.color="white";}
    }

  }

  // handleSectionClick = e => {
  //   const {id} = e.target;
  //   var clickedOption= document.getElementById(id);
  //   clickedOption.classList.add("grey-background");

  //   var options =document.getElementsByClassName("grey-background");
  //   for (var i = 0 ; i < options.length ; i++) {
  //     if (options[i].id !== id){
  //       options[i].classList.remove("grey-background");
  //     }
  //   }; 
  // }

  render() {
  return (
    <div className="artist-profile-body">

       <HomePageNavbar color="rgba(77,67,61,0.4)"/>
     
      <div className="container  artist-top-section " style={{ backgroundImage: `url(${this.state.coverLink})` }}>

        <div className="montly-listeners">
          Average rating: {this.state.artistInfo.rating}/5
        </div>

        <div>
          <h1 className="artist-name font-weight-bolder"> {this.state.artistInfo.artistName} </h1>
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

          <NavLink to={this.props.match.url + "/overview/"} id="overview" 
          className="artist-profile-sections" 
          onClick={this.handleSectionClick}> Overview </NavLink>
          
          <NavLink to={this.props.match.url + "/relatedartists/"} id="related-artists" 
          className=" artist-profile-sections" 
          onClick={this.handleSectionClick}> Related Artists </NavLink>

          <NavLink to={this.props.match.url + "/artistabout/"} id="about" 
          className="artist-profile-sections" 
          onClick={this.handleSectionClick}> About </NavLink> 


        </div>

      </div>

      <ArtistProfileContent info={this.state.artistInfo} artistID={this.props.selectedArtistID}/>

    </div>
  )
 };
};

const mapStateToProps = state => {

  return {
    selectedArtistID : state.selectedArtistID
    //now you have access to the selectedArtistID as this.props.selectedArtistID inside the class component.
  };

};

export default connect(mapStateToProps)(ArtistProfile);