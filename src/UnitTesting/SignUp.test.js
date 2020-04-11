import React from 'react';
import {SignUp} from '../Containers/SignUp/SignUp';
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("[UNIT] Testing the SignUp component rendering", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<SignUp/>)
  })
 
  it('displays the header of the page', () => {
    expect(wrapper.find("h2").at(1).text()).toContain("Sign up with your email address")    
  })

})

//-----------------------------------------------------------------------------------------------

describe("testing formValidity", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUp/>);
    
  })
 
  it('should return true if no error messages are available', () => {
    const instance= wrapper.instance();
    wrapper.setState({errorMessages: {
      email: "",
      password: "",
      username: "",
      day: "",
      month: "",
      year: "",
      gender: "",
      accountType: "",
    }});
    const valid=instance.formValidity();
    expect(valid).toBe(true);   
  })

  it('should return false if user tried submitting the form without entering any inputs', () => {
    const instance= wrapper.instance();
    wrapper.setState({errorMessages: {
      email: " ",
      password: " ",
      username: " ",
      day: " ",
      month: " ",
      year: " ",
      gender: " ",
      accountType: " ",
    }});
    const valid=instance.formValidity();
    expect(valid).toBe(false);   
  })

  it('should return false if any error message is present', () => {
    const instance= wrapper.instance();
    wrapper.setState({errorMessages: {
      email: "",
      password: "",
      username: "What should we call you?",
      day: "",
      month: "",
      year: "",
      gender: "Please select your gender.",
      accountType: "What type of account do you like?",
    }});
    const valid=instance.formValidity();
    expect(valid).toBe(false);   
  })
})

// --------------------------------------------------------------------------------------------

// describe("handleChange", () => {
//   let wrapper;
  
//   beforeEach(() => {
//     wrapper = shallow(<SignUp/>);
//     const instance= wrapper.instance();

//   })
 
//   it('Should change the email error message according to the input', () => {
//     const email= wrapper.find("input.email");
//     email.value= "";
//     instance.hangleChange()   
//   })

// })

// //-----------------------------------------------------------------------------------------------

// describe("handleSubmit", () => {
//   let wrapper;
  
//   beforeEach(() => {
//     wrapper = shallow(<SignUp/>);
//     const instance= wrapper.instance();

//   })
 
//   it('Should submit the form if it is valid', () => {
//     instance.handleValidity()= true;
   
//   })

// })