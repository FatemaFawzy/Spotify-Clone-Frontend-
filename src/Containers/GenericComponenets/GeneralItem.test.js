//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {GeneralItem} from "./GeneralItem";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("GeneralItem Container test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<GeneralItem name="testName"/> ); 
  });


  it("Should have a round image if the passed prop roundimage is true", ()=>{
    wrapper.setProps({roundimage:true})
    expect(wrapper.find("img.i-am-round-img-general"))
  })

})