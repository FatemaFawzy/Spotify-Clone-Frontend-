//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow,mount, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import AllSearchResults from "@/Components/SearchComponents/AllSearchResults";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("AllSearchResults test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AllSearchResults/> ); 
  });



  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES


  it("Should have an h2 tag mapping the passed type", ()=>{
    wrapper.setProps({type:"SONG",results:[{trackName:"Hello",artistName:"Adele",imagePath:"",_id:"123"}]})
    const h2tag= wrapper.find("h2").text();
    expect(h2tag).toContain("Songs");
  })

    it("Should have an h2 containg the search field value", ()=>{
    wrapper.setProps({searchfieldvalue:"Sia"})
    const h2tag= wrapper.find("h2").text();
    expect(h2tag).toContain("Sia");
  })

})