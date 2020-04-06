import React ,{ Component} from 'react';
import './login.css';
import {Link, Router } from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";

const initialState = {
  emailOrUsername: "",
  emailOrUsernameError: "",
  password: "",
  passwordError:""
}


class login extends Component{
  constructor(props){
    super(props);
 this.state = initialState;
  }

 validate = () => {
   let email = this.state.emailOrUsername;
   let password = this.state.password;
   let emailOrUsernameError="";
   let passwordError="";
   let proceed=true;
  if (email.length ===0 && password.length ===0)
  {
    emailOrUsernameError = "Please enter your Spotify username or email address.";
     passwordError = "Please enter your password.";
     this.setState({emailOrUsernameError, passwordError});
     document.querySelector("#email-input").classList.add("red-border");
     document.querySelector("#password-input").classList.add("red-border");
     proceed = false;
  }
   else if (email.length === 0)
   {

     passwordError="";
     emailOrUsernameError = "Please enter your Spotify username or email address.";
     this.setState({emailOrUsernameError , passwordError});
     document.querySelector("#email-input").classList.add("red-border");
     document.querySelector("#password-input").classList.remove("red-border");
     proceed = false;
   }
   else if (password.length === 0)
   {
     emailOrUsernameError="";
     passwordError = "Please enter your password.";
     this.setState({passwordError , emailOrUsernameError});
     document.querySelector("#email-input").classList.remove("red-border");
     document.querySelector("#password-input").classList.add("red-border");
     proceed = false;
   }
   else {
   emailOrUsernameError = "";
   passwordError = "";
   this.setState({email, emailOrUsernameError , password, passwordError});
   document.querySelector("#email-input").classList.remove("red-border");
   document.querySelector("#password-input").classList.remove("red-border");
   proceed = true;
   }
   return proceed;
 };

 handleEmail = event => {
  let email = this.state.emailOrUsername;
  email = event.target.value;
  this.state.emailOrUsername = email;
  this.validate();
  

};
handlePassword = event => {
  let pass = this.state.password;
  pass = event.target.value;
  this.state.password = pass;
  this.validate();
  

};

 clickSubmit = event => {
  let emailOrUsername = this.state.emailOrUsername;
  let password = this.state.password;
  event.preventDefault();
  // console.log(emailOrUsername.length);
  if(this.validate()){
     this.setState({initialState});
    //  console.log(emailOrUsername.length);
     var clr= document.querySelector("#login-form");
     clr.reset();
     let returnedData={
      id: 1,
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk"
    }
     this.props.onSignIn(returnedData.id,returnedData.token);
     this.props.history.push('/account/');
    
  }

 };

render() {
 return (
   
  <div className="login">
    <div id="logo"></div>

    <div className="container">

      <p className="first-line">To continue, log in to Spotify.</p>
      <a id="facebook-button"  className=" buttons btn btn-block btn-facebook" href="#" role="button"><i className="fab fa-facebook logo" aria-hidden="true"></i>  Continue With Facebook</a>

        <div className="horizontal">
          <span className="horizontal-span" >
           OR
          </span>
        </div>

        <form id="login-form">

          <div className="form-group">
            <input type="text" className="form-control " id="email-input" aria-describedby="emailHelp"  placeholder="Email adrress or username" onChange={this.handleEmail} name="emailOrUsername" />
            <p  id="missing-email">{this.state.emailOrUsernameError}</p>           
          </div>

          <div className="form-group">
            <input type="password" className="form-control " id="password-input"  placeholder="Password"  onChange={this.handlePassword} name="password" />
            <p  id="missing-password">{this.state.passwordError}</p>
          </div>

          <div className="form-group form-check">
            <div className="custom-control custom-checkbox">
              <button id="login-button" type="submit" className="buttons btn btn-success" onClick={this.clickSubmit}>LOG IN</button>
            </div>
          </div>

        </form>

        <br/>

        <Link to="/logIn/forgotpassword" className="password-forgot" >Forgot your password?</Link> 

        <br/>

        <hr className="horizontal-line-bottom1"/>

        <h4 className="dont-have-account">Don't have an account?</h4>
        <a id="signup-button" className="buttons btn btn-block btn-apple" href="/signup" role="button">Sign up for spotify</a>

        <br/>

        <hr className="horizontal-line-bottom2" />


    </div>

</div>
);
}
} 
const mapDispatchToProps = dispatch => {
  return {
    onSignIn : (userID,userToken) => dispatch ({type: actionTypes.ON_SIGNIN, payload: {id: userID , token: userToken} }),
  };
};

export default connect(null, mapDispatchToProps)(login);