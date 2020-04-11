//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import InfoLine from "../../Components/UserAccountProfile/InfoLine"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("InfoLine Container test", ()=>{


  it("Should reder the wrpper div correctly", ()=>{
    const wrapper = shallow(<InfoLine title="" info=""/> ); 
    const wrapperdiv= wrapper.find("div.acc-info");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should have 2 paragraphs with a text equal to the passed title and passed info respectively", ()=>{
    const wrapper = shallow(<InfoLine InfoLine title="gender" info="M"/> ); 
    const p1= wrapper.find("p").at(0).text();
    expect(p1).toEqual("gender");

    const p2= wrapper.find("p").at(1).text();
    expect(p2).toEqual("M");
    

  })


})