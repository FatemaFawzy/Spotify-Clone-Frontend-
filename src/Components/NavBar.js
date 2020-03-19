import React, { Component } from "react";
// import DropDownLogin from './DropDownLogin'
import "./NavBar.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";


function NavBar(props)  {
    
            return(
    <section>
      <nav className="navbar navbar-expand-lg navbar-dark NavbarBack " >
        <div className="container overflow-auto">
              <a href="#" className="navbar-brand LogoTop" > <i className="fab fa-spotify"></i> Spotify </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse navContent " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-end  ">
                        <li className="nav-item ">
                          <Link to="./account" className="nav-link " > Web Player </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link " > Premium </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link " > Help </Link>
                        </li>
                        <li>
                            <img className="userImg" alt="Profile" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2617592195136976&height=300&width=300&ext=1586597311&hash=AeT69G6iOgUxz6VW" />
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile
                        </a>
                    
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Account</a>
                        <a class="dropdown-item" href="#">Sign out</a>
                        </div>
    
                     </li>
                </ul>
              </div>
          </div>    
      </nav>
</section>
        )
    }


export default NavBar 