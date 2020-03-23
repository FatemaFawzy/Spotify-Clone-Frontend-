import React ,{ Component} from 'react';
import './login.css';
import {Link, Router } from "react-router-dom";


class login extends Component{
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
       
              <form>
                   
                    <div className="form-group">
                        <input type="text" className="form-control " id="email-input" aria-describedby="emailHelp"  placeholder="Email adrress or username" />
                        <p className="d-none" id="missing-email">Please enter your Spotify username or email address.</p>           
                    </div>
                   
                    <div className="form-group">
                        <input type="password" className="form-control " id="email-password"  placeholder="Password" />
                        <p className="d-none" id="missing-password">Please enter your password.</p>
                    </div>
                   
                    <div className="form-group form-check">
                       <div className="custom-control custom-checkbox">
                             <button id="login-button" type="submit" className="buttons btn btn-success">LOG IN</button>
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

export default login;