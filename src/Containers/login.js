import React ,{ Component} from 'react';
import './login.css';
import {Link, Router } from "react-router-dom";


class login extends Component{
render() {
  return (
<div className="login">
      <div id="logo"> 
            
            </div>
            
          
            <div className="container">
                <p style={{textAlign: "center", fontWeight: "800",fontSize: "15px"}}>To continue, log in to Spotify.</p>
               <a id="FacebookButton"  className=" ButtonS btn btn-block btn-facebook" href="#" role="button"><i className="fab fa-facebook logo" aria-hidden="true"></i>  Continue With Facebook</a>
       
               <div style={{width: "450px",height: "20px", borderBottom: "1px solid lightgray", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "10px", marginBottom: "20px"}}>
                   <span style={{fontSize: "12px" ,fontWeight: "700", backgroundColor: "white", padding:"0 20px", verticalAlign: "-webkit-baseline-middle"}} >
                     OR
                   </span>
               </div>
       
               <form>
                   <div className="form-group">
                     <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderRadius: "0%", boxShadow: "none"}} placeholder="Email adrress or username" />
                     <p className="d-none" id="MissingEmail">Please enter your Spotify username or email address.</p>           
                   </div>
                   <div className="form-group">
                    <input type="password" className="form-control " id="exampleInputPassword1" style={{borderRadius: "0%", outlineWwidth: "0", outline: "black", boxShadow: "none"}} placeholder="Password" />
                    <p className="d-none" id="MissingPassword">Please enter your password.</p>
                   </div>
                   <div className="form-group form-check">
                       <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="customCheck1" style={{boxShadow: "none"}} checked/>
                           <label className="custom-control-label" for="customCheck1" >Remember me</label>
                           <button id="LOGINButton" type="submit" className="ButtonS btn btn-success">LOG IN</button>
                     </div>
                   </div>
                  
               </form>
                
               <br/>
              
               <Link to="/logIn/forgotpassword" className="PasswordForgot" >Forgot your password?</Link> 
              
               
               <br/>
              <hr style={{width: "450px", paddingLeft: "15px", paddingRight: "15px", paddingBottom: "10px", paddingTop: "15px"}}/>
       
              <h4 className="DontHaveAccount">Don't have an account?</h4>
              <a id="SignupButton" className="ButtonS btn btn-block btn-apple" href="/signup" role="button">Sign up for spotify</a>
              
              <br/>
       
              <hr style={{width: "450px"}}/>
              
              <p id="TermsAndCondition">If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's <a href="#" className="GreenWords">Terms & Conditions</a> and <a href="#" className="GreenWords">Privacy Policy</a>.</p>

            </div>
       
    </div>
  );
}
} 

export default login;