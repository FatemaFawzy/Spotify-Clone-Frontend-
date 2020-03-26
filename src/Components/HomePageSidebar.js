import React ,{ Component} from 'react';
import './HomePageSidebar.css';
import {Link, Router } from "react-router-dom";


class HomePageSidebar extends Component{
render() {
 return (

    <div className="wrapper">
      
      <div className="sidebar">
        
        <img className="logo"  src="https://i.ya-webdesign.com/images/itunes-logo-white-png-1.png" alt="logo"/>
        
          <ul>
              <li><a className="List" href="#"><i className="fas fa-home"></i>Home</a></li>
              <li><a className="List" href="#"><i className="fas fa-search" aria-hidden="true"></i>Search</a></li>
              <li><a className="List" href="#"><i className="fas fa-bookmark" aria-hidden="true"></i>Your library</a></li>
              <p id="Playlist">Playlists</p>
              <li><a className="List2" href="#"><i className="fas fa-plus-square fa-2x" aria-hidden="true"></i>Create Playlist</a></li>
              <li><a className="List2" href="#"><i className="fas fa-heart fa-2x" aria-hidden="true"></i>Liked Songs</a></li>
              <hr/>
              <div id="my-playlist" className="my-playlists">
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
              </div>
          </ul> 
      </div>
    
    </div>

);
}
} 

export default HomePageSidebar;