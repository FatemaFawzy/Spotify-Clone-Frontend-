import React, { Component } from "react";
import "./ForgotPassword.css";
import Header from  "../WelcomeRelated/Header";
import Footer from "../WelcomeRelated/Footer";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import {Link} from "react-router-dom";

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
 * @category ForgotPassword
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
    let email = this.state.email;
    let emailError = this.state.emailError;
    this.setState({emailError});
    //event.preventDefault();
    if (!emailFormat.test(email) && email.length !== 0)
    {
      if (document.querySelector("#my-text"))
      {

      document.querySelector("#my-text").classList.add("red-border");
      
      }
      emailError = "The email address you entered is invalid.";
      this.setState({emailError});
    }
    else if(this.validate())
    {
      this.setState({initialState});
     const {email}=this.state;
     if (document.querySelector("#my-text"))
      {
      document.querySelector("#my-text").classList.remove("red-border");
      }
      const requestOptions = {
        method:"POST",
        headers: {'Content-Type':  'application/json'},
        body: JSON.stringify({ email: email })
      }
      console.log(requestOptions.body);
   /**URL for fetch request
   * @memberof ForgotPassword
   * @type {string}
   */
      var url = 'http://52.14.190.202:8000/users/forgot'; 
      fetch(url,requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.message === "Email Sent Successfully")
          {
            this.props.history.push('/logIn/forgotpassword/success');
          }
          else if (data.message == "Email Cannot be sent a problem while sending email")
          {
            this.state.emailError = "Your request cannot be performed. Please try again later.";
          }
          else if (data.message == "Email not found")
          {
           this.state.emailError = "The email you entered does not exist in the Spotify server."  
          }
        })
        .catch((error)=>{
          console.log(error);
        })

    }
  };

render(){
  // document.querySelector("#my-text").addEventListener("click", function(e){ e.key == 'enter'? document.querySelectpr("#anchor").click() : null});
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
        <div className="d-flex justify-content-center"><Link to="/logIn/forgotpassword/success" className="button-spacing d-flex justify-content-center"><button className="btn btn-success px-5 py-2 mt-4 padded" id="anchor" role="button" type="submit" onClick={this.clickSubmit}>SEND</button></Link></div>
      </form>
    </div>
    <Footer />
  </div>

);
}
}
export default ForgotPassword;