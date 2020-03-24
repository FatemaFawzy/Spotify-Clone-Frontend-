import React ,{ Component} from 'react';
import './SignUp.css';
// import './signUpValidation.js';

class SignUp extends Component{
  render() {
    return (
      <div className="signup-body">
          <div id= "logo" className="container-fluid border-bottom p-md-4 p-s-2">
            <a href="/" ></a> 
          </div>

          <div className="container text-left signup-box">
            <div>
              <h2 > Sign up with your email address </h2>
            </div>

            <form  id="signup-form" action ="#" method ="post">

              <input id= "email" className="form-control input-field" type="email" placeholder="Email" required/> 
              <p id="empty-email" className="emptyInput"> </p>

              <input id= "confirm-email" className="form-control input-field" type="email" placeholder="Confirm Email" required/> 
              <p id="empty-confirm-email" className="emptyInput"> </p>

              <input id="password" className="form-control input-field" type="Password" placeholder="Password" required/> 
              <p id="empty-password" className="emptyInput">  </p>

              <input id="username" className="form-control input-field" type="text" placeholder="What should we call you?" required/> 
              <p id="empty-userame" className="emptyInput"> </p>
                  
              <div className="form-group">

                <label for="birth-date"> Date of birth </label>
                <div className="row" id="birth-date">

                  <div className="col-3">
                    <input id="day" className=" form-control birth-date-signup" type="number" placeholder="Day" max="31" min="1" maxlength="2" required/>
                  </div>

                  <div className="col-6">
                    <select id="month" className="form-control birth-date-signup dropdown" required> 
                      <option value=""> Month </option>
                      <option> January </option>
                      <option> February </option>
                      <option> March </option>
                      <option> April </option>
                      <option> May </option>
                      <option> June </option>
                      <option> July </option>
                      <option> August </option>
                      <option> September </option>
                      <option> October </option>
                      <option> November </option>
                      <option> December </option>
                    </select>
                  </div>

                  <div className="col-3 ">
                    <input id="year" className="form-control birth-date-signup" type="number" placeholder="Year" max="1999" min="1900" maxlength="4" required/>
                  </div>

                </div>
              </div>

              <p id="empty-day" className="emptyInput"> </p>
              <p id="empty-month" className="emptyInput"> </p>
              <p id="empty-year" className="emptyInput"> </p>

              <div className="form-group">

                <label for="gender-options"> Gender</label>
                <div className="m-2" id="gender-options">
                    <input name="gender" type="radio" value="male" required="required"/> Male   
                    <input name="gender" type="radio" value="female" class="ml-3"/> Female
                </div>

              </div>
          
              <p id="empty-gender" className="empty-input"> </p>

              <div class="form-group">

                <label for="account-type">What kind of account do you like?</label>
                <div id="account-type">
                  <select className="form-control birth-date-signup dropdown" required> 
                    <option value=""> Choose from here </option>
                    <option>Regular Account</option>
                    <option>Premium Account</option>
                    <option>Artist Account</option>
                  </select>
                </div>

              </div>

              <button id="signup-button" className="btn btn-success rounded-pill text-center d-flex justify-content-center" onclick="checkInput()" >
              SIGN UP 
              </button>  

            </form>

            <p> Already have an account? <a href="/logIn"> Log in </a> </p>

          </div>

      </div>
    );
  }
} 

export default SignUp;