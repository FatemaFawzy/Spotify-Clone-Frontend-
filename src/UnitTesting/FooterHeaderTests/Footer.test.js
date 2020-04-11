//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import Footer from "../../Components/WelcomeRelated/Footer"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Footer Container test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Footer/> ); 
  });


  it("Should have a span", ()=>{
   const span= wrapper.find("span.bottom-right");
    expect(span).toHaveLength(1);
  })

  it("Should have an image tag", ()=>{
    const image= wrapper.find("img");
     expect(image).toHaveLength(1);
  })

  it("Should have a patent paragraphc", ()=>{
    const patent= wrapper.find("p.bottom-right");
     expect(patent.text()).toContain("© 2020 Spotify AB");
  })

})