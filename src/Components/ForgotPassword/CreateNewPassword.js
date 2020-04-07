import React, { Component } from "react";
import "./CreateNewPassword.css";
import Header from  "../WelcomeRelated/Header";
import Footer from "../WelcomeRelated/Footer";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import {Link} from "react-router-dom";

const initialState = {
  newPassword: "",
  newPasswordError: ""
}
class CreateNewPassword extends Component {
  constructor(props){
  super(props);
  this.state = initialState;
  }

 validate = () => {
   let inp = this.state.newPassword;
   let newPasswordError="";
   let proceed=true;
   if (inp.length === 0)
   {
     newPasswordError = "This field is required.";
     document.querySelector("#my-text").classList.add("red-border");
     this.setState({newPasswordError});
     proceed = false;
   }
   else if (inp.length < 6) {
    newPasswordError = "Password is too short";
    document.querySelector("#my-text").classList.add("red-border");
    this.setState({newPasswordError});
    proceed = false;
   }
   else {
   newPasswordError = "";
   document.querySelector("#my-text").classList.remove("red-border");
   this.setState({inp, newPasswordError});
   proceed = true;
   }
   return proceed;
 };

 handleChange = event => {
  let inp = this.state.newPassword;
  inp = event.target.value;
  this.state.newPassword = inp;
  this.validate();

};

 clickSubmit = event => {
  let newPassword = this.state.newPassword;
  event.preventDefault();
  if(this.validate()){
     this.setState({initialState});
     var clr= document.querySelector("#action-form");
     clr.reset();
     this.props.history.push('/logIn/forgotpassword/newpassword/passwordisnew');

  //   const requestOptions = {
  //     method: "PATCH",
  //     headers: {'Content-Type':  'application/json'},
  //     body: JSON.stringify({ newPassword: this.state.newPassword})
  //   };
  //   const url = window.location.href; 
  //   fetch(url,requestOptions)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.message == "Password has been reset successfully")
  //       {
  //        this.props.history.push('/logIn/forgotpassword/newpassword/passwordisnew');
  //       }
  //       else if (data.message == "Reset Failed")
  //       {
  //          newPasswordError = "Failed to reset password.";
  //       }
  //     })
  //     .catch((error)=>{
  //       console.log(error);
  //     })
    
   }

 };

render(){
return(
  <div className="create-new-password">
    <Header />
    <div className="container">
      <h1 className="text-center"><strong>Password Reset</strong></h1>
      <form method="POST" id="action-form" noValidate action="/logIn/forgotpassword/success">
        <div  className= "d-flex justify-content-start pad" id="labelling"><label htmlFor="my-text" className="mb-1"><strong>New Password</strong></label></div>
        <div className= "d-flex justify-content-center"><input type="password" name="newPassword" required className="mb-3 mt-0 pt-1 pb-1" id="my-text" onChange={this.handleChange}/></div>
        <div className="justify-content-start red pad" id="empty-input">{this.state.newPasswordError}</div>
        <div className="d-flex justify-content-center"><Link to="/logIn/forgotpassword/success" className="button-spacing d-flex justify-content-center"><button className="btn btn-success px-5 py-2 mt-4 padded" id="anchor" role="button" type="submit" onClick={this.clickSubmit}>SEND</button></Link></div>
      </form>
    </div>
    <Footer />
  </div>

);
}
}
export default CreateNewPassword;