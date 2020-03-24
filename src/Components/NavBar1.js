import React, { Component } from "react";
import './NavBar1.css'
import {Link } from "react-router-dom";


function NavBar1 ()  {
    return(
<section className="nav-bar1">

<nav className="navbar navbar-expand-md navbar-dark ground " >
  
  <div className="container ">
        <Link to="/" className="navbar-brand logo-top" > <i className="fab fa-spotify"></i> Spotify </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto justify-content-end  ">
                  <li className="nav-item ">
                    <a href="/account" className="nav-link " > Web Player </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/premium" className="nav-link  " > Premium </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/help" className="nav-link " > Help </Link>
                  </li>
                  <li className="nav-item hidden-sm">
                    <span className= "navbar-text pt-2 h3 font-weight-light mx-4"> | </span>
                  </li>
                  <li className="nav-item">
                      <Link to="/signup" className="nav-link " > Sign up </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/logIn" className="nav-link " > Log in </Link>
                  </li>
          </ul>
        </div>
    </div>    
</nav>
</section>
    )
}


export default NavBar1