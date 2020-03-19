import React ,{ Component} from 'react';
import {Link } from "react-router-dom";
import './welcomePage.css';
import Bottom from "./Components/Bottom"


class welcomePage extends Component{
	render() 
	{
		return(
		<div>
			<section className="Navbar ">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ground" >
        <div className="container overflow-auto">
              <Link to="#" className="navbar-brand LogoTop" > <i className="fab fa-spotify"></i> Spotify </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse navContent " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-end  ">
                        <li className="nav-item ">
                          <a href="./account" className="nav-link linksHover" > Web Player </a>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link linksHover " > Premium </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link linksHover" > Help </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link linksHover" > Sign up </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link linksHover" > Log in </Link>
                        </li>
                </ul>
              </div>
          </div>    
      </nav>
</section>
			<div className="container">
				<div className="row">
	    			<div className="col-lg-12 text-center back ">
	     		   		<h1 className=" title "> Music For Everyone </h1>
	      		   		<h3> Millions of songs. No credit card needed.</h3>
	      		   		<Link to="#" className="btn btn-success rounded-pill pl-4 pr-4"> Get Spotify Free</Link>
	   				</div>
	 			</div>
			</div>

      <div>
        <Bottom/>
      </div>

    </div>
		)
	}
}
export default welcomePage