//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {withRouter} from "react-router-dom";

//IMPORT THE COMPONENT YOU WANNA TEST
import {CreateNewPassword} from "../Components/ForgotPassword/CreateNewPassword";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Create New Password Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CreateNewPassword/> ); 
  });


  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have a form", ()=>{
    const form= wrapper.find("form");
    expect(form).toHaveLength(1);
  })

  it("Should have a button", ()=>{
    const button= wrapper.find("button.padded");
    expect(button).toHaveLength(1);
  })

})

describe("Create New Password input validation Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CreateNewPassword/> ); 
  });
  
  it("Should not be empty input", ()=>{
    wrapper.setState({newPassword:''})
    const button = wrapper.find("button");
    button.simulate('click');
    const error = wrapper.find("div#empty-input");
    expect(error.text()).toContain("This field is required.");
  })

  it("Should not be less than 6 characters", ()=>{
    wrapper.setState({newPassword:'123'})
    const button = wrapper.find("button");
    button.simulate('click');
    const error = wrapper.find("div#empty-input");
    expect(error.text()).toContain("Password is too short");
  })
})

describe("Create New Password handle change Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CreateNewPassword/> ); 
  });

  it("Should handle change in input field", ()=>{
    const input = wrapper.find("input");
    const event = {
      preventDefault() {},
      target: { value: '123' }
    };
    input.simulate("change", event)
    expect(wrapper.state().newPassword).toEqual("123");
  })
  
})

describe("Create New Password handle submit Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CreateNewPassword/> ); 
  });

  // it("Should redirect page after clicking submit with an acceptable password", ()=>{
  //   const { history } = withRouter(<CreateNewPassword/>)
  //   const input = wrapper.find("input");
  //   const event = {
  //     preventDefault() {},
  //     target: { value: '1234567' } //a correct form of a new password
  //   };
  //   input.simulate("change", event)
  //   const button = wrapper.find("button");
  //   button.simulate('click');
  //   expect(window.location.pathname).toEqual("/logIn/forgotpassword/newpassword/passwordisnew");
  // })

})
