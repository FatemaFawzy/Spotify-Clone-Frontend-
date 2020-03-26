import React from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";

const YourLibraryNavbar=()=>(
<div className="your-library-nav">
      <nav className="navbar navbar-expand-lg navbar-dark nav-bgblack navbar-default pb-4 no-gutters" id="main-nav">

        <a className="pl-3"><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        <a className="pl-3 pr-3 d-none d-lg-inline"><i className="fas fa-chevron-circle-right icon-color fa-2x pr-2"></i></a>
        <ul className="navbar-nav decrease-width">
          <li className="nav-item">
            <a className="nav-link ">Playlists</a>
          </li> 
          <li className="nav-item d-none d-lg-inline">
            <a className="nav-link">Artists</a>
          </li>
          <li className="nav-item d-none d-lg-inline">
            <a className="nav-link">Albums</a>
            </li>
        </ul>
        {/* <div className="container"> 
          <div className="dropdown"> 
              <button className="btn"
                      type="button" 
                      id="dropdownMenuButton" 
                      data-toggle="dropdown" 
                      aria-haspopup="true" 
                      aria-expanded="false"> 
                      More
                  
              </button>  
              <div className="dropdown-menu" 
                   aria-labelledby="dropdownMenuButton"> 
                  <a className="dropdown-item" href="#"> 
                   Artists
                </a> 
                <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"> 
                    Albums
                </a> 
              </div> 
          </div> 
          </div> */}


          <div className="dropdown"> 
              <button className="account-button"
                      type="button" 
                      id="dropdownMenuButton" 
                      data-toggle="dropdown" 
                      aria-haspopup="true" 
                      aria-expanded="false"> 
                      <img  className="image" src="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" alt="User"/>
              <p className="d-none d-xl-inline name">Mariam El Baz</p>
                  
              </button>  
              <div className="dropdown-menu" 
                   aria-labelledby="dropdownMenuButton"> 
                  <a className="dropdown-item" href="#"> 
                   Account
                </a> 
                <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"> 
                   Log Out
                </a> 
              </div> 
          </div> 
          
        {/* <li role="presentation"  className="dropdown d-inline">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <span className="decor">
              <div className="account-button">
              <img  className="image" src="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" alt="User"/>
              <p className="d-none d-xl-inline name">Mariam El Baz</p>
              </div>
            </span>
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Account</a></li>
            <div className="dropdown-divider"></div>
            <li><a href="#">Log Out</a></li>
          </ul>
        </li> */}

      </nav>

</div>
);
export default YourLibraryNavbar;