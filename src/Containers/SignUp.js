import React ,{ Component} from 'react';
import './SignUp.css';
// import './signUpValidation.js';

class SignUp extends Component{
  constructor(props){
    super(props) 
    this.state= {
      email: null,
      confirmEmail: null,
      password: null,
      username: null,
      day: null,
      month: "Month",
      year: null,
      gender: null,
      accountType: null,
      errorMessages: {
        email: "test",
        confirmEmail: "test",
        password: "test",
        userame: "test",
        day: "test",
        month: "test",
        year: "test",
        gender: "test",
        accountType: "test"
      }
    }
  };

// Check the validity of the form based on whether all error messages are empty or not
  formValidity = errorMessages => {
    let valid = true;
    for (var i=0; i < errorMessages.length; i++)
    {
      if (errorMessages[i].value.length > 0)
      valid = false;
    }

    return valid;
  };

  handleSubmit =e => {
    e.preventDefault();

    if (this.formValidity(this.state.errorMessages)) {
      console.log(` submitting password: ${this.state.password}`);
    }
    else {
      console.log("ERROR");
    }

  };

  handleChange =e => {
    e.preventDefault();
    const { id, value }= e.target;
    let errorMessages= this.state.errorMessages;

    switch (id) {
      case "password":
        errorMessages.password= value.length < 6 && value.length >0 ? "Your password is too short" : "";
        break;
    }

    console.log("test");
    this.setState({ errorMessages, [id]: value});
  };

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

{/* <form  id="signup-form" action ="#" method ="post"> */}
{/* I removed 'required' from inputs */}

            <form  id="signup-form" >

              <input 
              id= "email" className="form-control input-field" type="email" placeholder="Email" onChange={this.handleChange}/> 
              <p id="empty-email" className="empty-input"> {this.state.errorMessages.email}</p>

              <input id= "confirm-email" className="form-control input-field" type="email" placeholder="Confirm Email" onChange={this.handleChange}/> 
              <p id="empty-confirm-email" className="empty-input"> {this.state.errorMessages.confirmEmail}</p>

              <input id="password" className="form-control input-field" type="Password" placeholder="Password" onChange={this.handleChange}/> 
              <p id="empty-password" className="empty-input"> {this.state.errorMessages.password} </p>

              <input id="username" className="form-control input-field" type="text" placeholder="What should we call you?" onChange={this.handleChange}/> 
              <p id="empty-userame" className="empty-input pb-2"> {this.state.errorMessages.userame}</p>
                  
              <div className="form-group">

                <label htmlFor="birth-date"> Date of birth </label>
                <div className="row" id="birth-date">

                  <div className="col-3">
                    <input id="day" className=" form-control birth-date-signup" type="number" placeholder="Day" max="31" min="1" maxLength="2"/>
                  </div>

                  <div className="col-6">
                    <select id="month" className="form-control birth-date-signup dropdown"> 
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
                    <input id="year" className="form-control birth-date-signup" type="number" placeholder="Year" max="1999" min="1900" maxLength="4"/>
                  </div>

                </div>
              </div>

              <p id="empty-day" className="empty-input"> {this.state.errorMessages.day}</p>
              <p id="empty-month" className="empty-input"> {this.state.errorMessages.month}</p>
              <p id="empty-year" className="empty-input pb-2"> {this.state.errorMessages.year}</p>

              <div className="form-group">

                <label htmlFor="gender-options"> Gender</label>
                <div className="m-2" id="gender-options">
                    <input name="gender" type="radio" value="male" /> Male   
                    <input name="gender" type="radio" value="female" className="ml-3"/> Female
                </div>

              </div>
          
              <p id="empty-gender" className="empty-input pb-2"> {this.state.errorMessages.gender}</p>

              <div className="form-group">

                <label htmlFor="account-type">What kind of account do you like?</label>
                <div id="account-type">
                  <select className="form-control birth-date-signup dropdown" > 
                    <option value=""> Choose from here </option>
                    <option>Regular Account</option>
                    <option>Premium Account</option>
                    <option>Artist Account</option>
                  </select>
                </div>

                <p id="empty-account-type" className="empty-input pt-2"> {this.state.errorMessages.accountType}</p>

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

export default SignUp;

// Form validation made with the help of the video from
// https://www.youtube.com/watch?v=4CeTFW4agRw