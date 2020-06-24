//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import Header from "@/Components/WelcomeRelated/Header"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Header Container test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Header/> ); 
  });


  it("Should have an image tag", ()=>{
   const image= wrapper.find("img");
    expect(image).toHaveLength(1);
  })
  
  it("Should have two divs", ()=>{
    const divNumber= wrapper.find("div");
    expect(divNumber).toHaveLength(3);
  })

})