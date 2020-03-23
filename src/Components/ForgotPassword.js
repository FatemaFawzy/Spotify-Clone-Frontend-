import React, { Component } from "react";
import "./ForgotPassword.css";
import Header from  "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";


class ForgotPassword extends Component {

	render(){

		return(
			<div className="ForgotPassword">
                
			<Header />
	
			<div className="container">
				<h1 className="text-center"><strong>Password Reset</strong></h1>
	
				<p className="text-center" style={{fontWeight:"500"}} id="paragraph">Enter your <strong>Spotify username</strong>, or the <strong>email address</strong> that you used to register. We'll send you an email with your username and a link to reset your password.</p>
	
				<form method="POST">
					<div  className= "d-flex justify-content-start pad" id="labelling"><label for="my-text" className="mb-1"><strong>Email address or username</strong></label></div>
					<div className= "d-flex justify-content-center"><input type="email" name="Email" required className="mb-3 mt-0 pt-1 pb-1" id="my-text"/></div>
					<div className="d-none justify-content-start red pad" id="empty-input"><p>This field is required.</p></div>
					<div className="d-flex justify-content-center"><Link to="/logIn/forgotpassword/success" className="button-spacing d-flex justify-content-center"><a className="btn btn-success px-5 py-2 mt-4 padded" id="anchor" role="button">SEND</a></Link></div>
				</form>
			</div>
	
	
		<nav className="navbar navbar-dark black-background navbar-default navbar-expand black" id="bottom-nav">
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
                            <a  href="#" className="bottom-right" id="Egypt">Egypt (English) <img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/24/Egypt-Flag-icon.png"/></a>
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
	}
}

	 
 



export default ForgotPassword;