//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ForgotPassword} from "../../Components/ForgotPassword/ForgotPassword";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Forgot Password Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  let instance;
  beforeEach(() => {
   wrapper = shallow(<ForgotPassword/> ); 
   instance = wrapper.instance();
  });


  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have one h1 tag", ()=>{
    const header = wrapper.find("h1.text-center");
    expect(header).toHaveLength(1);
  })

  it("Should include 1 form", ()=>{
    const form = wrapper.find("form");
    expect(form).toHaveLength(1);
  })

})
describe("Forgot Password input validation test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  let instance;
  beforeEach(() => {
   wrapper = shallow(<ForgotPassword/> ); 
   instance = wrapper.instance();
  });

  it("Should detect an empty input", ()=>{
    wrapper = shallow(<ForgotPassword /> ); 
    wrapper.setState({email:''})
    const button = wrapper.find("button");
    button.simulate('click');
    const error = wrapper.find("div#empty-input");
    expect(error.text()).toContain("This field is required");
  })

  it("Should be an email in a specific format", ()=>{
    wrapper = shallow(<ForgotPassword /> ); 
    wrapper.setState({email:'mariam'})
    const button = wrapper.find("button");
    button.simulate('click');
    const error = wrapper.find("div#empty-input");
    expect(error.text()).toContain("The email address you entered is invalid.");
  })

})

describe("Forgot Password input change test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  let instance;
  beforeEach(() => {
   wrapper = shallow(<ForgotPassword/> ); 
   instance = wrapper.instance();
  });

  it("Should handle change in input field", ()=>{
    const input = wrapper.find("input");
    const event = {
      preventDefault() {},
      target: { value: '123' }
    };
    input.simulate("change", event)
    expect(wrapper.state().email).toEqual("123");
  })
})