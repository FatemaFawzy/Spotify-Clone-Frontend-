//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {PasswordIsNew} from "@/Components/ForgotPassword/PasswordIsNew";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Password Is New Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<PasswordIsNew/> ); 
  });


  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have one h1 tag", ()=>{
    const header= wrapper.find("h1.text-center");
    expect(header).toHaveLength(1);
  })

  it("Should have a paragraph tag with specific content", ()=>{
    const paragraph= wrapper.find("p.text-center");
    expect(paragraph.text()).toContain("Your password has been successfully reset.");
  })

})