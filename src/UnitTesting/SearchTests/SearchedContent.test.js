//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import SearchedContent from "@/Components/SearchComponents/SearchedContent";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("SearchedContent test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;

  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES


  it("Should render Loading if loading is true and search field is not empty", ()=>{
    wrapper = shallow(<SearchedContent songs={[]} artists={[]} albums={[]} playlists={[]} profiles={[]}/> );
    wrapper.setProps({searchfieldvalue:"something",loading:true });
    const spinner= wrapper.find("i.fa-spin");
    expect(spinner).toHaveLength(1);
  })

})