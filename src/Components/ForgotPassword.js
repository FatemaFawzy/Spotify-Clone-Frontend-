import React, { Component } from "react";
import "./ForgotPassword.css";
import Header from  "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";

class ForgotPassword extends Component {
render(){
return(
  <div className="forgot-password">
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
    <Footer />
  </div>
);
}
}
export default ForgotPassword;