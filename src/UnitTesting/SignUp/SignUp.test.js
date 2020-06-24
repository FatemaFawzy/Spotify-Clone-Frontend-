import React from 'react';
import {SignUp} from '@/Containers/SignUp/SignUp';
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

describe("handleChange", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<SignUp/>);

  })
 
  it('Should adjust error message if: email is empty', () => {
    const email= wrapper.find("input#email-input");
    const event = {
      preventDefault() {},
      target: { name: 'email', value: ''}
    } 
    email.simulate('change', event);
    expect(wrapper.state().errorMessages.email).toContain("Please enter your email.");
  })

  it('Should adjust error message if: email is wrong', () => {
    const email= wrapper.find("input#email-input");
    const event = {
      preventDefault() {},
      target: { name: 'email', value: 'fatema@yahoo'}
    } 
    email.simulate('change', event);
    expect(wrapper.state().errorMessages.email).toContain("The email address you entered is invalid.");
  })

  it('Should adjust error message if: email is correct', () => {
    const email= wrapper.find("input#email-input");
    const event = {
      preventDefault() {},
      target: { name: 'email', value: 'fatema@yahoo.com'}
    } 
    email.simulate('change', event);
    expect(wrapper.state().errorMessages.email).toContain("");
  })

})

// //-----------------------------------------------------------------------------------------------

// describe("handleSubmit", () => {
//   let wrapper;
  
//   beforeEach(() => {
//     wrapper = shallow(<SignUp/>);

//   })
 
//   it('Should submit the form if it is valid', () => {
//     const instance= wrapper.instance();
//     instance.handleValidity()= true;
//     wrapper.find("button#signup-button").simulate('click');
//   })

// })