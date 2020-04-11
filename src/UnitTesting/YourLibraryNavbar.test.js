//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import { YourLibraryNavbar } from "../Components/YourLibraryComponents/YourLibraryNavbar";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Your Library Navbar Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<YourLibraryNavbar/> ); 
  });

  it("Should have one div with class drop-down", ()=>{
    const divDropDown= wrapper.find("div.drop-down");
    expect(divDropDown).toHaveLength(1);
  })

  it("Should have 4 button tags", ()=>{
    const button= wrapper.find("button");
    expect(button).toHaveLength(4);
  })

})