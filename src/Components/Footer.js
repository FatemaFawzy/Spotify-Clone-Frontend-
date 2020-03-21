import React from "react";
import "./Footer.css";
import {BrowserRouter as Router} from "react-router-dom";

const Footer=()=>(
    <div className="Footer">
  <nav className="navbar navbar-dark blackBackground navbar-default navbar-expand black" id="bottomNav">
        <div className="container">
    
            <div className="col-lg-6 align-items-end pt-4 pl-0">
                <ul className=" nav navbar-nav mt-2 mt-lg-0">
                    <div className="nav-item">
                    <a className="nav-link" href="#">Legal</a>
                    </div>
                    <div className="nav-item">
                    <a className="nav-link" href="#">Cookies</a>
                    </div>
                    <div className="nav-item">
                    <a className="nav-link" href="#">About Ads</a>
                    </div>
                </ul>
            </div>
    
            <div className="col-lg-6">
                <div className="row ">
                    <div className="col-12 d-flex  justify-content-end pb-1">
                        <div className="nav-item">
                            <a  href="#" className="bottomRight" id="Egypt">Egypt (English) <img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/24/Egypt-Flag-icon.png"/></a>
                            </div>
                    </div>
                    <div className="col-12 d-flex  justify-content-end pt-2">
                            <div className="nav-item">
                            <p className="bottomRight">© 2020 Spotify AB</p>
                            </div>
                    </div>
                </div>
            </div>
    
        </div>
    </nav>
  </div>
);
export default Footer 