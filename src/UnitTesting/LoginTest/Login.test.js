//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {Login} from "../../Containers/Login/Login";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("Login Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Login /> ); 
  });

  
  it("Should have 1 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(1);
  })
  
  it("Should have 2 inputs", ()=>{
    const inputs=wrapper.find("input");
    expect(inputs).toHaveLength(2);
  })
})

  describe("Login ValidateEmail function test", ()=>{
  
  it('invalid email check', () => {
    let wrapper;
    wrapper = shallow(<Login /> );
    wrapper.setState({email:'abc'});
    const button = wrapper.find('button#login-button');
    button.simulate('click');
    const message=wrapper.find('p#missing-email')
    expect(message.text()).toContain("The email address is invalid.");
  });

  it('Email input Empty check', () => {
    let wrapper;
    wrapper = shallow(<Login /> );
    wrapper.setState({email:''});
    const button = wrapper.find('button#login-button');
    button.simulate('click');
    const message=wrapper.find('p#missing-email')
    expect(message.text()).toContain("Please enter your Spotify username or email address.");
  });
 
})
  describe("Login handleEmail function test", ()=>{
    it('Email handle on change check', () => {
      let wrapper;
      wrapper = shallow(<Login /> );
      const input = wrapper.find('input#email-input');
      const event ={
        preventDefault(){},
        target: {value:'abc@gmail.com'}
      };
      input.simulate('change',event);
     expect(wrapper.state().email).toContain("abc@gmail.com");
    });
})
  
  describe("Login ValidatePassword function test", ()=>{

  it('Password input Empty check', () => {
    let wrapper;
    wrapper = shallow(<Login /> );
    wrapper.setState({password:''});
    const button = wrapper.find('button#login-button');
    button.simulate('click');
    const message=wrapper.find('p#missing-password')
    expect(message.text()).toContain("Please enter your password.");
  });

})

  describe("Login handlePassword function test", ()=>{
    it('Password handle on change check', () => {
      let wrapper;
      wrapper = shallow(<Login /> );
      const input = wrapper.find('input#password-input');
      const event ={
        preventDefault(){},
        target: {value:'123456'}
      };
      input.simulate('change',event);
     expect(wrapper.state().password).toEqual('123456');
    });
   
    
  

  

})
