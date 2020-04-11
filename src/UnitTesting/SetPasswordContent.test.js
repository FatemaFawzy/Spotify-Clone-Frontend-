//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {SetPasswordContent} from "../Components/UserAccountProfile/SetPassword/SetPasswordContent";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Set Password Content render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<SetPasswordContent /> ); 
  });


  it("Success message", ()=>{
    const contains=wrapper.find("p#success");
    expect(contains.text()).toContain("Your password has been changed.");
  })
  
  it("Should have 4 paragraphs", ()=>{
    const paragraphs=wrapper.find("p");
    expect(paragraphs).toHaveLength(4);
  })
  describe("Set Password Content validateCurrent function test", ()=>{

  it('Current password input Empty check', () => {
    const wrapper = shallow(<SetPasswordContent />);
    wrapper.setState({current:''});
    const button = wrapper.find('button.button-green');
    button.simulate('click');
    const message=wrapper.find('p#missing-current')
    expect(message.text()).toContain("Enter your current password.");
  })
  describe("Set Password Content handleCurrent function test", ()=>{
    it('Current password handle on change check', () => {
      const input = wrapper.find('input#newPassword-input1');
      const event ={
        preventDefault(){},
        target: {value:'123456'}
      };
      input.simulate('change',event);
     expect(wrapper.state().current).toEqual('123456');
    });

  describe("Set Password Content validateNew function test", ()=>{

  it('New password input Empty check', () => {
    const wrapper = shallow(<SetPasswordContent />);
    wrapper.setState({ newPasswordError:''});
    const button = wrapper.find('button.button-green');
    button.simulate('click');
    const message=wrapper.find('p#missing-new')
    expect(message.text()).toContain("Enter your new password.");
  })

  describe("Set Password Content handleNew function test", ()=>{
    it('New password handle on change check', () => {
      const input = wrapper.find('input#newPassword-input2');
      const event ={
        preventDefault(){},
        target: {value:'1234567'}
      };
      input.simulate('change',event);
     expect(wrapper.state().newPassword).toEqual('1234567');
    });

})
})
})
})
})