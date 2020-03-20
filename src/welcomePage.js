import React ,{ Component} from 'react';
import {Link } from "react-router-dom";
import './welcomePage.css';
import Bottom from "./Components/Bottom";
import NavBar1 from "./Components/NavBar1";


class welcomePage extends Component{
	render() 
	{
		return(
      <div>
      <NavBar1/>
		<div className="welcomePageBody">
			<div className="container">
				<div className="row">
	    			<div className="col-lg-12 text-center back ">
	     		   		<h1> Music For Everyone. </h1>
	      		   		<h3> Millions of songs. No credit card needed.</h3>
	      		   		<Link to="/signup" className="btn btn-success rounded-pill pl-4 pr-4"> Get Spotify Free</Link>
	   				</div>
	 			</div>
			</div>
      <div>
        <Bottom/>
      </div>

    </div>
    </div>
		)
	}
}
export default welcomePage