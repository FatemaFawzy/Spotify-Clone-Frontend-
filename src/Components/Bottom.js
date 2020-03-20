import React, { Component } from "react";
import "./Bottom.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

function Bottom() {
		return(
			<footer class="BottomBar page-footer pt-4 ">
			  <div class=" container text-center text-md-left">
				<div class="row">
				  	<div class="col-md-4 mt-md-0 mt-3">
					  <a href="/" class="logo"> <i class="fab fa-spotify"></i> Spotify </a>
				  	</div>
				  {/* <hr class="clearfix w-100 d-md-none pb-3"> */}

				<div class="col-md-5 mb-md-0 mb-3">
					<h5 class="titleBottom">Useful Links</h5>
					<ul class="list-unstyled">
					  <li>
						<a href="/help" className="linksHover"> Help </a>
					  </li>
					  <li>
						<a href="/account" className="linksHover"> Web Player</a>
					  </li>
					</ul>
				</div>

				 	<div className="col-md-3 ">
					 	<a href="#"> <i className="fab fa-facebook logo "></i> </a>
				
				 	</div>
			  </div> 
			</div>
			  <div className=" col-md-9 language d-flex justify-content-end py-3">
				  Egypt (English)
			  <img src="https://masthead.scdn.co/065b62cfb94f49960e7c37413175e2bb/flags/eg.svg" alt="" className="imgSize"></img>
			  </div>
			</footer>
		)	
}
export default Bottom