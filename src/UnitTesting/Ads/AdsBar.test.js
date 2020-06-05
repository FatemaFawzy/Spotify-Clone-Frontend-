//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import AdsBar from "../../Components/Ads/AdsBar";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("AdsBar Component test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AdsBar/> ); 
  });


  it("Should have a wrapping div", ()=>{
    expect(wrapper.find("div.ads-bar-class"))
  })
  it("Should have a link to upgrade to premium", ()=>{
    expect(wrapper.find("Link.upgrade-to-premium"))
  })

})