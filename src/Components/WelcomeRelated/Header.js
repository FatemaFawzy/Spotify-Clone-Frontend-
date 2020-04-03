import React from "react";
import "./Header.css";
import spotify from "../../assets/yarab.png";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";

const Header=()=>(
<div className="header">
  <nav className="navbar navbar-dark black-background d-flex align-items-end" id="top-nav">
    <div className="pl-md-5 pb-1 pt-0" >
      <Link to="/">
        <a className="navbar-brand" href="#">
          <img src={spotify} id="spotify"/>
        </a>
      </Link>
    </div>
  </nav>
</div>
);
export default Header;