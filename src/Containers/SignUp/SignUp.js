import React ,{ Component} from 'react';
import './SignUp.css';
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";
import {BASEURL} from "../../Constants/baseURL";

  /**Function to test whether the email is in the correct form or not
   * @memberof SignUp
   * @func emailFormat
   */
const emailFormat = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

/** Class SignUp
 * @category SignUp
 * @extends Component
 */
export class SignUp extends Component{
  constructor(props){
    super(props);

    this.state= {
       /**state member (email)
       * @memberof SignUp
       * @type {string}
       */ 
      email: null,
       /**state member (password)
       * @memberof SignUp
       * @type {string}
       */ 
      password: null,
       /**state member (username)
       * @memberof SignUp
       * @type {string}
       */ 
      username: null,
       /**state member (day)
       * @memberof SignUp
       * @type {string}
       */ 
      day: null,
       /**state member (month)
       * @memberof SignUp
       * @type {string}
       */ 
      month: null,
       /**state member (year)
       * @memberof SignUp
       * @type {string}
       */ 
      year: null,
       /**state member (gender)
       * @memberof SignUp
       * @type {string}
       */ 
      gender: null,
       /**state member (accountType)
       * @memberof SignUp
       * @type {string}
       */ 
      accountType: null,
       /**state member error message if the account already exists in the DB
       * @memberof SignUp
       * @type {string}
       */ 
      alreadyExists: "",
       /**object state error messages
       * @memberof SignUp
       * @type {Object}
       */  
      errorMessages: {
       /**state member of errorMessages (email)
       * @memberof SignUp
       * @type {string}
       */ 
        email: " ",
       /**state member of errorMessages (password)
       * @memberof SignUp
       * @type {string}
       */ 
        password: " ",
       /**state member of errorMessages (username)
       * @memberof SignUp
       * @type {string}
       */ 
        username: " ",
       /**state member of errorMessages (day)
       * @memberof SignUp
       * @type {string}
       */ 
        day: " ",
       /**state member of errorMessages (month)
       * @memberof SignUp
       * @type {string}
       */ 
        month: " ",
       /**state member of errorMessages (year)
       * @memberof SignUp
       * @type {string}
       */ 
        year: " ",
       /**state member of errorMessages (gender)
       * @memberof SignUp
       * @type {string}
       */ 
        gender: " ",
       /**state member of errorMessages (accountType)
       * @memberof SignUp
       * @type {string}
       */ 
        accountType: " ",
      }
    };
  }

    /**Function to test the validity of the form
   * @memberof SignUp
   * @func formValidity
   */
// Check the validity of the form based on whether all error messages are empty or not 
  formValidity = () => {
   /**variable for form validity
   * @memberof SignUp
   * @type {boolean}
   */
    let valid = true;
    

// if the user submitted the form without writing anything in the inputs, it won't get submitted
// because the initial length of the error messages = 1 (space)
// the space gets removed only when the correct input is entered (length=0)
    Object.values(this.state.errorMessages).forEach(val => {
      if (val !== null && val.length === 0 ) {
        valid = true;
      }
      else if ( val === null || val !== null && val.length > 0 ) {
        valid = false;
        console.log ("value is "+val +"length is" +val.length);
      }

    });

    return valid;
  };
    /**Function to check whether to submit the form or not
   * @memberof SignUp
   * @func handleSubmit
   */
  // submit only if the form is valid -> all inputs are entered and correct
  handleSubmit =e => {
    e.preventDefault();
    let errorMessages= { ...this.state.errorMessages };
    const {email,  password, username, day, month, year, gender, accountType} = this.state;
  /**variable for premium account type
   * @memberof SignUp
   * @type {boolean}
   */
    var isPremium= false;
    console.log(this.state);

    if( accountType=== "Premium Account") {
      isPremium= true;
    }
    if (this.formValidity(this.state)) {
   /**const url for request
   * @memberof SignUp
   * @type {String}
   */


      // const url = BASEURL+"users/signup";
      // console.log(url);
      // const requestOptions = {
      //   method: 'POST',  
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     userName : username,
      //     email: email,
      //     isPremium: false,
      //     password: password,
      //     day: day,
      //     month: month,
      //     year: year,
      //     gender: gender
      //   })
      //   }
      //   console.log(requestOptions)
      //   fetch(url, requestOptions)
      //   .then(response => response.text())
      //   .then(data => {
      //     console.log(data);
      //     if(data == "User added Successfully as inActive. Waiting for Email Confirmation "){
      //       this.props.history.replace("/signup/emailsent/");
      //     }
      //     else if(data == "UserName and/or email already exist"){
      //       // this.setState({alreadyExists: data}, () => console.log(this.state.alreadyExists) );
      //       var err= document.getElementsByClassName("already-exists");
      //       err[0].innerHTML= "UserName and/or email already exist";
      //       document.getElementById("signup-form").reset();
      //       window.location.reload(true);
      //     }
      //   })
      //   .catch((error)=> {console.log(error)});
      }



    // Check which inputs are empty and print an error message
    else {
      if ( email === null )
        errorMessages.email = "Please enter your email.";

        if ( password === null )
        errorMessages.password = "Please enter your password.";

        if ( username === null )
        errorMessages.username = "What should we call you?";  
        
        if ( day === null )
        errorMessages.day = "Please choose a day."; 

        if ( month === null )
        errorMessages.month = "Please choose a month."; 

        if ( year === null )
        errorMessages.year = "Please choose a year."; 

        if ( gender === null )
        errorMessages.gender = "Please select your gender."; 

        if ( accountType === null )
        errorMessages.accountType = "What type of account do you like?"; 
      
        this.setState( { errorMessages }, () => console.log(this.state) );
        console.log("ERROR");
    }

    // Check which input fields (except gender) have errors to give them a red border
    // pair: [name, value]
    Object.entries(errorMessages).forEach (pair => {
      if ( pair[1] != null && pair[0] != "gender" && pair[1].length > 1) {
      /**array of inputs to be given a style
       * @memberof SignUp
       * @type {Array<elements>}
       */
        var fieldToBeChanged = document.getElementsByName( pair[0] );
        fieldToBeChanged[0].style.borderColor= "#bd3200";
        console.log (pair);
      }
    });

  };

    /**Function to change error messages according to inputs
   * @memberof SignUp
   * @func handleChange
   */
  // Dynamic changes of error messages when the user types in the inputs
  handleChange =e => {
    // e.preventDefault();
      /**const name of the calling element
       * @memberof SignUp
       * @type {string}
       */    
       /**const value of the calling element
       * @memberof SignUp
       * @type {string}
       */    
    const { name, value }= e.target;
       /**object copy of state error messages
       * @memberof SignUp
       * @type {Object}
       */  
    let errorMessages= { ...this.state.errorMessages };  
    this.setState({ [name]: value}, () => console.log(this.state) );

    switch (name) {

      case "email":
        if ( value.length === 0 ) {
          errorMessages.email = "Please enter your email.";

        }
        else if ( !emailFormat.test(value) ) {
          errorMessages.email = "The email address you entered is invalid.";
        }
        else {
          errorMessages.email = "";
        }
        break;

      case "password":
        if ( value.length === 0 ) {
          errorMessages.password = "Please enter your password.";
        }
        else if (value.length < 6) {
          errorMessages.password = "The password you entered is too short.";
        }
        else {
          errorMessages.password = "";
        }
        break;
      
      case "username":
        if ( value.length === 0 ) {
          errorMessages.username = "What should we call you?";
        }
        else {
          errorMessages.username = "";
        }
        break;
      
      case "day":
        if ( value.length === 0 ) {
          errorMessages.day = "Please choose a day.";
        }
        else if ( value > 31 || value < 1 ) {
          errorMessages.day = "Please choose a valid day of the month.";
        }
        else {
          errorMessages.day = "";
        }
        break;

      case "month":
        if ( value.length === 0 ) {
          errorMessages.month = "Please choose a month.";
        }
        else {
          errorMessages.month = "";
        }
        break;

      case "year":
        if ( value.length === 0 ) {
          errorMessages.year = "Please choose a year.";
        }
        else if ( value > 2020 || value < 1990 ) {
          errorMessages.year = "Please choose a valid year (1990-2020).";
        }
        else {
          errorMessages.year = "";
        }
        break;

      case "gender":
        if ( value.length === 0 ) {
          errorMessages.gender = "Please select your gender.";
        }
        else {
          errorMessages.gender = "";
        }
        break;  

      case "accountType":
        if ( value.length === 0 ) {
          errorMessages.accountType = "What type of account do you like?";
        }
        else {
          errorMessages.accountType = "";
        }
        break;              

      default:
        break;
    }

    this.setState({ errorMessages}, () => console.log(this.state) );
    
    // Check which input fields (except gender) have errors to give them a red border
    // pair: [name, value]
    Object.entries(errorMessages).forEach (pair => {
      if ( pair[1] != null && pair[0] != "gender" && pair[1].length > 1) {
      /**array of inputs to be given a style
       * @memberof SignUp
       * @type {Array<elements>}
       */
        var fieldToBeChanged = document.getElementsByName( pair[0] );
        if(fieldToBeChanged[0]) {
        fieldToBeChanged[0].style.borderColor= "#bd3200";}
        // console.log (pair);
      }
      else if ( pair[1] != null && pair[0] != "gender" && pair[1].length === 0) {
        var fieldToBeChanged = document.getElementsByName( pair[0] );
        if(fieldToBeChanged[0]) {
        fieldToBeChanged[0].style.borderColor= "#ced4da";}
        // console.log (pair);
      }
    })
  };

  // ---------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------HTML Content----------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------

  render() {
    const { errorMessages } = this.state;
    return (
      <div className="signup-body">
          <div id= "logo" className="container-fluid border-bottom p-md-4 p-s-2">
            <a href="/" ></a> 
          </div>

          <div className="container text-left signup-box">
            <div>
              <h2 className="already-exists"> {this.state.alreadyExists} </h2>
              <h2 > Sign up with your email address </h2>
            </div>

{/* <form  id="signup-form" action ="#" method ="post"> */}
{/* I removed 'required' from inputs */}

            <form  id="signup-form" noValidate>

              <input 
              name= "email" id="email-input" className="form-control input-field" type="email" placeholder="Email" onChange={this.handleChange}/> 
              <p id="empty-email" className="empty-input"> {errorMessages.email}</p>

              <input name="password" className="form-control input-field" type="Password" placeholder="Password" onChange={this.handleChange}/> 
              <p id="empty-password" className="empty-input"> {errorMessages.password} </p>

              <input name="username" className="form-control input-field" type="text" placeholder="What should we call you?" onChange={this.handleChange}/> 
              <p id="empty-userame" className="empty-input pb-2"> {errorMessages.username}</p>
                  
              <div className="form-group">

                <label htmlFor="birth-date"> Date of birth </label>
                <div className="row" id="birth-date">

                  <div className="col-3">
                    <input name="day" className=" form-control birth-date-signup" type="number" placeholder="Day" max="31" min="1" maxLength="2" onChange={this.handleChange}/>
                  </div>

                  <div className="col-6">
                    <select name="month" className="form-control birth-date-signup dropdown" onChange={this.handleChange}> 
                      <option value=""> Month </option>
                      <option value="01"> January </option>
                      <option value="02"> February </option>
                      <option value="03"> March </option>
                      <option value="04"> April </option>
                      <option value="05"> May </option>
                      <option value="06"> June </option>
                      <option value="07"> July </option>
                      <option value="08"> August </option>
                      <option value="09"> September </option>
                      <option value="10"> October </option>
                      <option value="11"> November </option>
                      <option value="12"> December </option>
                    </select>
                  </div>

                  <div className="col-3 ">
                    <input name="year" className="form-control birth-date-signup" type="number" placeholder="Year" max="1999" min="1900" maxLength="4" onChange={this.handleChange}/>
                  </div>

                </div>
              </div>

              <p id="empty-day" className="empty-input"> {errorMessages.day}</p>
              <p id="empty-month" className="empty-input"> {errorMessages.month}</p>
              <p id="empty-year" className="empty-input pb-2"> {errorMessages.year}</p>

              <div className="form-group">

                <label htmlFor="gender-options"> Gender</label>
                <div className="m-2" id="gender-options">
                    <input name="gender" type="radio" value="M" onChange={this.handleChange}/> Male   
                    <input name="gender" type="radio" value="F" className="ml-3" onChange={this.handleChange}/> Female
                </div>

              </div>
          
              <p id="empty-gender" className="empty-input pb-2"> {errorMessages.gender}</p>

              <div className="form-group">

                <label htmlFor="account-type">What kind of account do you like?</label>
                <div >
                  <select className="form-control birth-date-signup dropdown" name="accountType" onChange={this.handleChange} > 
                    <option value=""> Choose from here </option>
                    <option value="Regular Account"> Regular Account</option>
                    <option value="Premium Account"> Premium Account</option>
                    <option value="Artist Account">Artist Account</option>
                  </select>
                </div>

                <p id="empty-account-type" className="empty-input pt-2"> {errorMessages.accountType}</p>

              </div>

              <button type="submit" id="signup-button" className="btn btn-success rounded-pill text-center d-flex justify-content-center" onClick={this.handleSubmit}>
              SIGN UP 
              </button>  

            </form>

            <p> Already have an account? <a href="/logIn"> Log in </a> </p>

          </div>

      </div>
    );
  }
} 
  /**Function for connecting the component with redux store
   * @memberof SignUp
   * @func mapDispatchToProps
   */
const mapDispatchToProps = dispatch => {
  return {
    onSignUp : (userID,userToken) => dispatch ({type: actionTypes.ON_SIGNUP, payload: {id: userID , token: userToken} }),
  };
};

export default connect(null,mapDispatchToProps)(SignUp);

// Form validation made with the help of the video from
// https://www.youtube.com/watch?v=4CeTFW4agRw