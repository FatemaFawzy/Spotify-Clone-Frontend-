import React, { Component } from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import { goBackward, goForward } from "../HelperFunctions/History";
import * as History from "../HelperFunctions/History";



export class YourLibraryNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
      image:"",
      name:"",
      type:""
    }
  }

  // handleBackButton = () => {
  //   // let history = useHistory()
  //   // history.goBack();
  // };
  // handleArtistClick = () => {
  //   document.querySelector("#artists-button").classList.add("grey-box");
  //   document.querySelector("#playlists-button").classList.remove("grey-box");
  //   document.querySelector("#albums-button").classList.remove("grey-box");
  //   this.props.history.push("/webplayer/yourlibrary/artist");
  // };
  // handleAlbumClick = () => {
  //   document.querySelector("#albums-button").classList.add("grey-box");
  //   document.querySelector("#playlists-button").classList.remove("grey-box");
  //   document.querySelector("#artists-button").classList.remove("grey-box");
  //   this.props.history.push("/webplayer/yourlibrary/album");
  // };
  // handlePlaylistClick = () => {
  //   document.querySelector("#playlists-button").classList.add("grey-box");
  //   document.querySelector("#albums-button").classList.remove("grey-box");
  //   document.querySelector("#artists-button").classList.remove("grey-box");
  //   this.props.history.push("/webplayer/yourlibrary/");
  // };
  render(){
  return (
<div className="your-library-nav">
  <nav className="navbar navbar-nav navbar-expand navbar-dark nav-bgblack navbar-default no-gutters d-flex" id="main-nav"   >   
    <div>
      <ul className="navbar-nav mr-auto justify-content-start">
        <li className="nav-item" onClick={() => { History.goBackward(); this.props.history.push(History.currentURL)}}>
          <a className="nav-link icons ml-4" ><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item" onClick={() => { History.goBackward(); this.props.history.push(History.currentURL)}}>
          <a className="nav-link icons mr-4"   ><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
        </li>
        <li className="nav-item">
          <NavLink to="/webplayer/yourlibrary"><a id="playlists-button" className={this.props.type== "Playlists" ? 'grey-box nav-link words' : 'no-box nav-link words'}>Playlists</a></NavLink>
        </li>
        <li className="nav-item d-none d-lg-inline">
          <NavLink to="/webplayer/yourlibrary/artist"><a id="artists-button" className={this.props.type== "Artists" ? 'grey-box nav-link words' : 'no-box nav-link words'}>Artists</a></NavLink>
        </li>
        <li className="nav-item d-none d-lg-inline">     
          <NavLink to="/webplayer/yourlibrary/album"><a id="albums-button" className={this.props.type== "Albums" ? 'grey-box nav-link words' : 'no-box nav-link words'}>Albums</a></NavLink>
        </li>
        <li className="nav-item dropdown d-inline d-lg-none">
          <div className="btn-group">
            <button  id="more-button" type="button" className="btn dropdown-toggle words" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </button>
            <div className="dropdown-menu" id="width">
            <NavLink to="/webplayer/yourlibrary/artist" className="dropdown-item" ><button className="dropdown-item white-words pl-2" type="button" onClick={this.handleArtistClick} >Artists</button></NavLink>
            <NavLink to="/webplayer/yourlibrary/album" className="dropdown-item" > <button className="dropdown-item white-words pl-2" type="button" onClick={this.handleAlbumClick}>Albums</button></NavLink>
            </div>
          </div>
        </li> 
        </ul>
    </div>
      <ul className="navbar-nav ml-auto d-flex d-none col-md-2 col-lg-3 col-xl-2" id="button-selector">
        <li>
          <div className="over btn-group mr-4 "  >
            <button type="button" className="btn dropdown-toggle account-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img  className="image" src={this.props.image} alt="User"/>
              <p className="name">{this.props.name}</p>
            </button>
            <div className="over dropdown-menu dropdown-menu-right">
            <BrowserRouter forceRefresh={true}><Link to="/account" className="over dropdown-item"><button className="dropdown-item white-words pl-4" type="button">Account</button></Link>   </BrowserRouter>
            <BrowserRouter forceRefresh={true}><Link to="/" className="over dropdown-item"><button className="dropdown-item white-words border-on-top" type="button">Log Out</button></Link>   </BrowserRouter>
            </div>
          </div>
        </li>  
      </ul> 
    
  </nav>
</div>
);
  }
}

export default withRouter(YourLibraryNavbar);