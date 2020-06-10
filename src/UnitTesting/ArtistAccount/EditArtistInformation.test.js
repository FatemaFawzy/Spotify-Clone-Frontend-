//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {EditArtistInformation} from "../../Containers/ArtistAccount/EditArtistInformation";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Edit Artist Information Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditArtistInformation /> ); 
  });
 
  it("Should have 1 table", ()=>{
    const table=wrapper.find("table");
    expect(table).toHaveLength(1);
  })
  
  it("Should have 1 info content", ()=>{
    const div=wrapper.find("div.info-content");
    expect(div).toHaveLength(1);
  })

  it("Should have 8 inputs", ()=>{
    const inputs=wrapper.find("input");
    expect(inputs).toHaveLength(8);
  })
})
describe("Edit Artist Information Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditArtistInformation /> ); 
  });
 
  it("Should have 1 table", ()=>{
    const table=wrapper.find("table");
    expect(table).toHaveLength(1);
  })
  
  it("Should have 1 info content", ()=>{
    const div=wrapper.find("div.info-content");
    expect(div).toHaveLength(1);
  })

  it("Should have 8 inputs", ()=>{
    const inputs=wrapper.find("input");
    expect(inputs).toHaveLength(8);
  })
})
