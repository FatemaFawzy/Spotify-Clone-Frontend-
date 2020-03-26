import React ,{ Component} from 'react';
import './SignUp.css';
// import './signUpValidation.js';

class SignUp extends Component{
  constructor(props){
    super(props);

    this.state= {
      email: null,
      confirmEmail: null,
      password: null,
      username: null,
      day: null,
      month: null,
      year: null,
      gender: null,
      accountType: null,
      errorMessages: {
        email: "",
        confirmEmail: "",
        password: "",
        userame: "",
        day: "",
        month: "",
        year: "",
        gender: "",
        accountType: ""
      }
    };
  }

// Check the validity of the form based on whether all error messages are empty or not
  formValidity = errorMessages => {
    let valid = true;

    Object.values(errorMessages).forEach(value => {
      if( value != null && value.length > 0) {
        valid = false;
      }
    });

    return valid;
  };

  handleSubmit =e => {
    e.preventDefault();

    if (this.formValidity(this.state)) {
      document.getElementById("signup-form").submit();
      console.log(` 
        submitting email: ${this.state.email}
        submitting confirmEmail: ${this.state.confirmEmail}
        submitting password: ${this.state.password}
      `);
    }
    else {
      console.log("ERROR");
    }

  };

  handleChange =e => {
    e.preventDefault();
    const { name, value }= e.target;
    let errorMessages= { ...this.state.errorMessages };

    console.log("name",name);
    console.log("value",value);
    switch (name) {
      case "password":
        // errorMessages.password= value.length===0 ? "Please enter your password." : "";
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
      default:
        break;
    }

    this.setState({ errorMessages, [name]: value}, () => console.log(this.state) );
  };

  render() {
    const { errorMessages } = this.state;
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
              name= "email" className="form-control input-field" type="email" placeholder="Email" onChange={this.handleChange}/> 
              <p id="empty-email" className="empty-input"> {errorMessages.email}</p>

              <input name= "confirmEmail" className="form-control input-field" type="email" placeholder="Confirm Email" onChange={this.handleChange}/> 
              <p id="empty-confirm-email" className="empty-input"> {errorMessages.confirmEmail}</p>

              <input name="password" className="form-control input-field" type="Password" placeholder="Password" onChange={this.handleChange}/> 
              <p id="empty-password" className="empty-input"> {errorMessages.password} </p>

              <input name="username" className="form-control input-field" type="text" placeholder="What should we call you?" onChange={this.handleChange}/> 
              <p id="empty-userame" className="empty-input pb-2"> {errorMessages.userame}</p>
                  
              <div className="form-group">

                <label htmlFor="birth-date"> Date of birth </label>
                <div className="row" id="birth-date">

                  <div className="col-3">
                    <input name="day" className=" form-control birth-date-signup" type="number" placeholder="Day" max="31" min="1" maxLength="2" onChange={this.handleChange}/>
                  </div>

                  <div className="col-6">
                    <select name="month" className="form-control birth-date-signup dropdown" onChange={this.handleChange}> 
                      <option value=""> Month </option>
                      <option value="January"> January </option>
                      <option value="February"> February </option>
                      <option value="March"> March </option>
                      <option value="April"> April </option>
                      <option value="May"> May </option>
                      <option value="June"> June </option>
                      <option value="July"> July </option>
                      <option value="August"> August </option>
                      <option value="September"> September </option>
                      <option value="October"> October </option>
                      <option value="November"> November </option>
                      <option value="December"> December </option>
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
                    <input name="gender" type="radio" value="male" onChange={this.handleChange}/> Male   
                    <input name="gender" type="radio" value="female" className="ml-3" onChange={this.handleChange}/> Female
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

export default SignUp;

// Form validation made with the help of the video from
// https://www.youtube.com/watch?v=4CeTFW4agRw