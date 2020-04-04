import React, { Component } from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import { goBackward, goForward } from "../../HelperFunctions/History";
import * as History from "../../HelperFunctions/History";



export class YourLibraryNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
      image:"",
      name:"",
      type:"",
      moreButtonName:""
    }
  }
  // toggleArrow = () => {
  //   document.querySelector("#arrow").classList.toggle("fa-caret-up")
  //   document.querySelector("#arrow").classList.toggle("fa-caret-down");
  //   console.log(document.querySelector("#arrow").classList);
  // } 
render(){
  return (
<div className="your-library-nav">
  <nav className="navbar navbar-nav navbar-expand navbar-dark nav-bgblack navbar-default no-gutters d-flex" id="main-nav"   >   
    <div>
      <ul className="navbar-nav mr-auto justify-content-start">
        <li className="nav-item pl-3">
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
            <button
            id="more-button" type="button" className={this.props.type == "Playlists" ? "btn dropdown-toggle words" : "btn dropdown-toggle words grey-box"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.moreButtonName}
            </button>
            <div className="dropdown-menu" id="width">
            <NavLink to="/webplayer/yourlibrary/artist" className="dropdown-item">
              <button className={this.props.type == "Artists" ? "dropdown-item white-words pl-2 item-click blue-words" : "dropdown-item white-words pl-2 item-click"} type="button">
                Artists
              </button>
            </NavLink>
            <NavLink to="/webplayer/yourlibrary/album" className="dropdown-item">
              <button className={this.props.type == "Albums" ? "dropdown-item white-words pl-2 item-click blue-words" : "dropdown-item white-words pl-2 item-click"} type="button">
                Albums
              </button>
            </NavLink>
            </div>
          </div>
        </li> 
        </ul>
    </div>
      <ul className="navbar-nav ml-auto d-flex d-none col-md-2 col-lg-3 col-xl-2" id="button-selector">
        <li>
          <div className="over btn-group mr-4 " id="right-drop-down"  >
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