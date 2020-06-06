import React ,{ Component} from 'react';
import "./ArtistProfile.css";
import {NavLink } from "react-router-dom";
import ArtistProfileContent from "../../Components/ArtistProfile/ArtistProfileContent";
import HomePageNavbar from "../../Components/HomePage/HomePageNavbar";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";

/** Class ArtistProfile
 * @category ArtistProfile
 * @extends Component
 */
export class ArtistProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
  /**Object of artist objects with info
   * @memberof ArtistProfile
   * @type {Array<artists>}
   */
      artistInfo:{},
  /**state member to play artist's songs
   * @memberof ArtistProfile
   * @type {string}
   */
      play: "play",
  /**state member to follow artist
   * @memberof ArtistProfile
   * @type {string}
   */
      follow: "follow",
  /**state member having the artist profile's cover link
   * @memberof ArtistProfile
   * @type {string}
   */
      coverLink: "https://ak8.picdn.net/shutterstock/videos/31469038/thumb/1.jpg",
  }
}
  /**Function for setting state on rendering and getting artist info
   * @memberof ArtistProfile
   * @func componentDidMount
   */
  componentDidMount() {
    console.log(this.props.match.url)
    // Get the basic artist info
    // this.props.history.replace("/webplayer/artistprofile/" + this.props.selectedArtistID ) 

  /**const url of the request
   * @memberof ArtistProfile
   * @type {string}
   */ 
    // var url = BASEURL + "Artists/" + this.props.selectedArtistID; 
    var url = BASEURL + "Artists/123" ; 
    var requestOptions = {
      method: 'GET',
      // headers: { 'x-auth': "eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s" },
    };
    
    fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        this.setState({
        artistInfo: data,
        coverLink: data.imagePath
        // coverLink: "http://52.14.190.202:8000/images/"+data.artist.imagePath
      });
        console.log(this.state.artistInfo);
      })
      .catch((error)=>{console.log(error);

      })

  }
  /**Function for toggling play and pause in header
   * @memberof ArtistProfile
   * @func playArtist
   */
  playArtist = e => {
        /**const id of the calling element
     * @memberof ArtistProfile
     * @type {string}
     */  
    const {id} = e.target;

    if ( this.state.play === "play" ) {
      this.setState({play: "pause"});
    }
    else if ( this.state.play === "pause" ) {
      this.setState({play: "play"});
    }

  }
  /**Function for toggling follow and follow in header
   * @memberof ArtistProfile
   * @func followArtist
   */
  followArtist = e => {
      /**const id of the calling element
       * @memberof ArtistProfile
       * @type {string}
       */  
    const {id} = e.target;

    const requestOptions = {
      method: 'POST',
      headers: { 'x-auth': this.props.userToken },
    }

    //if the user wants to follow the artist
    if ( this.state.follow === "follow" ) {

        //send a request to follow the artist
        const url = BASEURL + "users/123/follow";
        // const url = BASEURL + "users"+selectedArtistID+"follow";
        fetch(url,requestOptions)
          .then((response) => {
            console.log(response)
            return response.json();
          })
          .then((data) => {
            if(data.message == "followed"){
              this.setState({follow: "unfollow"});
              if (document.getElementById(id)){
              document.getElementById(id).style.color="#1DB954";}
            }
             console.log(data);
          })
          .catch((error)=>{
            console.log(error);
          })
    }

    //if the user wants to unfollow the artist
    else if ( this.state.follow === "unfollow" ) {

      //send a request to unfollow the artist
      const url1 = BASEURL + "users/123/unfollow";
      // const url = BASEURL + "users"+selectedArtistID+"unfollow";
      fetch(url1,requestOptions)
        .then((response) => {
          console.log(response)
          return response.json();
        })
        .then((data) => {
          if(data.message == "unfollowed"){
            this.setState({follow: "follow"});
            if (document.getElementById(id)){
            document.getElementById(id).style.color="white";}
          }
            console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        })      

    }

  }


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

          <NavLink to={this.props.match.url + "/overview/"} id="overview" 
          className="artist-profile-sections"> Overview </NavLink>
          
          <NavLink to={this.props.match.url + "/relatedartists/"} id="related-artists" 
          className=" artist-profile-sections"> Related Artists </NavLink>

          <NavLink to={this.props.match.url + "/artistabout/"} id="about" 
          className="artist-profile-sections"> About </NavLink> 


        </div>

      </div>

      <ArtistProfileContent info={this.state.artistInfo} artistID={this.props.selectedArtistID}/>

    </div>
  )
 };
};

  /**Function for connecting the component with redux store
   * @memberof ArtistProfile
   * @func mapStateToProps
   */
const mapStateToProps = state => {

  return {
    selectedArtistID : state.selectedArtistID
    //now you have access to the selectedArtistID as this.props.selectedArtistID inside the class component.
  };

};

export default connect(mapStateToProps)(ArtistProfile);