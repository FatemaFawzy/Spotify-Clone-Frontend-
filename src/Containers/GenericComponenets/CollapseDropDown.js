import React, { Component } from 'react';
import './CollapseDropDown.css';
import { BrowserRouter, withRouter } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

class CollapseDropDown extends Component {
  toggle()
  {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active')
    var popup=document.getElementById('popup');
    popup.classList.toggle('active')
  }
  render() {
    return (
      <div className="Collapse-drop-down">
       <div className="home-drop">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-home" aria-hidden="true"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="no-underline" to="/webplayer/HomePage/"><a class="dropdown-item" href="#"><i className="fas fa-home"></i> Home</a></Link>
              <Link to="/webplayer/search/"><a class="dropdown-item" href="#"><i className="fas fa-search" aria-hidden="true"></i> Search</a></Link>
              <NavLink to="/webplayer/yourlibrary/"><a class="dropdown-item" href="#"><i className="fas fa-bookmark" aria-hidden="true"></i> Your library</a></NavLink>
              <Link to="/webplayer/HomePage/"><a onClick={this.toggle} class="dropdown-item" href="#"><i className="fas fa-plus-square" aria-hidden="true"></i> Create playlist</a></Link>
              <Link to="/webplayer/likedsongs"><a class="dropdown-item" href="#"><i className="fas fa-heart " aria-hidden="true"></i> Liked songs</a></Link>
              <Link to="/premium"><a class="dropdown-item" href="#">  <i class="fa fa-usd" aria-hidden="true"></i>  Upgrade</a></Link>

              </div>
        </div>
              
      </div>
    );
  }
}



export default CollapseDropDown;