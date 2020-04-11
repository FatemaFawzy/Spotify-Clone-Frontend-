//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {YourLibraryArtist} from "../Containers/YourLibraryPages/YourLibraryArtist"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Your Library-Artist Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<YourLibraryArtist/> ); 
  });


  it("Should have an artists header", ()=>{
    const header= wrapper.find("h1.artist-header");
    expect(header.text()).toContain("Artists");
  })
})