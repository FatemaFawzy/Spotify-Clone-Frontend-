//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import HelpPage from "@/Components/HelpPage/HelpPage"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("HelpPage Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<HelpPage/> ); 
  });



  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES

  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should reder the wrpper div correctly", ()=>{
    const wrapperdiv= wrapper.find("div.help-class");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should reder the first block correctly", ()=>{
    const wrapperdiv= wrapper.find("div.help-header");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should reder the second block correctly", ()=>{
    const wrapperdiv= wrapper.find("div.front-nav");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should reder the third block correctly", ()=>{
    const wrapperdiv= wrapper.find("div.visit-com-help");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should reder the fourth block correctly", ()=>{
    const wrapperdiv= wrapper.find("div.features-how-use");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should reder the fifth block correctly", ()=>{
    const wrapperdiv= wrapper.find("div.carousel-exist");
    expect(wrapperdiv).toHaveLength(1);
  })
  it("Should reder the sixth block correctly", ()=>{
    const wrapperdiv= wrapper.find("div.get-spotify-sugg");
    expect(wrapperdiv).toHaveLength(1);
  })


})