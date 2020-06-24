//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {BrowseItem} from "@/Components/SearchComponents/BrowseItem";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("BrowseItem Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<BrowseItem/> ); 
  });



  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES

  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have an image", ()=>{
    const image= wrapper.find("img");
    expect(image).toHaveLength(1);
  })

  //WHAT IF YOU WANNA PASS PROPS TO THE COMPONENT
  it("It should have a title with the text passed as a prop", ()=>{

    //THE FOLLOWING LINES PASSES THE DESIRED PROP TO THE COMPONENT
    wrapper.setProps({header:"Pop Genre"})

    //NOW THAT I HAVE PASSED THE PROP I EXPECT TO FIND THE POP GENRE TEXT IN THE COMPONENT
    const text= wrapper.find("Pop Genre");
    expect(text);
  })

  //IN THE FOLLOING TEST I WANNA TEST TO SEE IF A CERTAIN TAG HAS A SPECIFIC CLASS OR NOT
  //THE DIV TAG SHOULD HAVE CASS special-browse IF THE special PROP IS TRUE
  it("It shoul have class special-browse if special is true", ()=>{

    //THE FOLLOWING LINES PASSES THE DESIRED PROP TO THE COMPONENT
    wrapper.setProps({special:true})

    //NOW THAT I HAVE PASSED THE PROP I EXPECT TO FIND A DIV TAG WITH CLASSNAME special-browse
    const divwithclass= wrapper.find("div.special-browse");
    expect(divwithclass);
  })


})