//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import OverviewContent from "../../Components/UserAccountProfile/Overview/OverviewContent"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("OverviewContent Container test", ()=>{


  it("Should reder the wrpper div correctly", ()=>{
    const wrapper = shallow(<OverviewContent passedInfo={{email:"",userName:"",gender:"",birthDate:""}}/> ); 
    const wrapperdiv= wrapper.find("div.ac-ov");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should have four info lines", ()=>{
    const wrapper = shallow(<OverviewContent passedInfo={{email:"",userName:"",gender:"",birthDate:""}}/> ); 
    const InfoLine= wrapper.find("InfoLine");
    expect(InfoLine).toHaveLength(4);
  })


})