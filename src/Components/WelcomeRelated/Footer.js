import React from "react";
import "./Footer.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";


/** Footer as a functional component that appears in several welcome related pages.
 * @func Footer
 */
const Footer=()=>(
  <div className="footer">
    <nav className="navbar navbar-dark black-background navbar-default navbar-expand black" id="bottom-nav">
      <div className="container">

        <div className="col-lg-6 align-items-end pt-4 pl-0">
          <ul className=" nav navbar-nav mt-2 mt-lg-0">
            <div className="nav-item">
              <Link to="/help" id="no-underline"><span className="nav-link">Help</span></Link>
            </div>
            <div className="nav-item">
              <Link to="/login" id="no-underline"><span className="nav-link">Login</span></Link>
            </div>
            <div className="nav-item">
              <Link to="/signup" id="no-underline"><span className="nav-link">SignUp</span></Link>
            </div>
          </ul>
        </div>

        <div className="col-lg-6">
          <div className="row ">
            <div className="col-12 d-flex  justify-content-end pb-1">
              <div className="nav-item">
                <span  className="bottom-right" id="egypt">Egypt (English) <img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/24/Egypt-Flag-icon.png"/></span>
              </div>
            </div>
            <div className="col-12 d-flex  justify-content-end pt-2">
              <div className="nav-item">
                <p className="bottom-right">© 2020 Spotify AB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
export default Footer;