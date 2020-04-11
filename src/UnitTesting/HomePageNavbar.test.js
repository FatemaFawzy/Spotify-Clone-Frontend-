//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import { HomePageNavbar } from "../Components/HomePage/HomePageNavbar";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Home Page Navbar test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<HomePageNavbar /> ); 
  });


  it("Upgrade button", ()=>{
    const button=wrapper.find("button");
    expect(button.text()).toContain("UPGRADE");
  })
  
  it("Should have 1 Link", ()=>{
    const Links=wrapper.find("Link");
    expect(Links).toHaveLength(1);
  })

  
})