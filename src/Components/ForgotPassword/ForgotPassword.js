import React, { Component } from "react";
import "./ForgotPassword.css";
import Header from  "../WelcomeRelated/Header";
import Footer from "../WelcomeRelated/Footer";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import {Link} from "react-router-dom";

const initialState = {
  email: "",
  emailError: ""
}
const emailFormat = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

class ForgotPassword extends Component {
  constructor(props){
    super(props);
 this.state = initialState;
  }

 validate = () => {
   let inp = this.state.email;
   let emailError="";
   let proceed=true;
   if (inp.length === 0)
   {
     emailError = "This field is required.";
     this.setState({emailError});
     proceed = false;
   }
   else {
   emailError = "";
   this.setState({inp, emailError});
   proceed = true;
   }
   return proceed;
 };

 handleChange = event => {
  let inp = this.state.email;
  inp = event.target.value;
  this.state.email = inp;
  this.validate();


};

 clickSubmit = event => {
  let email = this.state.email;
  let emailError = this.state.emailError;
  this.setState({emailError});
  event.preventDefault();
  // console.log(email.length);
  if (!emailFormat.test(email) && email.length !== 0)
  {
   emailError = "The email address you entered is invalid.";
   this.setState({emailError});
  }
  else if(this.validate()){
     this.setState({initialState});
    //  console.log(email.length);
     var clr= document.querySelector("#action-form");
     clr.reset();
     this.props.history.push('/logIn/forgotpassword/newpassword');
    
  }

 };

render(){
return(
  <div className="forgot-password">
    <Header />
    <div className="container">
      <h1 className="text-center"><strong>Password Reset</strong></h1>
      <p className="text-center" style={{fontWeight:"500"}} id="paragraph">Enter your <strong>Spotify email address</strong> that you used to register. We'll send you an email with your username and a link to reset your password.</p>
      <form method="POST" id="action-form" noValidate action="/logIn/forgotpassword/success">
        <div  className= "d-flex justify-content-start pad" id="labelling"><label htmlFor="my-text" className="mb-1"><strong>Email address</strong></label></div>
        <div className= "d-flex justify-content-center"><input type="email" name="email" required className="mb-3 mt-0 pt-1 pb-1" id="my-text" onChange={this.handleChange}/></div>
        <div className="justify-content-start red pad" id="empty-input">{this.state.emailError}</div>
        <div className="d-flex justify-content-center"><Link to="/logIn/forgotpassword/success" className="button-spacing d-flex justify-content-center"><button className="btn btn-success px-5 py-2 mt-4 padded" id="anchor" role="button" type="submit" onClick={this.clickSubmit}>SEND</button></Link></div>
      </form>
    </div>
    <Footer />
  </div>

);
}
}
export default ForgotPassword;