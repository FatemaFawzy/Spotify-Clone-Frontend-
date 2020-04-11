import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import EmailSent from "../../Containers/SignUp/EmailSent";


describe("Signup Email Sent render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EmailSent/> ); 
  });

  it("Should have a text", ()=>{
    expect(wrapper.find("h1").text()).toContain("Confirmation Email Sent!")  
  })


})