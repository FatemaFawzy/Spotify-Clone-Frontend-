//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ComponentBlock} from "../../Components/HomePageComponents/ComponentBlock";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Component Block test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ComponentBlock /> ); 
  });


  it("Should have 1 header", ()=>{
    const header=wrapper.find("h1");
    expect(header).toHaveLength(1);
  })
  
  it("Should have 1 paragraphs", ()=>{
    const paragraphs=wrapper.find("p");
    expect(paragraphs).toHaveLength(1);
  })

})