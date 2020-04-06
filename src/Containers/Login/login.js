import React ,{ Component} from 'react';
import './login.css';
import {Link, Router } from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";

const initialState = {
  email: "",
  emailError: "",
  password: "",
  passwordError:"",
  incorrectData:""
}

const emailFormat = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
class login extends Component{
  constructor(props){
    super(props);
 this.state = initialState;
  }


 validateEmail = () => {
  let email = this.state.email;
  let emailError="";
  let proceedemail=true;
  if (email.length === 0)
   {
     emailError = "Please enter your Spotify username or email address.";
     this.setState({emailError});
     document.querySelector("#email-input").classList.add("red-border");
     proceedemail = false;
   }
   else {
    emailError = "";
    this.setState({email, emailError});
    document.querySelector("#email-input").classList.remove("red-border");
    proceedemail = true;
    }
    return proceedemail;
 }

 validatePassword = () => {
  let password = this.state.password;
  let passwordError="";
  let proceedpassword=true;
  if (password.length === 0)
   {
     passwordError = "Please enter your password.";
     this.setState({passwordError});
     document.querySelector("#password-input").classList.add("red-border");
     proceedpassword = false;
   }
   else {
    passwordError = "";
    this.setState({password, passwordError});
    document.querySelector("#password-input").classList.remove("red-border");
    proceedpassword = true;
    }
    return proceedpassword;
 }




 handleEmail = event => {
  let email = this.state.email;
  email = event.target.value;
  this.state.email = email;
  this.validateEmail();
  

};
handlePassword = event => {
  let pass = this.state.password;
  pass = event.target.value;
  this.state.password = pass;
  this.validatePassword();
  

};

 clickSubmit = event => {
  let incorrect = this.state.incorrectData
  let email = this.state.email;
  let emailError = this.state.emailError;
  let password = this.state.password;
  event.preventDefault();
  // console.log(email.length);
  this.validateEmail();
  this.validatePassword();
  if(!emailFormat.test(email) && email.length !== 0)
  {
    emailError="The email address is invalid."
    document.querySelector("#email-input").classList.add("red-border");
    this.setState({emailError})
  }
  else if(this.validateEmail() && this.validatePassword()){
     this.setState({initialState});
    //  console.log(email.length);
     var clr= document.querySelector("#login-form");
     clr.reset();
     let returnedData={
      id: 1,
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk"
    }
      this.props.onSignIn(returnedData.token);
      // this.props.history.push('/account/');
    //  const requestOptions = {
    //     method:"POST",
    //  }
    //   var url = 'http://52.14.190.202:8000/api/users/login?email='+this.state.email+'&password='+this.state.password ; 
    //   fetch(url,requestOptions)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       if (data == "Successful login")
    //       {
    //         this.props.history.push('/account/');
    //       }
    //       else if (data == "Either email or passwrod is incorrect")
    //       {
    //         document.querySelector(".incorrect").classList.remove("d-none");
    //         incorrect = "Incorrect username or password.";
    //       }
    //       // else if (data == "Please go to your inbox and click the link to activate your Email.")
    //       // {
    //       //   document.querySelector(".incorrect").classList.remove("d-none");
    //       //  this.state.incorrectData = "Please go to your inbox and click the link to activate your Email."; 
    //       // }
    //     })
    //     .catch((error)=>{
    //       console.log(error);
    //     })
  }


 };

render() {
 return (
   
  <div className="login">
    <div id="logo"></div>

    <div className="container">

      <p className="first-line">To continue, log in to Spotify.</p>
      <p className="incorrect d-none">{this.state.incorrectData}</p>
      <a id="facebook-button"  className=" buttons btn btn-block btn-facebook" href="#" role="button"><i className="fab fa-facebook logo" aria-hidden="true"></i>  Continue With Facebook</a>

        <div className="horizontal">
          <span className="horizontal-span" >
           OR
          </span>
        </div>

        <form id="login-form">

          <div className="form-group">
            <input type="text" className="form-control " id="email-input" aria-describedby="emailHelp"  placeholder="Email adrress or username" onChange={this.handleEmail} name="email" />
            <p  id="missing-email">{this.state.emailError}</p>           
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
    onSignIn : (userToken) => dispatch ({type: actionTypes.ON_SIGNIN, payload: { token: userToken} }),
  };
};

export default connect(null, mapDispatchToProps)(login);