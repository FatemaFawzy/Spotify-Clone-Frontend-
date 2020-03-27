import React from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter as Router} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

const YourLibraryNavbar=()=>(
<div className="your-library-nav">
  <nav className="navbar navbar-expand navbar-dark nav-bgblack navbar-default pb-4 no-gutters" id="main-nav">
    <div className="row" id="main-row">
      <div className="col-8 d-flex justify-content-start">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link icons"><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icons"><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
        </li>
        <li className="nav-item">
          <NavLink to="/webplayer/yourlibrary"><a className="nav-link words">Playlists</a></NavLink>
        </li>
        <li className="nav-item d-none d-lg-inline">
          <NavLink to="/webplayer/yourlibrary/artist"><a className="nav-link words">Artists</a></NavLink>
        </li>
        <li className="nav-item d-none d-lg-inline">     
        <NavLink to="/webplayer/yourlibrary/album"><a className="nav-link words">Albums</a></NavLink>
        </li>
        <li className="nav-item dropdown d-inline d-lg-none">
          <div className="btn-group">
            <button  id="more-button" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </button>
            <div className="dropdown-menu dropdown-menu-right">
            <NavLink to="/webplayer/yourlibrary/artist"><button className="dropdown-item" type="button">Artists</button></NavLink>
            <NavLink to="/webplayer/yourlibrary/album"> <button className="dropdown-item" type="button">Albums</button></NavLink>
            </div>
          </div>
        </li> 
        </ul>
        </div>
        <div className="col-4">
        <ul>
        <li className="nav-item d-flex justify-content-end">
          <div className="btn-group">
            <button  id="user-button" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="account-button">
              <img  className="image" src="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" alt="User"/>
              <p className="d-none d-xl-inline name">Mariam El Baz <i className="fas fa-sort-down"></i></p>
            </div>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">Account</button>
              
              <button className="dropdown-item" type="button">Log Out</button>
            </div>
          </div>
        </li>  
      </ul>
      </div>
    </div>
  </nav>
</div>
);
export default YourLibraryNavbar;