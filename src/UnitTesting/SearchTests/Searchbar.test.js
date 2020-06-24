//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow,mount, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import Searchbar from "@/Components/SearchComponents/Searchbar";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Searchbar test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Searchbar/> ); 
  });



  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES


  it("Should have an input tag with class name search-search-box", ()=>{
    const inputTag= wrapper.find("input.search-search-box");
    expect(inputTag).toHaveLength(1);
  })

  it("Should have a collapse dropDown", ()=>{
    const colapsedropDown= wrapper.find("CollapseDropDown");
    expect(colapsedropDown).toHaveLength(1);
  })

  it("Should have a button with class cancelx-invisible if isXvisible is false", ()=>{
    wrapper.setProps({isXvisible:false})
    const xbutton= wrapper.find("button.cancelx-invisible");
    expect(xbutton).toHaveLength(1);
  })

})