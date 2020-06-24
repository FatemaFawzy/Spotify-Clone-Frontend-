//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST


//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, mount,configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {SongsByGenre} from "@/Components/SearchComponents/SongsByGenre";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("SongsByGenre Container test", ()=>{

  //RENDERING TESTS
  it("Should have a SongSearched component", ()=>{
    const wrapper = shallow(<SongsByGenre />);
    expect(wrapper.find("SongSearched"));
  })
  it("Should have a Genre title", ()=>{
    const wrapper = shallow(<SongsByGenre />);
    expect(wrapper.find("div.genre-title")).toHaveLength(1);
  })
})