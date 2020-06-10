import React, { Component } from "react";
import "./ForgotPassword.css";
import Header from  "../WelcomeRelated/Header";
import Footer from "../WelcomeRelated/Footer";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import {BASEURL,BASEURL} from "../../Constants/baseURL";

const initialState = {
  /**Input string for the email
   * @memberof ForgotPassword
   * @type {string}
   */
  email: "",
   /**Error message for wrong input
   * @memberof ForgotPassword
   * @type {string}
   */
  emailError: ""
}
/**Email format that must be entered by the user
 * @memberof ForgotPassword
 * @type {expression}
 */
const emailFormat = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
/** Class ForgotPassword to get an email from the user to send the instructions of resetting the password
 * @group ForgotPassword
 * @extends Component
 */
export class ForgotPassword extends Component {
  constructor(props){
    super(props);
 this.state = initialState;
  }
 /**A function that validates user input(must be an email)
   * @memberof ForgotPassword
   * @func validate
   */
 validate = () => {
   let inp = this.state.email;
   let emailError="";
   let proceed=true;
   if (inp.length === 0)
   {
     console.log("inp length");
     console.log(inp.length);
    emailError = "This field is required.";
    this.setState({emailError});
    if (document.querySelector("#my-text"))
    {
    document.querySelector("#my-text").classList.add("red-border");
    }
    proceed = false;
   }
   else 
   {
    emailError = "";
    this.setState({inp, emailError});
    if (document.querySelector("#my-text"))
    {
    document.querySelector("#my-text").classList.remove("red-border");
    }
    proceed = true;
   }
   return proceed;
  };
 /**A function that reflects changes in input to the state of the class
   * @memberof ForgotPassword
   * @func handleChange
   */
  handleChange = event => {
    let inp = this.state.email;
    inp = event.target.value;
    this.state.email = inp;
    this.validate();
  };
 /**A function that handles form submission and implements the fetch request to send the instructions on the provided email
   * @memberof ForgotPassword
   * @func clickSubmit
   */
  clickSubmit = event => {
    if (event)
    {
    event.preventDefault();
    }
    let email = this.state.email;
    let emailError = this.state.emailError;
    this.setState({emailError});
    if (!emailFormat.test(email) && email.length !== 0)
    {
      console.log("in if");
      console.log(email);
      console.log(this.validate());
      if (document.querySelector("#my-text"))
      {
      document.querySelector("#my-text").classList.add("red-border");
      }
      emailError = "The email address you entered is invalid.";
      this.setState({emailError});
    }
    else if(this.validate())
    {
      // console.log("yaaaaaaaaaaaaaaaaaaaaaaay");
      this.setState({initialState});
     const {email}=this.state;
     if (document.querySelector("#my-text"))
      {
      document.querySelector("#my-text").classList.remove("red-border");
      }
   /**Prerequisites for fetch request
   * @memberof ForgotPassword
   * @type {object}
   */
      const requestOptions = {
        method:"GET"
      }
   /**URL for fetch request
   * @memberof ForgotPassword
   * @type {string}
   */
      var url =BASEURL+'user/email'; 
      fetch(url,requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.email);
          console.log(this.state.email);
          if (data.email == this.state.email)
          {
            console.log(data);
            this.props.history.push('/logIn/forgotpassword/newpassword/');
          }
          else
          {
           this.setState({emailError:"The email you entered does not exist in the Spotify server."});
          }
        })
        .catch((error)=>{
          console.log(error);
        })
console.log(this.state.emailError);
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
        <div className= "d-flex justify-content-center"><input type="email" name="email" required className="mb-3 mt-0 pt-1 pb-1" id="my-text" onChange={this.handleChange} /></div>
        <div className="justify-content-start red pad" id="empty-input">{this.state.emailError}</div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-success px-5 py-2 mt-4 padded" id="anchor" role="button" type="submit" onClick={this.clickSubmit}>
              SEND
            </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>

);
}
}
export default ForgotPassword;