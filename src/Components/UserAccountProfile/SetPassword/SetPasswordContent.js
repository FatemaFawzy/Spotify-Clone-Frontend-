import React,{Component} from "react";
import './SetPasswordContent.css';
import {Link, Router } from "react-router-dom";
import {connect} from "react-redux";
import {BASEURL,BASEURL2} from "../../../Constants/baseURL";



const initialState = {
    /**Current password input
   * @memberof SetPasswordContent
   * @type {String}
   */
  current: "",
   /**Current password error message
   * @memberof SetPasswordContent
   * @type {String}
   */
  currentError: "",
   /**New password input
   * @memberof SetPasswordContent
   * @type {String}
   */
  newPassword: "",
   /**New password error message
   * @memberof SetPasswordContent
   * @type {String}
   */
  newPasswordError:"",
}
/** Class SetPasswordContent
 * @extends Component
 */
export class SetPasswordContent extends Component{
  constructor(props){
    super(props);
 this.state = initialState;
  }
/**A function that checks Current Password's validation
  * @memberof SetPasswordContent
  * @func validateCurrent
  */
  validateCurrent = () => {
    let current = this.state.current;
    let currentError="";
    let proceedemail=true;
    if (current.length === 0)
     {
       currentError = "Enter your current password.";
       this.setState({currentError});
       if (document.querySelector("#newPassword-input1"))
       {
       document.querySelector("#newPassword-input1").classList.add("red-border");
       }
       proceedemail = false;
     }
     else {
      currentError = "";
      this.setState({current, currentError});
      if (document.querySelector("#newPassword-input1"))
      {
      document.querySelector("#newPassword-input1").classList.remove("red-border");
      }
      proceedemail = true;
      }
      return proceedemail;
   }
  
   /**A function that checks New Password's validation
  * @memberof SetPasswordContent
  * @func validateNew
  */
   validateNew = () => {
    let newPassword = this.state.newPassword;
    let newPasswordError="";
    let proceedpassword=true;
    if (newPassword.length === 0)
     {
       newPasswordError = "Enter your new password.";
       this.setState({newPasswordError});
       if (document.querySelector("#newPassword-input2"))
       {
       document.querySelector("#newPassword-input2").classList.add("red-border");
       }
       proceedpassword = false;
     }
     else {
      newPasswordError = "";
      this.setState({newPassword, newPasswordError});
      if (document.querySelector("#newPassword-input2"))
      {
      document.querySelector("#newPassword-input2").classList.remove("red-border");
      }
      proceedpassword = true;
      }
      return proceedpassword;
   }
  
  
  
  /**A function that handles Current Password input change
  * @memberof SetPasswordContent
  * @func handleCurrent
  */
   handleCurrent = event => {
    let current = this.state.current;
    current = event.target.value;
    this.state.current = current;
    this.validateCurrent();
    
  
  };

  /**A function that handles New Password input change
  * @memberof SetPasswordContent
  * @func handleNew
  */
  handleNew = event => {
    let pass = this.state.newPassword;
    pass = event.target.value;
    this.state.newPassword = pass;
    this.validateNew();
    
  
  };

  /**A function that handles forms submission
  * @memberof SetPasswordContent
  * @func clickSubmit
  */
  clickSubmit = event => {
    if(event)
    {
    event.preventDefault();
    }
    let current = this.state.current;
    let currentError = this.state.currentError;
    // event.preventDefault();
    // console.log(email.length);
    this.validateCurrent();
    this.validateNew();
    if (this.validateCurrent() && this.validateNew())
    {
      const {current,newPassword}=this.state;

        /**Prerequisites for fetch request
   * @memberof SetPasswordContent
   * @type {String}
   */
      const requestOptions = {
          method:"GET",
          headers:{'Content-Type':  'application/json','x-auth':'x-auth'},
          
        }

      /**url for fetch request
   * @memberof SetPasswordContent
   * @type {String}
   */
        const url = BASEURL2 + "user/password"; 
        fetch(url,requestOptions)
          .then((response) => {
            return response.text();
          })
          .then((data) => {
           console.log(data);
           console.log(this.state.current);
           console.log(data);
          
           if(data == this.state.current){
            const requestOptions2 = {
              method:"POST",
              headers:{'Content-Type':  'application/json','x-auth':'x-auth'},
              
            }
            
          /**url for fetch request
       * @memberof SetPasswordContent
       * @type {String}
       */
            const url2 = BASEURL2 + "user/changepassword"; 
            fetch(url2,requestOptions2)
              .then((response) => {
                return response.text();
              })
              .then((data) => {
               console.log(data);
               console.log(this.state.current);
               if(data.message == "password changed successfully"){
                document.querySelector("#success").classList.remove("d-none");
    
                
               }
              })
              .catch((error)=>{
                console.log(error);
              })

           }
           else{
             this.setState({currentError:"You've entered an incorrect password."});
             document.querySelector("#success").classList.add("d-none");
           }
          })
          .catch((error)=>{
            console.log(error);
          })
    }
  };

render() {
  return (

      <div className="SetPasswordContent">
          
        <div className="container" >
          <h1 className="header">Set device Password</h1>
          <p>To use Spotify on your devices, you need to set a separate password and log in with the username provided.</p>
        </div>

        <div className="container" id="container2">
          <form>

            <div className="form-group">
              <label for="newPassword-input1">Enter your current password:</label>
              <input type="password" className="form-control" id="newPassword-input1" onChange={this.handleCurrent}/>
              <p  id="missing-current">{this.state.currentError}</p>
            </div>

            <div className="form-group">
              <label for="newPassword-input2">Enter your new password:</label>
              <input type="password" className="form-control" id="newPassword-input2" onChange={this.handleNew}/>
              <p  id="missing-new">{this.state.newPasswordError}</p>
            </div>

            <button onClick={this.clickSubmit} type="submit" className="button-green btn btn-success">Submit</button>

          </form>
        </div>

        <p id="success" className="d-none">Your password has been changed.</p>

      </div>

);
  }
  }

  const mapStateToProps = state => {

    return {
      userToken : state.userToken
      //now you have access to the userToken as this.props.userToken inside the class component.
    };
  
  };
  
export default connect(mapStateToProps)(SetPasswordContent);