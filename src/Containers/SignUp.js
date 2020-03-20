import React ,{ Component} from 'react';
import './SignUp.css';
// import './signUpValidation.js';

class SignUp extends Component{
render() {
  return (
<div className="SignUpBody">
        <div id= "logo" className="container-fluid border-bottom p-md-4 p-xs-1">
        <a href="/" className="m-md-1 m-xs-4"></a> 
    </div>

    <div className="container text-left SignUpBox">
        <div>
            <h2 > Sign up with your email address </h2>
        </div>

        <form  id="signUpForm" action ="#" method ="post">
            
                <input id= "email" className="form-control input-field" type="email" placeholder="Email" required/> 
                <p id="emptyEmail" className="emptyInput"> </p>

                <input id= "confirmEmail" className="form-control input-field" type="email" placeholder="Confirm Email" required/> 
                <p id="emptyConfirmEmail" className="emptyInput"> </p>

                <input id="password" className="form-control input-field" type="Password" placeholder="Password" required/> 
                <p id="emptyPassword" className="emptyInput">  </p>

                <input id="userName" className="form-control input-field" type="text" placeholder="What should we call you?" required/> 
                <p id="emptyUserName" className="emptyInput"> </p>
                
                <div className="form-group">
                    <label for="birthDate"> Date of birth </label>
                        <div className="row" id="birthDate">

                            <div className="col-3">
                            <input id="day" className=" form-control birthDateSignUp" type="number" placeholder="Day" max="31" min="1" maxlength="2" required/>
                            </div>

                            <div className="col-6">
                                <select id="month" className="form-control birthDateSignUp dropdown" required> 
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
                            <input id="year" className="form-control birthDateSignUp" type="number" placeholder="Year" max="1999" min="1900" maxlength="4" required/>
                            </div>

                        </div>
                </div>
                    <p id="emptyDay" className="emptyInput"> </p>
                    <p id="emptyMonth" className="emptyInput"> </p>
                    <p id="emptyYear" className="emptyInput"> </p>

                <div className="form-group">
                    <label for="genderOptions"> Gender</label>
                    <div className="m-2" id="genderOptions">
                        <input name="gender" type="radio" value="male" required="required"/> Male   
                        <input name="gender" type="radio" value="female" class="ml-3"/> Female
                    </div>
                </div>
                    <p id="emptyGender" className="emptyInput"> </p>

                <div class="form-group">
                    <label for="accountType">What kind of account do you like?</label>
                    <div>
                                <select className="form-control birthDateSignUp dropdown" required> 
                                    <option value=""> Choose from here </option>
                                    <option>Regular Account</option>
                                    <option>Premium Account</option>
                                    <option>Artist Account</option>
                                </select>
                    </div>
                </div>

                <p> By clicking on Sign up, you agree to Spotify's <a href="#"> Terms and Conditions of Use</a>. </p>

                <button id="signUpButton" className="btn btn-success rounded-pill text-center d-flex justify-content-center" onclick="checkInput()" >
                SIGN UP 
                </button>  

        </form>

        <p> Already have an account? <a href="#"> Log in </a> </p>
    </div>

</div>
  );
}
} 

export default SignUp;