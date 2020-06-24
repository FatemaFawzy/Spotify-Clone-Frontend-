//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {TopResultItem} from "@/Components/SearchComponents/TopResultItem";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("TopResultItem test", ()=>{


  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES

  it("Should test that the wrapper div renders correctly ", ()=>{
    const wrapper = shallow(<TopResultItem/> ); 
    expect(wrapper.find("div.top-item-searched-class")).toHaveLength(1);
  })

  it("Should test to see if the image is round if the passed type is artist and the image is not round otherwise  ", 
  ()=>{
    const wrapper = shallow(<TopResultItem type={"ARTIST"}/> ); 
    expect(wrapper.find("img#i-am-top-and-round-img")).toHaveLength(1);
    wrapper.setProps({type:"SONG"})
    expect(wrapper.find("img#i-am-top-and-not-round")).toHaveLength(1);
  })


})