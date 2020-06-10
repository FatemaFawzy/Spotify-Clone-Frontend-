//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ArtistNavbar, ArtistSideBar} from "../../Containers/ArtistAccount/ArtistSidebar";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Artist Sidebar Render test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ArtistSideBar/> ); 
  });


  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have 4 list items", ()=>{
    const div= wrapper.find("li");
    expect(div).toHaveLength(4);
  })

  it("Should have 1 hr tag", ()=>{
    const div= wrapper.find("hr");
    expect(div).toHaveLength(1);
  })

  
  it("Should have 1 ul tag", ()=>{
    const div= wrapper.find("ul");
    expect(div).toHaveLength(1);
  })

})
