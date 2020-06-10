//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ArtistInformation} from "../../Containers/ArtistAccount/ArtistInformation";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Artist Information Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ArtistInformation /> ); 
  });
 
  it("Should have 1 table", ()=>{
    const table=wrapper.find("table");
    expect(table).toHaveLength(1);
  })
  
  it("Should have 12 list items", ()=>{
    const lis=wrapper.find("li");
    expect(lis).toHaveLength(12);
  })

  it("Should have 1 icon", ()=>{
    const icon=wrapper.find("i");
    expect(icon).toHaveLength(1);
  })
})
